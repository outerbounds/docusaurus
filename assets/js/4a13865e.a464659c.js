"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9616],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return p}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),i=["components"],o={sidebar_label:"filecache",title:"client.filecache"},l=void 0,s={unversionedId:"api/metaflow/client/filecache",id:"api/metaflow/client/filecache",title:"client.filecache",description:"FileCache Objects",source:"@site/docs/api/metaflow/client/filecache.md",sourceDirName:"api/metaflow/client",slug:"/api/metaflow/client/filecache",permalink:"/docs/api/metaflow/client/filecache",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/client/filecache.md",tags:[],version:"current",frontMatter:{sidebar_label:"filecache",title:"client.filecache"},sidebar:"apiMetaflow",previous:{title:"core",permalink:"/docs/api/metaflow/client/core"},next:{title:"content_addressed_store",permalink:"/docs/api/metaflow/datastore/content_addressed_store"}},f=[{value:"FileCache Objects",id:"filecache-objects",children:[{value:"get_artifact_size_by_location",id:"get_artifact_size_by_location",children:[],level:4},{value:"get_artifact_size",id:"get_artifact_size",children:[],level:4}],level:2}],u={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"filecache-objects"},"FileCache Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class FileCache(object)\n")),(0,c.kt)("h4",{id:"get_artifact_size_by_location"},"get","_","artifact","_","size","_","by","_","location"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"}," | get_artifact_size_by_location(ds_type, location, attempt, flow_name, run_id, step_name, task_id, name)\n")),(0,c.kt)("p",null,"Gets the size of the artifact content (in bytes) for the name at the location"),(0,c.kt)("h4",{id:"get_artifact_size"},"get","_","artifact","_","size"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"}," | get_artifact_size(ds_type, ds_root, attempt, flow_name, run_id, step_name, task_id, name)\n")),(0,c.kt)("p",null,"Gets the size of the artifact content (in bytes) for the name"))}p.isMDXComponent=!0}}]);