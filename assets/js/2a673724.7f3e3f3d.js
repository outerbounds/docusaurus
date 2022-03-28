"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2427],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1038:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_label:"sidecar",title:"sidecar"},c=void 0,s={unversionedId:"api/metaflow/sidecar",id:"api/metaflow/sidecar",title:"sidecar",description:"PipeUnavailableError Objects",source:"@site/docs/api/metaflow/sidecar.md",sourceDirName:"api/metaflow",slug:"/api/metaflow/sidecar",permalink:"/docs/api/metaflow/sidecar",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/sidecar.md",tags:[],version:"current",frontMatter:{sidebar_label:"sidecar",title:"sidecar"},sidebar:"apiMetaflow",previous:{title:"runtime",permalink:"/docs/api/metaflow/runtime"},next:{title:"sidecar_worker",permalink:"/docs/api/metaflow/sidecar_worker"}},u=[{value:"PipeUnavailableError Objects",id:"pipeunavailableerror-objects",children:[],level:2},{value:"NullSidecarError Objects",id:"nullsidecarerror-objects",children:[],level:2},{value:"MsgTimeoutError Objects",id:"msgtimeouterror-objects",children:[],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pipeunavailableerror-objects"},"PipeUnavailableError Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class PipeUnavailableError(Exception)\n")),(0,o.kt)("p",null,"raised when unable to write to pipe given allotted time"),(0,o.kt)("h2",{id:"nullsidecarerror-objects"},"NullSidecarError Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class NullSidecarError(Exception)\n")),(0,o.kt)("p",null,"raised when trying to poll or interact with the fake subprocess in the null sidecar"),(0,o.kt)("h2",{id:"msgtimeouterror-objects"},"MsgTimeoutError Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MsgTimeoutError(Exception)\n")),(0,o.kt)("p",null,"raised when trying unable to send message to sidecar in allocated time"))}d.isMDXComponent=!0}}]);