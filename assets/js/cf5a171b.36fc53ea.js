"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2293],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,c(c({ref:t},s),{},{components:r})):a.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4615:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),c=["components"],l={sidebar_label:"card_datastore",title:"plugins.cards.card_datastore"},i=void 0,p={unversionedId:"api/metaflow/plugins/cards/card_datastore",id:"api/metaflow/plugins/cards/card_datastore",title:"plugins.cards.card_datastore",description:"CardDatastore Objects",source:"@site/docs/api/metaflow/plugins/cards/card_datastore.md",sourceDirName:"api/metaflow/plugins/cards",slug:"/api/metaflow/plugins/cards/card_datastore",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_datastore",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/cards/card_datastore.md",tags:[],version:"current",frontMatter:{sidebar_label:"card_datastore",title:"plugins.cards.card_datastore"},sidebar:"apiMetaflow",previous:{title:"card_client",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_client"},next:{title:"component_serializer",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/component_serializer"}},s=[{value:"CardDatastore Objects",id:"carddatastore-objects",children:[{value:"card_info_from_path",id:"card_info_from_path",children:[],level:4},{value:"cache_locally",id:"cache_locally",children:[],level:4}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"carddatastore-objects"},"CardDatastore Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CardDatastore(object)\n")),(0,o.kt)("h4",{id:"card_info_from_path"},"card","_","info","_","from","_","path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @staticmethod\n | card_info_from_path(path)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," ",(0,o.kt)("em",{parentName:"li"},"str")," - The path to the card")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Exception")," - When the card_path is invalid")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,"  CardInfo"),(0,o.kt)("h4",{id:"cache_locally"},"cache","_","locally"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | cache_locally(path, save_path=None)\n")),(0,o.kt)("p",null,"Saves the data present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"metaflow_card_cache")," directory or to the ",(0,o.kt)("inlineCode",{parentName:"p"},"save_path"),"."))}d.isMDXComponent=!0}}]);