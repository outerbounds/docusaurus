"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1565],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1799:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=["components"],i={sidebar_label:"kubernetes",title:"plugins.aws.eks.kubernetes"},s=void 0,c={unversionedId:"api/metaflow/plugins/aws/eks/kubernetes",id:"api/metaflow/plugins/aws/eks/kubernetes",title:"plugins.aws.eks.kubernetes",description:"generate\\rfc1123\\name",source:"@site/docs/api/metaflow/plugins/aws/eks/kubernetes.md",sourceDirName:"api/metaflow/plugins/aws/eks",slug:"/api/metaflow/plugins/aws/eks/kubernetes",permalink:"/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/aws/eks/kubernetes.md",tags:[],version:"current",frontMatter:{sidebar_label:"kubernetes",title:"plugins.aws.eks.kubernetes"},sidebar:"apiMetaflow",previous:{title:"batch_decorator",permalink:"/docusaurus/docs/api/metaflow/plugins/aws/batch/batch_decorator"},next:{title:"kubernetes_decorator",permalink:"/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator"}},l=[{value:"generate_rfc1123_name",id:"generate_rfc1123_name",children:[],level:4}],p={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"generate_rfc1123_name"},"generate","_","rfc1123","_","name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"generate_rfc1123_name(flow_name, run_id, step_name, task_id, attempt)\n")),(0,o.kt)("p",null,"Generate RFC 1123 compatible name. Specifically, the format is:\n","<","let-or-digit",">","[*","[<","let-or-digit-or-hyphen",">]","<","let-or-digit",">","]"),(0,o.kt)("p",null,"The generated name consists from a human-readable prefix, derived from\nflow/step/task/attempt, and a hash suffux."))}f.isMDXComponent=!0}}]);