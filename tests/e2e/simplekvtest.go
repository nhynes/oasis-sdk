package main

import (
	"bytes"
	"context"
	"fmt"
	"time"

	"github.com/oasisprotocol/oasis-core/go/common/cbor"
	"github.com/oasisprotocol/oasis-core/go/common/logging"

	sdk "github.com/oasisprotocol/oasis-sdk/client-sdk/go"
	"github.com/oasisprotocol/oasis-sdk/client-sdk/go/client"
	"github.com/oasisprotocol/oasis-sdk/client-sdk/go/crypto/signature"
	"github.com/oasisprotocol/oasis-sdk/client-sdk/go/testing"
	"github.com/oasisprotocol/oasis-sdk/client-sdk/go/types"
)

// EventWaitTimeout specifies how long to wait for an event.
const EventWaitTimeout = 20 * time.Second

// The kvKey type must match the Key type from the simple-keyvalue runtime
// in ../runtimes/simple-keyvalue/src/keyvalue/types.rs.
type kvKey struct {
	Key []byte `json:"key"`
}

// The kvKeyValue type must match the KeyValue type from the simple-keyvalue
// runtime in ../runtimes/simple-keyvalue/src/keyvalue/types.rs.
type kvKeyValue struct {
	Key   []byte `json:"key"`
	Value []byte `json:"value"`
}

// The kvInsertEvent type must match the Event::Insert type from the
// simple-keyvalue runtime in ../runtimes/simple-keyvalue/src/keyvalue.rs.
type kvInsertEvent struct {
	KV kvKeyValue `json:"kv"`
}

var kvInsertEventKey = sdk.NewEventKey("keyvalue", 1)

// The kvRemoveEvent type must match the Event::Remove type from the
// simple-keyvalue runtime in ../runtimes/simple-keyvalue/src/keyvalue.rs.
type kvRemoveEvent struct {
	Key kvKey `json:"key"`
}

var kvRemoveEventKey = sdk.NewEventKey("keyvalue", 2)

// GetChainContext returns the chain context.
func GetChainContext(ctx context.Context, rtc client.RuntimeClient) (signature.Context, error) {
	info, err := rtc.GetInfo(ctx)
	if err != nil {
		return "", err
	}
	return info.ChainContext, nil
}

// kvInsert inserts given key-value pair into storage.
func kvInsert(rtc client.RuntimeClient, signer signature.Signer, nonce uint64, key []byte, value []byte) error {
	ctx := context.Background()
	chainCtx, err := GetChainContext(ctx, rtc)
	if err != nil {
		return err
	}

	tx := types.NewTransaction(nil, "keyvalue.Insert", kvKeyValue{
		Key:   key,
		Value: value,
	})
	tx.AppendSignerInfo(signer.Public(), nonce)
	stx := tx.PrepareForSigning()
	stx.AppendSign(chainCtx, signer)

	if _, err = rtc.SubmitTx(ctx, stx.UnverifiedTransaction()); err != nil {
		return err
	}
	return nil
}

// kvRemove removes given key from storage.
func kvRemove(rtc client.RuntimeClient, signer signature.Signer, nonce uint64, key []byte) error {
	ctx := context.Background()
	chainCtx, err := GetChainContext(ctx, rtc)
	if err != nil {
		return err
	}

	tx := types.NewTransaction(nil, "keyvalue.Remove", kvKey{
		Key: key,
	})
	tx.AppendSignerInfo(signer.Public(), nonce)
	stx := tx.PrepareForSigning()
	stx.AppendSign(chainCtx, signer)

	if _, err := rtc.SubmitTx(ctx, stx.UnverifiedTransaction()); err != nil {
		return err
	}
	return nil
}

// kvGet gets given key's value from storage.
func kvGet(rtc client.RuntimeClient, key []byte) ([]byte, error) {
	ctx := context.Background()

	var resp kvKeyValue
	if err := rtc.Query(ctx, client.RoundLatest, "keyvalue.Get", kvKey{Key: key}, &resp); err != nil {
		return nil, err
	}
	return resp.Value, nil
}

