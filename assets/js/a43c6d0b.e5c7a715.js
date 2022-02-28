"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7628],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7124:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_label:"environment_decorator",title:"plugins.environment_decorator"},u=void 0,l={unversionedId:"api/metaflow/plugins/environment_decorator",id:"api/metaflow/plugins/environment_decorator",title:"plugins.environment_decorator",description:"EnvironmentDecorator Objects",source:"@site/docs/api/metaflow/plugins/environment_decorator.md",sourceDirName:"api/metaflow/plugins",slug:"/api/metaflow/plugins/environment_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/environment_decorator",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/environment_decorator.md",tags:[],version:"current",frontMatter:{sidebar_label:"environment_decorator",title:"plugins.environment_decorator"},sidebar:"apiMetaflow",previous:{title:"catch_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/catch_decorator"},next:{title:"resources_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/resources_decorator"}},s=[{value:"EnvironmentDecorator Objects",id:"environmentdecorator-objects",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environmentdecorator-objects"},"EnvironmentDecorator Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class EnvironmentDecorator(StepDecorator)\n")),(0,a.kt)("p",null,"Step decorator to add or update environment variables prior to the execution of your step."),(0,a.kt)("p",null,"The environment variables set with this decorator will be present during the execution of the\nstep."),(0,a.kt)("p",null,"To use, annotate your step as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@environment(vars={&#x27;MY_ENV&#x27;: &#x27;value&#x27;})\n@step\ndef myStep(self):\n    ...\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"vars : Dict\nDictionary of environment variables to add/update prior to executing your step."))}d.isMDXComponent=!0}}]);