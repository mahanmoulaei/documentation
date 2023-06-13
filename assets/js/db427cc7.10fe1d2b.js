"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[896],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(1966),a=(n(9496),n(9613));const i={title:"pnpm"},p=void 0,l={unversionedId:"pnpm",id:"pnpm",title:"pnpm",description:"pnpm is a fast and disk space efficient package manager, serving as an alternative to npm and yarn.",source:"@site/guides/pnpm.mdx",sourceDirName:".",slug:"/pnpm",permalink:"/guides/pnpm",draft:!1,tags:[],version:"current",frontMatter:{title:"pnpm"},sidebar:"defaultSidebar",previous:{title:"Node.js",permalink:"/guides/nodeJs"},next:{title:"txAdmin server creator",permalink:"/guides/txAdmin"}},o={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm is a fast and disk space efficient package manager, serving as an alternative to npm and yarn."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you have ",(0,a.kt)("a",{parentName:"li",href:"./nodejs"},"installed Node.js"),"."),(0,a.kt)("li",{parentName:"ul"},"Open a command-line terminal (e.g. Terminal, Command Prompt)."),(0,a.kt)("li",{parentName:"ul"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g pnpm")," to globally install the package."),(0,a.kt)("li",{parentName:"ul"},"You can install dependencies with pnpm using ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm i"),".")),(0,a.kt)("p",null,"You can reference ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," files for available scripts, i.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "start": "vite",\n  "watch": "vite build --watch",\n  "build": "tsc && vite build",\n  "preview": "vite preview",\n  "format": "prettier --write \\"./src/**/*.{ts,tsx,css}\\""\n},\n')),(0,a.kt)("p",null,"Using the example above ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build")," will run the build script for the given package."))}m.isMDXComponent=!0}}]);