(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){return function(t){var n=u(t.components);return r.a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,p=l["".concat(o,".").concat(m)]||l[m]||h[m]||i;return n?r.a.createElement(p,d(d({ref:t},s),{},{components:n})):r.a.createElement(p,d({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},38:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),i=(n(0),n(182)),o={sidebar_position:0},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Welcome",description:"_This is work in progress. It's a staging of what will become the official ressource with Substrate's developer hub.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/substrate-how-to-guides/docs/intro",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/intro.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Basic pallet integration",permalink:"/substrate-how-to-guides/docs/basics/basic-pallet-integration"}},d=[{value:"Contribution Guidelines",id:"contribution-guidelines",children:[{value:"Prelude",id:"prelude",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Template",id:"template",children:[]}]},{value:"Content structure",id:"content-structure",children:[{value:"Tags",id:"tags",children:[]}]},{value:"FAQ",id:"faq",children:[]}],c={toc:d};function l(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"This is work in progress. It's a staging of what will become the official ressource with Substrate's developer hub.\nPlease read the contribution guidelines to help improve the on existing content, propose new content or make a PR for brand new content. Learn about how the guide is structured below to better understand the general approach.")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"On this page")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#contribution-guidelines"},"Contribution Guidelines"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#prelude"},"Prelude")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#requirements"},"Requirements")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#template"},"Template")))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#content-structure"},"Content Structure"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#tags"},"Tags")))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"#FAQ"},"FAQ"))),Object(i.mdx)("h2",{id:"contribution-guidelines"},"Contribution Guidelines"),Object(i.mdx)("h3",{id:"prelude"},"Prelude"),Object(i.mdx)("p",null,"Each guide contains various links to ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Knowledgebase")," key terms and other ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/en/"},"Developer hub")," ressources. Most beginner guides link to other intermediate or advanced guides that use the foundations from the more basic guides they build on. In this way, this book aims to become a modular and extensible framework that:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Can expand overtime, by virtue of the ease for contributors to integrate new content that follows these linking guidelines and structure."),Object(i.mdx)("li",{parentName:"ul"},"Provides an indispensible collection of guides for developers of all levels building with Substrate."),Object(i.mdx)("li",{parentName:"ul"},"Connects related resources from the developer hub, including documentation and knowledgebase article.")),Object(i.mdx)("h3",{id:"requirements"},"Requirements"),Object(i.mdx)("p",null,"The following points touch on the approach for building content for the Substrate How-to Guides ressource. Each is a point is requirement that must be taken into account for contributors creating new guides."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"\u25fc\ufe0f ",Object(i.mdx)("strong",{parentName:"li"},"Modularity"),". Each piece needs to be a standalone guide that has a well-defined and useful focus. Anything external to that mustbe linked in a way that they can adapt to change. Why? They need to be able to handle changes to Substrate in a way that offers a path of least resistance when implementing those changes."),Object(i.mdx)("li",{parentName:"ul"},"\ud83d\udd17 ",Object(i.mdx)("strong",{parentName:"li"},"Linking"),". How-to guides are meant to be focused and in-depth. Any background knowledge or additional references must link readers to other developer hub ressources."),Object(i.mdx)("li",{parentName:"ul"},"\u23ef\ufe0f ",Object(i.mdx)("strong",{parentName:"li"},"Examples"),". This is the part for ",Object(i.mdx)("em",{parentName:"li"},'"examples on how to actually put this guide to use or where can I see it put to use"'),". Each example links to some existing codebase or pallet. If new code was created for the guide, this should be pushed to the ",Object(i.mdx)("inlineCode",{parentName:"li"},"example-code")," folder at the top of this directory."),Object(i.mdx)("li",{parentName:"ul"},"\ud83d\udef0\ufe0f ",Object(i.mdx)("strong",{parentName:"li"},"References.")," At the end of each recipe, developers can see a list of related ressources. Here is where all additional related Knowledgebase links go; Rust docs; as well as links to any other related guides."),Object(i.mdx)("li",{parentName:"ul"},"\u23f9\ufe0f ",Object(i.mdx)("strong",{parentName:"li"},"Avoid repetition.")," If there's something that needs to be included in one guide and can be abstracted to a completely separate guide, abstract it and link to it instead of repeating that content. This ties into the modularity aspect too.")),Object(i.mdx)("h3",{id:"template"},"Template"),Object(i.mdx)("p",null,"Each guide needs to follow the following structure, taking into account the requirements from above."),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(i.mdx)("strong",{parentName:"h5"},"Note: ")," copy the markdown template file from ",Object(i.mdx)("a",{parentName:"h5",href:"https://github.com/substrate-developer-hub/substrate-how-to-guides/blob/main/docs/contribute/how-to-template.md"},"here")," to get started.")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("hr",{parentName:"div"}),Object(i.mdx)("h1",{parentName:"div",id:"title"},"Title"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"The guide's intentions should be clear by just reading the title.")),Object(i.mdx)("h2",{parentName:"div",id:"goal"},"Goal"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"What specific goal will this guide achieve?")),Object(i.mdx)("h2",{parentName:"div",id:"use-cases"},"Use cases"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},'What practical use cases can this guide be applied to? This can be general, e.g. "implementing a second currency for users to pay fees in" or specific, for e.g. "a runtime migration from a ',Object(i.mdx)("inlineCode",{parentName:"em"},"Vec<u32>"),' to SomeStruct ". It is likely that the more advanced the guide, the more specific its use cases will be. If more than one, use a bulleted list. Otherwise, one phrase.')),Object(i.mdx)("h2",{parentName:"div",id:"overview"},"Overview"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"A brief overview of why this is a useful guide and what concepts it uses. This is a good place to link to other devhub ressources, including other guides, aiming to give the reader the learning background required to understand how this guide can be useful to them.")),Object(i.mdx)("h2",{parentName:"div",id:"steps"},"Steps"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"What are the steps that will be taken to achieve the goal? Each step should be action driven, with little description, minimal fluff,\nlinking to other docs if needed. Code snippets can help illustrate the steps but should not take over the focus","\u2014",'i.e "how do I do this", not "what do I do".')),Object(i.mdx)("h2",{parentName:"div",id:"examples"},"Examples"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"Code-based examples that make use of this guide. This shows at least one reference of what this guide covers with a working example.This could be a reference to some existing codebase within Substrate or not; or new code that lives in the how-to guide repo.")),Object(i.mdx)("h2",{parentName:"div",id:"resources"},"Resources"),Object(i.mdx)("p",{parentName:"div"},Object(i.mdx)("em",{parentName:"p"},"A bulleted list of links to similar guides; other devhub ressources; and related material. For example, other how-to guides; tutorials; knowledgebase articles; or Rust docs.")))),Object(i.mdx)("h2",{id:"content-structure"},"Content structure"),Object(i.mdx)("p",null,"The structure aims to group HTGs into categories by tagging each guide. For example:"),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"Simple crowdfund."),"\ntags: runtime, intermediate, pallet design")),Object(i.mdx)("p",null,"The current groupings are to help organize the repository of HTG content. They reflect the different\nareas of development within Substrate:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Basics"),". Where the really simple guides live, those that can be referenced by more complex ones."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Pallet design"),". Everything to do with building custom pallets with or without FRAME."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Weights"),". Any content that covers configuring weights for specific use cases."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Testing"),". A collection of guides for testing."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Storage migrations"),". Anything to do with storage migrations."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Consensus"),". Client stuff, bridging, node configurations."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Parachains.")," ",Object(i.mdx)("em",{parentName:"li"},"WIP"))),Object(i.mdx)("h3",{id:"tags"},"Tags"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"basics, beginner, intermediate, advanced, FRAME v1, runtime, pallet design, weights, fees, currency, testing,\nstorage migration, node, client, consensus, proof-of-work")),Object(i.mdx)("h2",{id:"faq"},"FAQ"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},'What is the difference between a "how-to guide" and a tutorial?')),Object(i.mdx)("p",null,"A ",Object(i.mdx)("strong",{parentName:"p"},"how-to guide")," is an in-depth guide intended for someone who is assumed to have prior Substrate knowledge on how to achieve a specific goal. Information inside a guide is only pertinent to achieving that goal. Anything else is irrelevant."),Object(i.mdx)("p",null,"A ",Object(i.mdx)("strong",{parentName:"p"},"tutorial")," is a lesson to teach someone how to achieve something assuming they have no prior knowledge on the subject. They contain more details on the subject; cover breadth (vs. how-to guides which cover depth); and can repeat information across other tutorials."))}l.isMDXComponent=!0}}]);