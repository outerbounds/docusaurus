"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1774],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5580:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_label:"channel",title:"plugins.env_escape.communication.channel"},l=void 0,u={unversionedId:"api/metaflow/plugins/env_escape/communication/channel",id:"api/metaflow/plugins/env_escape/communication/channel",title:"plugins.env_escape.communication.channel",description:"Channel Objects",source:"@site/docs/api/metaflow/plugins/env_escape/communication/channel.md",sourceDirName:"api/metaflow/plugins/env_escape/communication",slug:"/api/metaflow/plugins/env_escape/communication/channel",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/communication/channel",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/plugins/env_escape/communication/channel.md",tags:[],version:"current",frontMatter:{sidebar_label:"channel",title:"plugins.env_escape.communication.channel"},sidebar:"apiMetaflow",previous:{title:"bytestream",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/communication/bytestream"},next:{title:"utils",permalink:"/docusaurus/docs/api/metaflow/plugins/env_escape/communication/utils"}},s=[{value:"Channel Objects",id:"channel-objects",children:[],level:2}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"channel-objects"},"Channel Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Channel(object)\n")),(0,o.kt)("p",null,"Channel is a higher level abstraction over a low-level bytestream."),(0,o.kt)("p",null,"You can send and receive JSON serializable object directly with this interface"),(0,o.kt)("p",null,"For now, this class does not do much but we could imagine some sort compression or other\ntransformation being added here"))}m.isMDXComponent=!0}}]);