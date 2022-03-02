"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4461],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||o;return r?n.createElement(m,i(i({ref:e},c),{},{components:r})):n.createElement(m,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},516:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_label:"inputs",title:"datastore.inputs"},s=void 0,p={unversionedId:"api/metaflow/datastore/inputs",id:"api/metaflow/datastore/inputs",title:"datastore.inputs",description:"Inputs Objects",source:"@site/docs/api/metaflow/datastore/inputs.md",sourceDirName:"api/metaflow/datastore",slug:"/api/metaflow/datastore/inputs",permalink:"/docusaurus/docs/api/metaflow/datastore/inputs",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/datastore/inputs.md",tags:[],version:"current",frontMatter:{sidebar_label:"inputs",title:"datastore.inputs"},sidebar:"apiMetaflow",previous:{title:"flow_datastore",permalink:"/docusaurus/docs/api/metaflow/datastore/flow_datastore"},next:{title:"task_datastore",permalink:"/docusaurus/docs/api/metaflow/datastore/task_datastore"}},c=[{value:"Inputs Objects",id:"inputs-objects",children:[],level:2}],l={toc:c};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inputs-objects"},"Inputs Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Inputs(object)\n")),(0,o.kt)("p",null,"split: inputs.step_a.x inputs.step_b.x\nforeach: inputs","[0]",".x\nboth: (inp.x for inp in inputs)"))}f.isMDXComponent=!0}}]);