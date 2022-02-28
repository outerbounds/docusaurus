"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[482],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4403:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_label:"conda_step_decorator",title:"plugins.conda.conda_step_decorator"},s=void 0,l={unversionedId:"api/metaflow/plugins/conda/conda_step_decorator",id:"api/metaflow/plugins/conda/conda_step_decorator",title:"plugins.conda.conda_step_decorator",description:"CondaStepDecorator Objects",source:"@site/docs/api/metaflow/plugins/conda/conda_step_decorator.md",sourceDirName:"api/metaflow/plugins/conda",slug:"/api/metaflow/plugins/conda/conda_step_decorator",permalink:"/docusaurus/docs/api/metaflow/plugins/conda/conda_step_decorator",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/conda/conda_step_decorator.md",tags:[],version:"current",frontMatter:{sidebar_label:"conda_step_decorator",title:"plugins.conda.conda_step_decorator"},sidebar:"apiMetaflow",previous:{title:"conda_flow_decorator",permalink:"/docusaurus/docs/api/metaflow/plugins/conda/conda_flow_decorator"},next:{title:"bytestream",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/communication/bytestream"}},u=[{value:"CondaStepDecorator Objects",id:"condastepdecorator-objects",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"condastepdecorator-objects"},"CondaStepDecorator Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class CondaStepDecorator(StepDecorator)\n")),(0,a.kt)("p",null,"Conda decorator that sets the Conda environment for your step"),(0,a.kt)("p",null,"To use, add this decorator to your step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@conda\n@step\ndef MyStep(self):\n    ...\n")),(0,a.kt)("p",null,"Information in this decorator will override any eventual @conda_base flow level decorator."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"libraries : Dict\nLibraries to use for this flow. The key is the name of the package and the value\nis the version to use. Defaults to {}\npython : string\nVersion of Python to use (for example: ","'","3.7.4","'","). Defaults to None\n(will use the current python version)\ndisabled : bool\nIf set to True, disables Conda. Defaults to False"))}d.isMDXComponent=!0}}]);