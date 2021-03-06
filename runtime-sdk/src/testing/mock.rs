//! Mock dispatch context for use in tests.
use std::collections::BTreeMap;

use io_context::Context as IoContext;

use oasis_core_runtime::{common::cbor, consensus::roothash, storage::mkvs};

use crate::{
    context::{DispatchContext, Mode},
    types::transaction,
};

/// Mock dispatch context factory.
pub struct Mock {
    pub runtime_header: roothash::Header,
    pub runtime_round_results: roothash::RoundResults,
    pub runtime_storage: mkvs::OverlayTree<mkvs::Tree>,

    pub max_messages: u32,
}

impl Mock {
    /// Create a new mock dispatch context.
    pub fn create_ctx(&mut self) -> DispatchContext<'_> {
        DispatchContext {
            mode: Mode::ExecuteTx,
            runtime_header: &self.runtime_header,
            runtime_round_results: &self.runtime_round_results,
            runtime_storage: &mut self.runtime_storage,
            io_ctx: IoContext::background().freeze(),
            messages: Vec::new(),
            max_messages: self.max_messages,
            values: BTreeMap::new(),
        }
    }
}

impl Default for Mock {
    fn default() -> Self {
        Self {
            runtime_header: roothash::Header::default(),
            runtime_round_results: roothash::RoundResults::default(),
            runtime_storage: mkvs::OverlayTree::new(
                mkvs::Tree::make()
                    .with_root_type(mkvs::RootType::State)
                    .new(Box::new(mkvs::sync::NoopReadSyncer)),
            ),
            max_messages: 32,
        }
    }
}

/// Create a new mock transaction.
pub fn transaction() -> transaction::Transaction {
    transaction::Transaction {
        version: 1,
        call: transaction::Call {
            method: "mock".to_owned(),
            body: cbor::Value::Null,
        },
        auth_info: transaction::AuthInfo {
            signer_info: vec![],
            fee: transaction::Fee {
                amount: Default::default(),
                gas: 0,
            },
        },
    }
}
