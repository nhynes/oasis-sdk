(function() {var implementors = {};
implementors["arbitrary"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["base64"] = [{"text":"impl Error for DecodeError","synthetic":false,"types":[]}];
implementors["bech32"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["bincode"] = [{"text":"impl Error for ErrorKind","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Error for ParseError","synthetic":false,"types":[]},{"text":"impl Error for RoundingError","synthetic":false,"types":[]}];
implementors["crossbeam_channel"] = [{"text":"impl&lt;T:&nbsp;Send&gt; Error for SendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Error for TrySendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Error for SendTimeoutError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Error for RecvError","synthetic":false,"types":[]},{"text":"impl Error for TryRecvError","synthetic":false,"types":[]},{"text":"impl Error for RecvTimeoutError","synthetic":false,"types":[]},{"text":"impl Error for TrySelectError","synthetic":false,"types":[]},{"text":"impl Error for SelectTimeoutError","synthetic":false,"types":[]}];
implementors["crypto_mac"] = [{"text":"impl Error for MacError","synthetic":false,"types":[]},{"text":"impl Error for InvalidKeyLength","synthetic":false,"types":[]}];
implementors["darling_core"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["deoxysii"] = [{"text":"impl Error for DecryptionError","synthetic":false,"types":[]}];
implementors["digest"] = [{"text":"impl Error for InvalidOutputSize","synthetic":false,"types":[]}];
implementors["elliptic_curve"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["futures"] = [{"text":"impl&lt;E&gt; Error for SharedError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Error,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for ReuniteError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Error for Canceled","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for SendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for TrySendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for SendError&lt;T&gt;","synthetic":false,"types":[]}];
implementors["getrandom"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["hex"] = [{"text":"impl Error for FromHexError","synthetic":false,"types":[]}];
implementors["io_context"] = [{"text":"impl Error for DoneReason","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Error for SetLoggerError","synthetic":false,"types":[]},{"text":"impl Error for ParseLevelError","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Error for ParseBigIntError","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Error for TryFromBigIntError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["oasis_core_runtime"] = [{"text":"impl Error for ProtocolError","synthetic":false,"types":[]},{"text":"impl Error for SyncerError","synthetic":false,"types":[]},{"text":"impl Error for CheckOnlySuccess","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["oasis_runtime_sdk"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["pem"] = [{"text":"impl Error for PemError","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Error for LexError","synthetic":false,"types":[]}];
implementors["rand"] = [{"text":"impl Error for BernoulliError","synthetic":false,"types":[]},{"text":"impl Error for WeightedError","synthetic":false,"types":[]},{"text":"impl Error for ReadError","synthetic":false,"types":[]}];
implementors["rand_core"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for CaseFoldError","synthetic":false,"types":[]},{"text":"impl Error for UnicodeWordError","synthetic":false,"types":[]}];
implementors["ring"] = [{"text":"impl Error for Unspecified","synthetic":false,"types":[]},{"text":"impl Error for KeyRejected","synthetic":false,"types":[]}];
implementors["rustc_hex"] = [{"text":"impl Error for FromHexError","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["serde_cbor"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["signature"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["slog"] = [{"text":"impl&lt;D&gt; Error for MutexDrainError&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Drain,<br>&nbsp;&nbsp;&nbsp;&nbsp;D::Err: Debug + Display + Error,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["snow"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["strsim"] = [{"text":"impl Error for StrSimError","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["test_runtime_simple_keyvalue"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Error for OutOfRangeError","synthetic":false,"types":[]},{"text":"impl Error for ParseError","synthetic":false,"types":[]}];
implementors["tokio_current_thread"] = [{"text":"impl Error for RunError","synthetic":false,"types":[]},{"text":"impl Error for RunTimeoutError","synthetic":false,"types":[]},{"text":"impl Error for TurnError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug&gt; Error for BlockError&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tokio_executor"] = [{"text":"impl Error for EnterError","synthetic":false,"types":[]},{"text":"impl Error for SpawnError","synthetic":false,"types":[]}];
implementors["webpki"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for InvalidDNSNameError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()