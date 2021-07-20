(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,u=c["".concat(i,".").concat(p)]||c[p]||b[p]||o;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),o=(n(0),n(182)),i={sidebar_position:8,keywords:"runtime, beginner, basics"},l={unversionedId:"basics/publish-pallet",id:"basics/publish-pallet",isDocsHomePage:!1,title:"Publish a pallet to its own crate",description:"Make your pallet available for others to use!",source:"@site/docs/01-basics/publish-pallet.md",sourceDirName:"01-basics",slug:"/basics/publish-pallet",permalink:"/substrate-how-to-guides/docs/basics/publish-pallet",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/01-basics/publish-pallet.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,keywords:"runtime, beginner, basics"},sidebar:"tutorialSidebar",previous:{title:"Using helper functions",permalink:"/substrate-how-to-guides/docs/basics/helper-functions"},next:{title:"Create and use a struct in storage",permalink:"/substrate-how-to-guides/docs/pallet-design/storage-value-struct"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Renaming your crate",id:"1-renaming-your-crate",children:[]},{value:"2. Ensure consistent dependencies",id:"2-ensure-consistent-dependencies",children:[]},{value:"3. Add your pallet to your node",id:"3-add-your-pallet-to-your-node",children:[]},{value:"4. Run your node",id:"4-run-your-node",children:[]},{value:"5. Publish your pallet",id:"5-publish-your-pallet",children:[]},{value:"6. Updating your runtime&#39;s dependencies",id:"6-updating-your-runtimes-dependencies",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],d={toc:s};function c(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Make your pallet available for others to use!")),Object(o.mdx)("h2",{id:"goal"},"Goal"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Learn the patterns to write a Substrate pallet that lives in its own crate"),Object(o.mdx)("li",{parentName:"ul"},"Publish a pallet to Github and Crates.io"),Object(o.mdx)("li",{parentName:"ul"},"Include your pallet in a Substrate Node from Github and Crates.io")),Object(o.mdx)("h2",{id:"use-cases"},"Use cases"),Object(o.mdx)("p",null,"Make your pallet available for other developers to use remotely."),Object(o.mdx)("h2",{id:"overview"},"Overview"),Object(o.mdx)("p",null,"Writing a Substrate pallet in its own Rust crate, and publishing it allows other\nblockchain developers to easily use your pallet in their runtime by simply including those same\nfour lines of code in their runtime's ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," files and updating their runtime's ",Object(o.mdx)("inlineCode",{parentName:"p"},"lib.rs")," file."),Object(o.mdx)("p",null,"This guide is not going to go through writing a pallet directly as part of the node template, but rather as a separate\nRust crate. This approach allows us to publish our pallet separately from our node and also allows\nothers to easily import this pallet into their own Substrate runtime."),Object(o.mdx)("h2",{id:"steps"},"Steps"),Object(o.mdx)("h3",{id:"1-renaming-your-crate"},"1. Renaming your crate"),Object(o.mdx)("p",null,"In the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file, you must update the crate's name. Update the value\nof the ",Object(o.mdx)("inlineCode",{parentName:"p"},"package.name")," attribute in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file to ",Object(o.mdx)("inlineCode",{parentName:"p"},"test-pallet"),"."),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"package")," section of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file now looks like:"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"strong"},"pallets/test-pallet/Cargo.toml"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-toml"},"[package]\nauthors = ['Substrate DevHub <https://github.com/substrate-developer-hub>']\ndescription = 'FRAME pallet template'\nedition = '2018'\nhomepage = 'https://substrate.dev'\nlicense = 'Unlicensed'\nname = 'test-pallet'\nrepository = 'https://github.com/substrate-developer-hub/substrate-pallet-template/'\nversion = '3.0.0'\n")),Object(o.mdx)("h4",{id:"compile-the-template-pallet"},"Compile the Template Pallet"),Object(o.mdx)("p",null,"You should be able to successfully check the Substrate pallet template with:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd test-pallet\nSKIP_WASM_BUILD=1 cargo check\n")),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Your Pallet's ",Object(o.mdx)("inlineCode",{parentName:"h5"},"std")," Feature")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"In your ",Object(o.mdx)("inlineCode",{parentName:"p"},"pallets/test-pallet/Cargo.toml"),' file, you will notice a few lines about the "',Object(o.mdx)("inlineCode",{parentName:"p"},"std"),'\nfeature". In Rust, when you enable ',Object(o.mdx)("inlineCode",{parentName:"p"},"std"),", you give your project access to\n",Object(o.mdx)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/"},"the Rust standard libraries"),". This works just fine when building\nnative binaries.\nHowever, Substrate also builds the runtime code to WebAssembly (Wasm). In this case we use cargo\nfeatures to disable the Rust standard library. Thus, all the dependencies we use for our pallet, and\nour entire runtime, must be able to compile with\n",Object(o.mdx)("a",{parentName:"p",href:"https://rust-embedded.github.io/book/intro/no-std.html"},Object(o.mdx)("inlineCode",{parentName:"a"},"no_std"))," feature. Our ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file\ntells our pallet's dependencies to only use their ",Object(o.mdx)("inlineCode",{parentName:"p"},"std")," feature when this pallet also uses its ",Object(o.mdx)("inlineCode",{parentName:"p"},"std")," feature."))),Object(o.mdx)("h3",{id:"2-ensure-consistent-dependencies"},"2. Ensure consistent dependencies"),Object(o.mdx)("h4",{id:"frame-dependencies"},"FRAME dependencies"),Object(o.mdx)("p",null,"All Substrate pallets will depend on some low-level FRAME libraries such as ",Object(o.mdx)("inlineCode",{parentName:"p"},"frame-system")," and\n",Object(o.mdx)("inlineCode",{parentName:"p"},"frame-support"),". These libraries are pulled from crates.io. When people build their own FRAME-based\nruntimes, they will also have dependencies on these low-level libraries. You will need to ensure\nconsistent dependencies between your pallet and your runtime."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"strong"},"pallets/test-pallet/Cargo.toml"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-TOML"},"# --snip--\n[dependencies]\nframe-support = { default-features = false, version = '3.0.0' }\n# --snip--\n")),Object(o.mdx)("p",null,"From the above snippet, we see that this pallet template depends on version ",Object(o.mdx)("inlineCode",{parentName:"p"},"3.0.0")," of the low-level\nlibraries. Thus it can be used in runtimes that also depend on ",Object(o.mdx)("inlineCode",{parentName:"p"},"3.0.0"),"."),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"Note that substrate adheres to the ",Object(o.mdx)("a",{parentName:"p",href:"https://semver.org/"},"semver")," standards - thus each release is\non the form ",Object(o.mdx)("inlineCode",{parentName:"p"},"major.minor.patch"),". In general it is ",Object(o.mdx)("em",{parentName:"p"},"not")," expected that major releases are compatible!\nThus if you are developing a pallet, or integrating ones, be sure to match versions to keep things\nall working correctly."))),Object(o.mdx)("h4",{id:"dev-dependencies"},"Dev dependencies"),Object(o.mdx)("p",null,"The final section of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file specifies the dev dependencies. These are the\ndependencies that are needed in your pallet's tests, but not the actual pallet itself."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"strong"},"pallets/test-pallet/Cargo.toml"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-TOML"},"# --snip--\n[dev-dependencies]\nsp-core = { default-features = false, version = '3.0.0' }\n# --snip--\n")),Object(o.mdx)("p",null,"You can confirm that the tests in the Substrate pallet template pass with:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"SKIP_WASM_BUILD=1 cargo test\n")),Object(o.mdx)("p",null,"When updating this pallet to include your own custom logic, you will likely add dependencies of your\nown to this ",Object(o.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," file."),Object(o.mdx)("h3",{id:"3-add-your-pallet-to-your-node"},"3. Add your pallet to your node"),Object(o.mdx)("p",null,"Refer to ",Object(o.mdx)("a",{parentName:"p",href:"/docs/basics/basic-pallet-integration"},"this guide")," on how to complete this step."),Object(o.mdx)("h3",{id:"4-run-your-node"},"4. Run your node"),Object(o.mdx)("p",null,"At this point you have the pallet packaged up in its own crate and included in your node's runtime."),Object(o.mdx)("p",null,"Make sure you're back in the node template's root directory, then compile the node and start in\ndevelopment mode with the following command:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n./target/release/node-template --tmp --dev\n")),Object(o.mdx)("p",null,"Now, start the\n",Object(o.mdx)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics?rpc=ws://127.0.0.1:9944"},"Polkadot-JS Apps connecting to your local node"),"\nto confirm that the pallet is working as expected."),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"You can also manually set the node URL in Polkadot-JS Apps by navigating to the ",Object(o.mdx)("strong",{parentName:"p"},"Settings")," tab, and have the ",Object(o.mdx)("strong",{parentName:"p"},"remote node/endpoint to connect to")," set to ",Object(o.mdx)("strong",{parentName:"p"},"Local Node"),"."))),Object(o.mdx)("h3",{id:"5-publish-your-pallet"},"5. Publish your pallet"),Object(o.mdx)("p",null,"Once your pallet is no longer in test phase, you should consider publishing it to ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," or\n",Object(o.mdx)("a",{parentName:"p",href:"https://crates.io/"},"crates.io"),", the crate registry for the Rust community."),Object(o.mdx)("h4",{id:"publishing-on-github"},"Publishing on GitHub"),Object(o.mdx)("p",null,"To publish on GitHub, you need to\n",Object(o.mdx)("a",{parentName:"p",href:"https://help.github.com/en/articles/create-a-repo"},"create a GitHub repository")," and\n",Object(o.mdx)("a",{parentName:"p",href:"https://help.github.com/en/articles/pushing-to-a-remote"},"push your pallet's code")," to it."),Object(o.mdx)("h4",{id:"publishing-on-cratesio"},"Publishing on Crates.io"),Object(o.mdx)("p",null,"Crates.io allows permissionless publishing. Learn the procedure following their own guide about\n",Object(o.mdx)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/publishing.html"},"publishing on crates.io")),Object(o.mdx)("h3",{id:"6-updating-your-runtimes-dependencies"},"6. Updating your runtime's dependencies"),Object(o.mdx)("p",null,"With your pallet now published on GitHub, crates.io, or both, we can update your runtime to use the\ncode that is published instead of a hard-coded file system path."),Object(o.mdx)("h4",{id:"dependencies-from-github"},"Dependencies from GitHub"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"strong"},"runtime/Cargo.toml"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-TOML"},"[dependencies.your-pallet-name]\ndefault_features = false\ngit = 'https://github.com/your-username/your-pallet'\nbranch = 'master'\n\n# You may choose a specific commit or tag instead of branch\n# rev = '<git-commit>'\n# tag = '<some tag>\n")),Object(o.mdx)("h4",{id:"dependencies-from-cratesio"},"Dependencies from Crates.io"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"strong"},"runtime/Cargo.toml"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-TOML"},"[dependencies.your-pallet-name]\ndefault_features = false\nversion = 'some-compatible-version'\n")),Object(o.mdx)("p",null,"Compile one more time and notice that Cargo now grabs your pallet from GitHub or crates.io instead of using the local files."),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/example"},"Example pallet"))),Object(o.mdx)("h2",{id:"resources"},"Resources"),Object(o.mdx)("h4",{id:"other"},"Other"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/cargo/"},"The Cargo book")),Object(o.mdx)("li",{parentName:"ul"},"More about ",Object(o.mdx)("a",{parentName:"li",href:"https://rustwasm.github.io/"},"Rust and WebAssembly"))))}c.isMDXComponent=!0}}]);