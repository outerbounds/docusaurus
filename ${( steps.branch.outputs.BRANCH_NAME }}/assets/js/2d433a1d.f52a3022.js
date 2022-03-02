"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3054],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,b=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return t?r.createElement(b,u(u({ref:n},l),{},{components:t})):r.createElement(b,u({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var d=2;d<a;d++)u[d]=t[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},945:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return l},default:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),u=["components"],c={sidebar_label:"unbounded_foreach",title:"unbounded_foreach"},i=void 0,d={unversionedId:"api/metaflow/unbounded_foreach",id:"api/metaflow/unbounded_foreach",title:"unbounded_foreach",description:"UnboundedForeachInput Objects",source:"@site/docs/api/metaflow/unbounded_foreach.md",sourceDirName:"api/metaflow",slug:"/api/metaflow/unbounded_foreach",permalink:"/docusaurus/docs/api/metaflow/unbounded_foreach",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/unbounded_foreach.md",tags:[],version:"current",frontMatter:{sidebar_label:"unbounded_foreach",title:"unbounded_foreach"},sidebar:"apiMetaflow",previous:{title:"task",permalink:"/docusaurus/docs/api/metaflow/task"},next:{title:"util",permalink:"/docusaurus/docs/api/metaflow/util"}},l=[{value:"UnboundedForeachInput Objects",id:"unboundedforeachinput-objects",children:[],level:2}],p={toc:l};function s(e){var n=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unboundedforeachinput-objects"},"UnboundedForeachInput Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class UnboundedForeachInput(object)\n")),(0,a.kt)("p",null,"Plugins that wish to support ",(0,a.kt)("inlineCode",{parentName:"p"},"UnboundedForeach")," need their special\ninput(s) subclass this class.\nThis is used by the runtime to detect the difference between bounded\nand unbounded foreach, based on the variable passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"foreach"),"."))}s.isMDXComponent=!0}}]);