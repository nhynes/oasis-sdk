(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, V&gt; UpperHex for BitArray&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: BitView + Sized,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; UpperHex for Domain&lt;'_, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; UpperHex for BitSlice&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T:&nbsp;ArrayLength&lt;u8&gt;&gt; UpperHex for GenericArray&lt;u8, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Add&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Add&lt;T&gt;&gt;::Output: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["half"] = [{"text":"impl UpperHex for bf16","synthetic":false,"types":[]},{"text":"impl UpperHex for f16","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl UpperHex for BigInt","synthetic":false,"types":[]},{"text":"impl UpperHex for BigUint","synthetic":false,"types":[]}];
implementors["sgx_isa"] = [{"text":"impl UpperHex for AttributesFlags","synthetic":false,"types":[]},{"text":"impl UpperHex for Miscselect","synthetic":false,"types":[]},{"text":"impl UpperHex for TcsFlags","synthetic":false,"types":[]},{"text":"impl UpperHex for SecinfoFlags","synthetic":false,"types":[]},{"text":"impl UpperHex for Keypolicy","synthetic":false,"types":[]}];
implementors["wyz"] = [{"text":"impl&lt;T:&nbsp;Binary + UpperHex&gt; UpperHex for FmtBinary&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Display + UpperHex&gt; UpperHex for FmtDisplay&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerExp + UpperHex&gt; UpperHex for FmtLowerExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerHex + UpperHex&gt; UpperHex for FmtLowerHex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Octal + UpperHex&gt; UpperHex for FmtOctal&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Pointer + UpperHex&gt; UpperHex for FmtPointer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperExp + UpperHex&gt; UpperHex for FmtUpperExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperHex&gt; UpperHex for FmtUpperHex&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()