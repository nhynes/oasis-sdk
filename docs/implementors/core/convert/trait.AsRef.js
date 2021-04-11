(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl AsRef&lt;dyn Error + 'static + Sync + Send&gt; for Error","synthetic":false,"types":[]},{"text":"impl AsRef&lt;dyn Error + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["bech32"] = [{"text":"impl AsRef&lt;u8&gt; for u5","synthetic":false,"types":[]}];
implementors["bitvec"] = [{"text":"impl&lt;O, V&gt; AsRef&lt;BitSlice&lt;O, &lt;V as BitView&gt;::Store&gt;&gt; for BitArray&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: BitView + Sized,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, '_&gt; AsRef&lt;BitSlice&lt;O, T&gt;&gt; for Iter&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["const_oid"] = [{"text":"impl AsRef&lt;[u32]&gt; for ObjectIdentifier","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; AsRef&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["darling_core"] = [{"text":"impl AsRef&lt;Ident&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for SpannedValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["ecdsa"] = [{"text":"impl&lt;C&gt; AsRef&lt;[u8]&gt; for Signature&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::FieldSize: Add + ArrayLength&lt;u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;MaxSize&lt;C&gt;: ArrayLength&lt;u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C::FieldSize as Add&gt;::Output: Add&lt;MaxOverhead&gt; + ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;C&gt; AsRef&lt;[u8]&gt; for Signature&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve + CheckSignatureBytes,<br>&nbsp;&nbsp;&nbsp;&nbsp;SignatureSize&lt;C&gt;: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["ed25519"] = [{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["ed25519_dalek"] = [{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for SecretKey","synthetic":false,"types":[]}];
implementors["elliptic_curve"] = [{"text":"impl&lt;C&gt; AsRef&lt;[u8]&gt; for EncodedPoint&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve,<br>&nbsp;&nbsp;&nbsp;&nbsp;UntaggedPointSize&lt;C&gt;: Add&lt;U1&gt; + ArrayLength&lt;u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;UncompressedPointSize&lt;C&gt;: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;C&gt; AsRef&lt;&lt;&lt;C as ProjectiveArithmetic&gt;::ProjectivePoint as Curve&gt;::AffineRepr&gt; for PublicKey&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve + ProjectiveArithmetic,<br>&nbsp;&nbsp;&nbsp;&nbsp;FieldBytes&lt;C&gt;: From&lt;Scalar&lt;C&gt;&gt; + for&lt;'r&gt; From&lt;&amp;'r Scalar&lt;C&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Scalar&lt;C&gt;: PrimeField&lt;Repr = FieldBytes&lt;C&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;AffinePoint&lt;C&gt;: Copy + Clone + Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;C&gt; AsRef&lt;&lt;&lt;C as ProjectiveArithmetic&gt;::ProjectivePoint as Group&gt;::Scalar&gt; for NonZeroScalar&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve + ProjectiveArithmetic,<br>&nbsp;&nbsp;&nbsp;&nbsp;FieldBytes&lt;C&gt;: From&lt;Scalar&lt;C&gt;&gt; + for&lt;'r&gt; From&lt;&amp;'r Scalar&lt;C&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Scalar&lt;C&gt;: PrimeField&lt;Repr = FieldBytes&lt;C&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;Curve&gt; AsRef&lt;[u8]&gt; for SecretBytes&lt;C&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 1]&gt; for GenericArray&lt;T, U1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 2]&gt; for GenericArray&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 3]&gt; for GenericArray&lt;T, U3&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 4]&gt; for GenericArray&lt;T, U4&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 5]&gt; for GenericArray&lt;T, U5&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 6]&gt; for GenericArray&lt;T, U6&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 7]&gt; for GenericArray&lt;T, U7&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 8]&gt; for GenericArray&lt;T, U8&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 9]&gt; for GenericArray&lt;T, U9&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 10]&gt; for GenericArray&lt;T, U10&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 11]&gt; for GenericArray&lt;T, U11&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 12]&gt; for GenericArray&lt;T, U12&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 13]&gt; for GenericArray&lt;T, U13&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 14]&gt; for GenericArray&lt;T, U14&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 15]&gt; for GenericArray&lt;T, U15&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 16]&gt; for GenericArray&lt;T, U16&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 17]&gt; for GenericArray&lt;T, U17&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 18]&gt; for GenericArray&lt;T, U18&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 19]&gt; for GenericArray&lt;T, U19&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 20]&gt; for GenericArray&lt;T, U20&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 21]&gt; for GenericArray&lt;T, U21&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 22]&gt; for GenericArray&lt;T, U22&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 23]&gt; for GenericArray&lt;T, U23&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 24]&gt; for GenericArray&lt;T, U24&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 25]&gt; for GenericArray&lt;T, U25&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 26]&gt; for GenericArray&lt;T, U26&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 27]&gt; for GenericArray&lt;T, U27&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 28]&gt; for GenericArray&lt;T, U28&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 29]&gt; for GenericArray&lt;T, U29&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 30]&gt; for GenericArray&lt;T, U30&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 31]&gt; for GenericArray&lt;T, U31&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 32]&gt; for GenericArray&lt;T, U32&gt;","synthetic":false,"types":[]}];
implementors["intrusive_collections"] = [{"text":"impl&lt;T:&nbsp;?Sized&gt; AsRef&lt;T&gt; for UnsafeRef&lt;T&gt;","synthetic":false,"types":[]}];
implementors["k256"] = [{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["oasis_core_runtime"] = [{"text":"impl AsRef&lt;[u8]&gt; for Hash","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Namespace","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for MrEnclave","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for MrSigner","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for SessionID","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for RawProofEntry","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Prefix","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for CoarsenedKey","synthetic":false,"types":[]}];
implementors["oasis_runtime_sdk"] = [{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Address","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Denomination","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["ring"] = [{"text":"impl&lt;A&gt; AsRef&lt;[u8]&gt; for Aad&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: AsRef&lt;[u8]&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8; 12]&gt; for Nonce","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Digest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Document","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for RsaSubjectPublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["serde_bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for ByteBuf","synthetic":false,"types":[]}];
implementors["sgx_isa"] = [{"text":"impl AsRef&lt;[u8]&gt; for Secs","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Attributes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tcs","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Pageinfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Secinfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Pcmd","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Sigstruct","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Einittoken","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Report","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Targetinfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Keyrequest","synthetic":false,"types":[]}];
implementors["webpki"] = [{"text":"impl AsRef&lt;str&gt; for DNSName","synthetic":false,"types":[]}];
implementors["wyz"] = [{"text":"impl&lt;T:&nbsp;Binary&gt; AsRef&lt;T&gt; for FmtBinary&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Display&gt; AsRef&lt;T&gt; for FmtDisplay&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerExp&gt; AsRef&lt;T&gt; for FmtLowerExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerHex&gt; AsRef&lt;T&gt; for FmtLowerHex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Octal&gt; AsRef&lt;T&gt; for FmtOctal&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Pointer&gt; AsRef&lt;T&gt; for FmtPointer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperExp&gt; AsRef&lt;T&gt; for FmtUpperExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperHex&gt; AsRef&lt;T&gt; for FmtUpperHex&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()