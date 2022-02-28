"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8326],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9878:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],u={sidebar_label:"kubernetes_decorator",title:"plugins.aws.eks.kubernetes_decorator"},i=void 0,c={unversionedId:"api/metaflow/plugins/aws/eks/kubernetes_decorator",id:"api/metaflow/plugins/aws/eks/kubernetes_decorator",title:"plugins.aws.eks.kubernetes_decorator",description:"KubernetesDecorator Objects",source:"@site/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator.md",sourceDirName:"api/metaflow/plugins/aws/eks",slug:"/api/metaflow/plugins/aws/eks/kubernetes_decorator",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator.md",tags:[],version:"current",frontMatter:{sidebar_label:"kubernetes_decorator",title:"plugins.aws.eks.kubernetes_decorator"},sidebar:"apiMetaflow",previous:{title:"kubernetes",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/aws/eks/kubernetes"},next:{title:"aws_utils",permalink:"/docusaurus/docs/docs/api/metaflow/plugins/aws/aws_utils"}},l=[{value:"KubernetesDecorator Objects",id:"kubernetesdecorator-objects",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"kubernetesdecorator-objects"},"KubernetesDecorator Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class KubernetesDecorator(StepDecorator)\n")),(0,s.kt)("p",null,"TODO (savin): Update this docstring.\nStep decorator to specify that this step should execute on Kubernetes."),(0,s.kt)("p",null,"This decorator indicates that your step should execute on Kubernetes. Note\nthat you can apply this decorator automatically to all steps using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"--with kubernetes")," argument when calling run/resume. Step level\ndecorators within the code are overrides and will force a step to execute\non Kubernetes regardless of the ",(0,s.kt)("inlineCode",{parentName:"p"},"--with")," specification."),(0,s.kt)("p",null,"To use, annotate your step as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"@kubernetes\n@step\ndef my_step(self):\n    ...\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"cpu : int\nNumber of CPUs required for this step. Defaults to 1. If @resources is\nalso present, the maximum value from all decorators is used\ngpu : int\nNumber of GPUs required for this step. Defaults to 0. If @resources is\nalso present, the maximum value from all decorators is used\nmemory : int\nMemory size (in MB) required for this step. Defaults to 4096. If\n@resources is also present, the maximum value from all decorators is\nused\nimage : string\nDocker image to use when launching on Kubernetes. If not specified, a\ndefault docker image mapping to the current version of Python is used\nshared_memory : int\nThe value for the size (in MiB) of the /dev/shm volume for this step.\nThis parameter maps to the --shm-size option to docker run."))}d.isMDXComponent=!0}}]);