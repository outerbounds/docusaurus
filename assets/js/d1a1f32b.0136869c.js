"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6496],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6866:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_label:"catch_decorator",title:"plugins.catch_decorator"},l=void 0,u={unversionedId:"api/metaflow/plugins/catch_decorator",id:"api/metaflow/plugins/catch_decorator",title:"plugins.catch_decorator",description:"CatchDecorator Objects",source:"@site/docs/api/metaflow/plugins/catch_decorator.md",sourceDirName:"api/metaflow/plugins",slug:"/api/metaflow/plugins/catch_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/catch_decorator",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/catch_decorator.md",tags:[],version:"current",frontMatter:{sidebar_label:"catch_decorator",title:"plugins.catch_decorator"},sidebar:"apiMetaflow",previous:{title:"pytorch",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/frameworks/pytorch"},next:{title:"environment_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/environment_decorator"}},s=[{value:"CatchDecorator Objects",id:"catchdecorator-objects",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"catchdecorator-objects"},"CatchDecorator Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class CatchDecorator(StepDecorator)\n")),(0,a.kt)("p",null,"Step decorator to specify error handling for your step."),(0,a.kt)("p",null,"This decorator indicates that exceptions in the step should be caught and not fail the entire\nflow."),(0,a.kt)("p",null,"This can be used in conjunction with the @retry decorator. In that case, catch will only\nactivate if all retries fail and will catch the last exception thrown by the last retry."),(0,a.kt)("p",null,"To use, annotate your step as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@catch(var=&#x27;foo&#x27;)\n@step\ndef myStep(self):\n    ...\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"var : string\nName of the artifact in which to store the caught exception. If not specified,\nthe exception is not stored\nprint_exception : bool\nDetermines whether or not the exception is printed to stdout when caught. Defaults\nto True"))}d.isMDXComponent=!0}}]);