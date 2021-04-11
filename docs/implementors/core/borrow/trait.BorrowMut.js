(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, V&gt; BorrowMut&lt;BitSlice&lt;O, &lt;V as BitView&gt;::Store&gt;&gt; for BitArray&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: BitView + Sized,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; BorrowMut&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; BorrowMut&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["serde_bytes"] = [{"text":"impl BorrowMut&lt;Bytes&gt; for ByteBuf","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()