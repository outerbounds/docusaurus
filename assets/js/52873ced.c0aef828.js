"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7901],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1661:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_label:"aws_utils",title:"plugins.aws.aws_utils"},u=void 0,s={unversionedId:"api/metaflow/plugins/aws/aws_utils",id:"api/metaflow/plugins/aws/aws_utils",title:"plugins.aws.aws_utils",description:"get\\docker\\registry",source:"@site/docs/api/metaflow/plugins/aws/aws_utils.md",sourceDirName:"api/metaflow/plugins/aws",slug:"/api/metaflow/plugins/aws/aws_utils",permalink:"/docs/api/metaflow/plugins/aws/aws_utils",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/plugins/aws/aws_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"aws_utils",title:"plugins.aws.aws_utils"},sidebar:"apiMetaflow",previous:{title:"kubernetes_decorator",permalink:"/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator"},next:{title:"main",permalink:"/docs/api/metaflow/plugins/cards/card_modules/chevron/main"}},p=[{value:"get_docker_registry",id:"get_docker_registry",children:[],level:4},{value:"compute_resource_attributes",id:"compute_resource_attributes",children:[],level:4}],c={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"get_docker_registry"},"get","_","docker","_","registry"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"get_docker_registry(image_uri)\n")),(0,i.kt)("p",null,"Explanation:\n(.+?(?:","[:.]",".+?)\\/)? - ","[GROUP 0]"," REGISTRY\n.+?                 - A registry must start with at least one character\n(?:","[:.]",".+?)\\/       - A registry must have ",'"',":",'"'," or ",'"',".",'"'," and end with ",'"',"/",'"',"\n?                   - Make a registry optional\n(.",(0,i.kt)("em",{parentName:"p"},"?)               - ","[GROUP 1]"," REPOSITORY\n."),"?                 - Get repository name until separator\n(?:","[@:]",")?           - SEPARATOR\n?:                  - Don","'","t capture separator\n","[@:]","                - The separator must be either ",'"',"@",'"'," or ",'"',":",'"',"\n?                   - The separator is optional\n((?","<","=","[@:]",").",(0,i.kt)("em",{parentName:"p"},")?      - ","[GROUP 2]"," TAG / DIGEST\n(?","<","=","[@:]",")           - A tag / digest must be preceeded by ",'"',"@",'"'," or ",'"',":",'"',"\n."),"                  - Capture rest of tag / digest\n?                   - A tag / digest is optional"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("p",null,"  image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None"),(0,i.kt)("li",{parentName:"ul"},"image"),(0,i.kt)("li",{parentName:"ul"},"None\nexample/image"),(0,i.kt)("li",{parentName:"ul"},"None"),(0,i.kt)("li",{parentName:"ul"},"example/image"),(0,i.kt)("li",{parentName:"ul"},"None\nexample/image:tag"),(0,i.kt)("li",{parentName:"ul"},"None"),(0,i.kt)("li",{parentName:"ul"},"example/image"),(0,i.kt)("li",{parentName:"ul"},"tag\nexample.domain.com/example/image:tag"),(0,i.kt)("li",{parentName:"ul"},"example.domain.com/"),(0,i.kt)("li",{parentName:"ul"},"example/image"),(0,i.kt)("li",{parentName:"ul"},"tag\n123.123.123.123:123/example/image:tag"),(0,i.kt)("li",{parentName:"ul"},"123.123.123.123:123/"),(0,i.kt)("li",{parentName:"ul"},"example/image"),(0,i.kt)("li",{parentName:"ul"},"tag\nexample.domain.com/example/image@sha256:45b23dee0"),(0,i.kt)("li",{parentName:"ul"},"example.domain.com/"),(0,i.kt)("li",{parentName:"ul"},"example/image"),(0,i.kt)("li",{parentName:"ul"},"sha256:45b23dee0")),(0,i.kt)("h4",{id:"compute_resource_attributes"},"compute","_","resource","_","attributes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"compute_resource_attributes(decos, compute_deco, resource_defaults)\n")),(0,i.kt)("p",null,"Compute resource values taking into account defaults, the values specified\nin the compute decorator (like @batch or @kubernetes) directly, and\nresources specified via @resources decorator."),(0,i.kt)("p",null,"Returns a dictionary of resource attr -",">"," value (str)."))}m.isMDXComponent=!0}}]);