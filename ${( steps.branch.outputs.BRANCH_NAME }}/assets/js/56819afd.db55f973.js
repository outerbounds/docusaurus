"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9728],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_label:"exception_transferer",title:"plugins.env_escape.exception_transferer"},p=void 0,s={unversionedId:"api/metaflow/plugins/env_escape/exception_transferer",id:"api/metaflow/plugins/env_escape/exception_transferer",title:"plugins.env_escape.exception_transferer",description:"RemoteInterpreterException Objects",source:"@site/docs/api/metaflow/plugins/env_escape/exception_transferer.md",sourceDirName:"api/metaflow/plugins/env_escape",slug:"/api/metaflow/plugins/env_escape/exception_transferer",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/exception_transferer",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/plugins/env_escape/exception_transferer.md",tags:[],version:"current",frontMatter:{sidebar_label:"exception_transferer",title:"plugins.env_escape.exception_transferer"},sidebar:"apiMetaflow",previous:{title:"utils",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/communication/utils"},next:{title:"stub",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/stub"}},u=[{value:"RemoteInterpreterException Objects",id:"remoteinterpreterexception-objects",children:[],level:2}],l={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"remoteinterpreterexception-objects"},"RemoteInterpreterException Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RemoteInterpreterException(Exception)\n")),(0,a.kt)("p",null,"A ","'","generic exception","'"," that is raised when the exception the gotten from\nthe remote server cannot be instantiated locally"))}f.isMDXComponent=!0}}]);