"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[6079],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,f=c["".concat(d,".").concat(u)]||c[u]||s[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[c]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var r=n(1966),o=(n(9496),n(9613));const a={sidebar_label:"/giveammo"},i="Give Ammo",m={unversionedId:"es_extended/Commands/giveAmmo",id:"es_extended/Commands/giveAmmo",title:"Give Ammo",description:"This command adds ammo to the weapon of the player with the specified id.",source:"@site/docs/es_extended/Commands/giveAmmo.mdx",sourceDirName:"es_extended/Commands",slug:"/es_extended/Commands/giveAmmo",permalink:"/es_extended/Commands/giveAmmo",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Commands/giveAmmo.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"/giveammo"},sidebar:"documentationSidebar",previous:{title:"/giveaccountmoney",permalink:"/es_extended/Commands/giveAccountMoney"},next:{title:"/giveitem",permalink:"/es_extended/Commands/giveItem"}},d={},l=[],p={toc:l},c="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"give-ammo"},"Give Ammo"),(0,o.kt)("p",null,"This command adds ammo to the weapon of the player with the specified id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"/giveammo [id] [weaponName] [ammo]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"id: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," (the server id of the target player)"),(0,o.kt)("li",{parentName:"ul"},"weaponName: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," (the name of the weapon to add ammo for)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"you can find the list of weapons ",(0,o.kt)("a",{parentName:"em",href:"https://wiki.rage.mp/index.php?title=Weapons"},"here"))))),(0,o.kt)("li",{parentName:"ul"},"ammo: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," (the amount of ammo for the spcified weapon to add to the player)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"By default only admins can execute this command"))))}s.isMDXComponent=!0}}]);