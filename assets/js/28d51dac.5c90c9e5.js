"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[635],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=m(n),s=o,y=u["".concat(l,".").concat(s)]||u[s]||p[s]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(1966),o=(n(9496),n(9613));const a={sidebar_label:"/giveaccountmoney"},i="Give Account Money",c={unversionedId:"es_extended/Commands/giveAccountMoney",id:"es_extended/Commands/giveAccountMoney",title:"Give Account Money",description:"This command adds money to the account balance of the player with the specified id.",source:"@site/docs/es_extended/Commands/giveAccountMoney.mdx",sourceDirName:"es_extended/Commands",slug:"/es_extended/Commands/giveAccountMoney",permalink:"/es_extended/Commands/giveAccountMoney",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Commands/giveAccountMoney.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"/giveaccountmoney"},sidebar:"documentationSidebar",previous:{title:"/freeze",permalink:"/es_extended/Commands/freeze"},next:{title:"/giveitem",permalink:"/es_extended/Commands/giveItem"}},l={},m=[],d={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"give-account-money"},"Give Account Money"),(0,o.kt)("p",null,"This command adds money to the account balance of the player with the specified id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"/giveaccountmoney [id] [acccountName] [amount]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"id: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," (the server id of the target player)"),(0,o.kt)("li",{parentName:"ul"},"acccountName: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," (the name of the account to add the amount to)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"money")," (it's the legal cash/money that players carry in their pocket/inventory)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bank")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"black_money")," (it's the illegal dirty-money that players carry in their pocket/inventory)"))),(0,o.kt)("li",{parentName:"ul"},"amount: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," (the amount of money to add to the specified account name)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"By default only admins can execute this command"))))}p.isMDXComponent=!0}}]);