"use strict";(self.webpackChunkesx_overextended=self.webpackChunkesx_overextended||[]).push([[18],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(b,p(p({ref:t},d),{},{components:r})):n.createElement(b,p({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(1966),o=(r(9496),r(9613));const a={title:"Groups",sidebar_label:"Groups"},p=void 0,s={unversionedId:"es_extended/Groups/groups",id:"es_extended/Groups/groups",title:"Groups",description:"All jobs and groups entries from database and also indices from es_extended's Config.AdminGroups become Group object.",source:"@site/docs/es_extended/Groups/groups.mdx",sourceDirName:"es_extended/Groups",slug:"/es_extended/Groups/",permalink:"/es_extended/Groups/",draft:!1,editUrl:"https://github.com/esx-overextended/esx-overextended.github.io/tree/main/docs/es_extended/Groups/groups.mdx",tags:[],version:"current",frontMatter:{title:"Groups",sidebar_label:"Groups"},sidebar:"documentationSidebar",previous:{title:"/unfreeze",permalink:"/es_extended/Commands/unfreeze"},next:{title:"Functions",permalink:"/es_extended/Groups/Client/functions"}},i={},l=[{value:"xGroup Object Type",id:"xgroup-object-type",level:2},{value:"xGroupGrade Object Type",id:"xgroupgrade-object-type",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All ",(0,o.kt)("strong",{parentName:"p"},"jobs")," and ",(0,o.kt)("strong",{parentName:"p"},"groups")," entries from database and also indices from es_extended's ",(0,o.kt)("strong",{parentName:"p"},"Config.AdminGroups")," become Group object.")),(0,o.kt)("h2",{id:"xgroup-object-type"},"xGroup Object Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'---@class xGroup (group object)\n---@field name string group name\n---@field label string job label\n---@field principal string (it\'s like "group.[name]")\n---@field grades table<string, xGroupGrade>\n')),(0,o.kt)("h2",{id:"xgroupgrade-object-type"},"xGroupGrade Object Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"---@class xGroupGrade (group's grade object)\n---@field group_name `string` group name\n---@field grade `number` grade\n---@field label `string` grade label\n---@field is_boss `boolean` grade access to boss-level actions\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All known/loaded group objects can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalState.Groups")," from both server and client.")))}c.isMDXComponent=!0}}]);