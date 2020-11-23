(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(105)),i={title:"Overview",slug:"/examples"},c={unversionedId:"examples/overview",id:"examples/overview",isDocsHomePage:!1,title:"Overview",description:"In our examples folder you find a number of examples written in ink!.",source:"@site/docs/examples/overview.md",slug:"/examples",permalink:"/ink-docs/examples",editUrl:"https://github.com/ink-docs/edit/master/docs/examples/overview.md",version:"current",sidebar:"reference",previous:{title:"Custom Datastructures",permalink:"/ink-docs/datastructures/custom-datastructure"},next:{title:"Overview",permalink:"/ink-docs/cargo-contract-cli"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In our ",Object(o.b)("a",{href:"https://github.com/paritytech/ink/tree/master/examples"},"examples folder")," you find a number of examples written in ink!."),Object(o.b)("p",null,"Some of the most interesting ones:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delegator")," \u2012 Implements cross-contract calling."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"trait-erc20")," \u2012 Defines a trait for ",Object(o.b)("inlineCode",{parentName:"li"},"Erc20")," contracts and implements it."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"erc721")," \u2012 An exemplary implementation of ",Object(o.b)("inlineCode",{parentName:"li"},"Erc721")," NFT tokens."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dns")," \u2012  A simple ",Object(o.b)("inlineCode",{parentName:"li"},"DomainNameService")," smart contract."),Object(o.b)("li",{parentName:"ul"},"\u2026and more, just rummage through the folder \ud83d\ude43.")),Object(o.b)("p",null,"To build a single example navigate to the root of the example and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo contract build\n")),Object(o.b)("p",null,"As a result you'll get a file ",Object(o.b)("inlineCode",{parentName:"p"},"target/flipper.wasm")," file, a ",Object(o.b)("inlineCode",{parentName:"p"},"metadata.json")," file and a ",Object(o.b)("inlineCode",{parentName:"p"},"<contract-name>.contract")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"target")," folder of your contract.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},".contract")," file combines the Wasm and metadata into one file and needs to be used when deploying the contract."),Object(o.b)("p",null,"For further information, please have a look at the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#play-with-it"}),"Play with It")," section or our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://substrate.dev/substrate-contracts-workshop/"}),"smart contracts workshop"),"."))}s.isMDXComponent=!0}}]);