"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2542],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(f,a(a({ref:t},s),{},{components:r})):o.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1916:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],u={sidebar_label:"timeout_decorator",title:"plugins.timeout_decorator"},c=void 0,l={unversionedId:"api/metaflow/plugins/timeout_decorator",id:"api/metaflow/plugins/timeout_decorator",title:"plugins.timeout_decorator",description:"TimeoutDecorator Objects",source:"@site/docs/api/metaflow/plugins/timeout_decorator.md",sourceDirName:"api/metaflow/plugins",slug:"/api/metaflow/plugins/timeout_decorator",permalink:"/docs/api/metaflow/plugins/timeout_decorator",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/timeout_decorator.md",tags:[],version:"current",frontMatter:{sidebar_label:"timeout_decorator",title:"plugins.timeout_decorator"},sidebar:"apiMetaflow",previous:{title:"test_unbounded_foreach_decorator",permalink:"/docs/api/metaflow/plugins/test_unbounded_foreach_decorator"},next:{title:"decorators",permalink:"/docs/api/metaflow/decorators"}},s=[{value:"TimeoutDecorator Objects",id:"timeoutdecorator-objects",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"timeoutdecorator-objects"},"TimeoutDecorator Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class TimeoutDecorator(StepDecorator)\n")),(0,i.kt)("p",null,"Step decorator to specify a timeout for your step."),(0,i.kt)("p",null,"This decorator is useful if this step may hang indefinitely."),(0,i.kt)("p",null,"This can be used in conjunction with the @retry decorator as well as the @catch decorator.\nA timeout is considered to be an exception thrown by the step and will cause the step to be\nretried if needed and the exception will be caught by the ","'","catch","'"," decorator if present."),(0,i.kt)("p",null,"To use, annotate your step as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@timeout(minutes=1)\n@step\ndef myStep(self):\n    ...\n")),(0,i.kt)("p",null,"Note that all the values specified in parameters are added together so if you specify\n60 seconds and 1 hour, the decorator will have an effective timeout of 1 hour and 1 minute."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"seconds : int\nNumber of seconds to wait prior to timing out.\nminutes : int\nNumber of minutes to wait prior to timing out\nhours : int\nNumber of hours to wait prior to timing out\nminutes_between_retries : int\nNumber of minutes between retries"))}d.isMDXComponent=!0}}]);