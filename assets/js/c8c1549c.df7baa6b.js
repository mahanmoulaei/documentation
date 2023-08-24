"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[9069],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=l(r),c=a,f=u["".concat(p,".").concat(c)]||u[c]||s[c]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(1966),a=(r(9496),r(9613));const o={sidebar_label:"/addgroup"},i="Add Group",d={unversionedId:"es_extended/Commands/addGroup",id:"es_extended/Commands/addGroup",title:"Add Group",description:"This command adds a group to the player with the specified server id.",source:"@site/docs/es_extended/Commands/addGroup.mdx",sourceDirName:"es_extended/Commands",slug:"/es_extended/Commands/addGroup",permalink:"/es_extended/Commands/addGroup",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Commands/addGroup.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"/addgroup"},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/es_extended/installation"},next:{title:"/bring",permalink:"/es_extended/Commands/bring"}},p={},l=[],m={toc:l},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-group"},"Add Group"),(0,a.kt)("p",null,"This command adds a group to the player with the specified server id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"/addgroup [id] [groupName] [groupGrade]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," (the server id of the target player)"),(0,a.kt)("li",{parentName:"ul"},"groupName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," (the name of the group to add)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"the list of groups can be found/modified in ",(0,a.kt)("inlineCode",{parentName:"em"},"groups")," table of database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"p.s. groupName can also be a job name which the list of it can be found/modified in ",(0,a.kt)("inlineCode",{parentName:"em"},"jobs")," table of database")))),(0,a.kt)("li",{parentName:"ul"},"groupGrade: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," (the grade of the group to add)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"the list of group grades can be found/modified in ",(0,a.kt)("inlineCode",{parentName:"em"},"group_grades")," table of database")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"p.s. groupGrade can also be a job grade which the list of it can be found/modified in ",(0,a.kt)("inlineCode",{parentName:"em"},"job_grades")," table of database"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"By default only admins can execute this command"))))}s.isMDXComponent=!0}}]);