func SimpleKVTest(log *logging.Logger, rtc client.RuntimeClient) error {
	signer := testing.Alice.Signer

	testKey := []byte("test_key")
	testValue := []byte("test_value")

	log.Info("inserting test key")
	if err := kvInsert(rtc, signer, 0, testKey, testValue); err != nil {
		return err
	}

	log.Info("fetching test key")
	val, err := kvGet(rtc, testKey)
	if err != nil {
		return err
	}
	if !bytes.Equal(val, testValue) {
		return fmt.Errorf("fetched value does not match inserted value")
	}

	log.Info("removing test key")
	if err := kvRemove(rtc, signer, 1, testKey); err != nil {
		return err
	}

	log.Info("fetching removed key should fail")
	_, err = kvGet(rtc, testKey)
	if err == nil {
		return fmt.Errorf("fetching removed key should fail")
	}

	return nil
}

func KVEventTest(log *logging.Logger, rtc client.RuntimeClient) error {
	signer := testing.Alice.Signer

	testKey := []byte("event_test_key")
	testValue := []byte("event_test_value")

	// Subscribe to blocks.
	ctx := context.Background()
	blkCh, blkSub, err := rtc.WatchBlocks(ctx)
	if err != nil {
		return err
	}
	defer blkSub.Close()

	log.Info("inserting test key")
	if err := kvInsert(rtc, signer, 0, testKey, testValue); err != nil {
		return err
	}

	log.Info("waiting for insert event")
	var gotEvent bool
WaitInsertLoop:
	for {
		select {
		case <-ctx.Done():
			return fmt.Errorf("context terminated")
		case <-time.After(EventWaitTimeout):
			return fmt.Errorf("timed out")
		case blk, ok := <-blkCh:
			if !ok {
				return fmt.Errorf("failed to get block from channel")
			}

			events, err := rtc.GetEvents(ctx, blk.Block.Header.Round)
			if err != nil {
				log.Error("failed to get events",
					"err", err,
					"round", blk.Block.Header.Round,
				)
				return err
			}

			for _, ev := range events {
				switch {
				case kvInsertEventKey.IsEqual(ev.Key):
					var ie kvInsertEvent
					if err = cbor.Unmarshal(ev.Value, &ie); err != nil {
						log.Error("failed to unmarshal insert event",
							"err", err,
						)
						continue
					}

					if bytes.Equal(ie.KV.Key, testKey) && bytes.Equal(ie.KV.Value, testValue) {
						gotEvent = true
						log.Info("got our insert event")
						break WaitInsertLoop
					}
				default:
				}
			}
		}
	}
	if !gotEvent {
		return fmt.Errorf("didn't get insert event")
	}

	log.Info("removing test key")
	if err := kvRemove(rtc, signer, 1, testKey); err != nil {
		return err
	}

	log.Info("waiting for remove event")
	gotEvent = false
WaitRemoveLoop:
	for {
		select {
		case <-ctx.Done():
			return fmt.Errorf("context terminated")
		case <-time.After(EventWaitTimeout):
			return fmt.Errorf("timed out")
		case blk, ok := <-blkCh:
			if !ok {
				return fmt.Errorf("failed to get block from channel")
			}

			events, err := rtc.GetEvents(ctx, blk.Block.Header.Round)
			if err != nil {
				log.Error("failed to get events",
					"err", err,
					"round", blk.Block.Header.Round,
				)
				return err
			}

			for _, ev := range events {
				switch {
				case kvRemoveEventKey.IsEqual(ev.Key):
					var re kvRemoveEvent
					if err = cbor.Unmarshal(ev.Value, &re); err != nil {
						log.Error("failed to unmarshal remove event",
							"err", err,
						)
						continue
					}

					if bytes.Equal(re.Key.Key, testKey) {
						gotEvent = true
						log.Info("got our remove event")
						break WaitRemoveLoop
					}
				default:
				}
			}
		}
	}
	if !gotEvent {
		return fmt.Errorf("didn't get remove event")
	}

	return nil
}
