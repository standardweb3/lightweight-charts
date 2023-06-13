"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"PaneRendererCustomData",title:"Interface: PaneRendererCustomData<TData>",sidebar_label:"PaneRendererCustomData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/PaneRendererCustomData",id:"api/interfaces/PaneRendererCustomData",title:"Interface: PaneRendererCustomData<TData>",description:"Data provide to the custom series pane view which can be used within the renderer",source:"@site/docs/api/interfaces/PaneRendererCustomData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PaneRendererCustomData",permalink:"/lightweight-charts/docs/next/api/interfaces/PaneRendererCustomData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PaneRendererCustomData",title:"Interface: PaneRendererCustomData<TData>",sidebar_label:"PaneRendererCustomData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"bars",id:"bars",level:3},{value:"barSpacing",id:"barspacing",level:3},{value:"visibleRange",id:"visiblerange",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Data provide to the custom series pane view which can be used within the renderer\nfor drawing the series data."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TData")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/CustomData"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomData")))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"bars"},"bars"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"bars"),": readonly ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CustomBarItemData"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomBarItemData")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"TData"),">","[]"),(0,n.kt)("p",null,"List of all the series' items and their x coordinates."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"barspacing"},"barSpacing"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"barSpacing"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Spacing between consecutive bars."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"visiblerange"},"visibleRange"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"visibleRange"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/Range"},(0,n.kt)("inlineCode",{parentName:"a"},"Range")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,n.kt)("p",null,"The current visible range of items on the chart."))}d.isMDXComponent=!0}}]);