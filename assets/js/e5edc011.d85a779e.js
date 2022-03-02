"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4612],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||i[m]||s;return n?t.createElement(f,d(d({ref:r},u),{},{components:n})):t.createElement(f,d({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,d=new Array(s);d[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<s;c++)d[c]=n[c];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},285:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return F},default:function(){return A},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return T}});var t=n(7462),a=n(3366),s=n(7294),d=n(3905),o="browserWindow_NaKb",l="browserWindowHeader_GFvb",c="buttons_IGLB",u="dot_fGZE",i="browserWindowMenuIcon_x9kp",p="bar_Ck8N",m="browserWindowBody_TyWN";function f(e){var r=e.children,n=e.minHeight;e.url;return s.createElement("div",{className:o,style:{minHeight:n}},s.createElement("div",{className:l},s.createElement("div",{className:c},s.createElement("span",{className:u,style:{background:"#f25f58"}}),s.createElement("span",{className:u,style:{background:"#fbbe3c"}}),s.createElement("span",{className:u,style:{background:"#58cb42"}})),s.createElement("div",{className:i},s.createElement("div",null,s.createElement("span",{className:p}),s.createElement("span",{className:p}),s.createElement("span",{className:p})))),s.createElement("div",{className:m},r))}var b="output_ewej",x=function(e){var r=e.children;return s.createElement("div",{className:b},r)},w="output2_uS78",k="label_XpFT",y=function(e){var r=e.children;return s.createElement("div",{className:w},s.createElement("div",{className:k},"Output"),s.createElement("div",null,r))},g=["components"],h={},F="Code Documentation example ZZ",v={unversionedId:"some_code",id:"some_code",title:"Code Documentation example ZZ",description:"Example 1",source:"@site/docs/some_code.md",sourceDirName:".",slug:"/some_code",permalink:"/docusaurus/docs/some_code",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/some_code.md",tags:[],version:"current",frontMatter:{}},T=[{value:"Example 1",id:"example-1",children:[],level:2},{value:"Example 2",id:"example-2",children:[],level:2},{value:"Output",id:"output",children:[],level:2},{value:"Output with TerminalWindow",id:"output-with-terminalwindow",children:[],level:2},{value:"Output with Indent",id:"output-with-indent",children:[],level:2},{value:"Output with Label",id:"output-with-label",children:[],level:2}],N=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",r)}},O=N("DocSection"),E=N("SigArgSection"),S=N("SigArg"),_=N("Description"),j=N("ParamSection"),P=N("Parameter"),D={toc:T};function A(e){var r=e.components,n=(0,a.Z)(e,g);return(0,d.kt)("wrapper",(0,t.Z)({},D,n,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"code-documentation-example-zz"},"Code Documentation example ZZ"),(0,d.kt)("h2",{id:"example-1"},"Example 1"),(0,d.kt)(O,{type:"class",name:"Run",module:"metaflow.client.core",link:"metaflow/client/core.py#L1512",mdxType:"DocSection"},(0,d.kt)(E,{mdxType:"SigArgSection"},(0,d.kt)(S,{name:"pathspec",default:"None",mdxType:"SigArg"}),(0,d.kt)(S,{name:"attempt",default:"None",mdxType:"SigArg"}),(0,d.kt)(S,{name:"_object",default:"None",mdxType:"SigArg"}),(0,d.kt)(S,{name:"_parent",default:"None",mdxType:"SigArg"}),(0,d.kt)(S,{name:"_namespace_check",default:"True",mdxType:"SigArg"})),(0,d.kt)(_,{summary:"A Run represents an execution of a Flow",extended_summary:"As such, it contains all Steps associated with the flow.",mdxType:"Description"}),(0,d.kt)(j,{name:"Attributes",mdxType:"ParamSection"},(0,d.kt)(P,{name:"data",type:"MetaflowData",desc:"Container of all data artifacts produced by this run",mdxType:"Parameter"}),(0,d.kt)(P,{name:"successful",type:"boolean",desc:"True if the run successfully completed",mdxType:"Parameter"}),(0,d.kt)(P,{name:"finished",type:"boolean",desc:"True if the run completed",mdxType:"Parameter"}),(0,d.kt)(P,{name:"finished_at",type:"datetime",desc:"Time this run finished",mdxType:"Parameter"}),(0,d.kt)(P,{name:"code",type:"MetaflowCode",desc:"Code package for this run (if present)",mdxType:"Parameter"}),(0,d.kt)(P,{name:"end_task",type:"Task",desc:"Task for the end step (if it is present already)",mdxType:"Parameter"}))),(0,d.kt)("h2",{id:"example-2"},"Example 2"),(0,d.kt)(O,{type:"class",name:"FlowSpec",module:"metaflow.flowspec",link:"metaflow/flowspec.py#L48",mdxType:"DocSection"},(0,d.kt)(E,{mdxType:"SigArgSection"},(0,d.kt)(S,{name:"use_cli",default:"True",mdxType:"SigArg"})),(0,d.kt)(_,{summary:"Main class from which all Flows should inherit.",mdxType:"Description"}),(0,d.kt)(j,{name:"Attributes",mdxType:"ParamSection"},(0,d.kt)(P,{name:"script_name",mdxType:"Parameter"}),(0,d.kt)(P,{name:"index",mdxType:"Parameter"}),(0,d.kt)(P,{name:"input",mdxType:"Parameter"}))),(0,d.kt)("h2",{id:"output"},"Output"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    cuba\n")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"    4\n")),(0,d.kt)("h2",{id:"output-with-terminalwindow"},"Output with TerminalWindow"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    cuba\n")),(0,d.kt)(f,{mdxType:"TerminalWindow"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"    4\n"))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    ls -lart\n")),(0,d.kt)(f,{mdxType:"TerminalWindow"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"total 800\n-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md\n-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js\ndrwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules\n-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock\n-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json\ndrwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..\ndrwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static\n-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js\n-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store\n-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js\n-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore\ndrwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .\ndrwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs\ndrwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src\ndrwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus\ndrwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build\ndrwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git\n"))),(0,d.kt)("h2",{id:"output-with-indent"},"Output with Indent"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    cuba\n")),(0,d.kt)(x,{mdxType:"Output"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"    4\n"))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    ls -lart\n")),(0,d.kt)(x,{mdxType:"Output"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"total 800\n-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md\n-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js\ndrwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules\n-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock\n-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json\ndrwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..\ndrwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static\n-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js\n-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store\n-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js\n-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore\ndrwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .\ndrwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs\ndrwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src\ndrwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus\ndrwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build\ndrwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git\n"))),(0,d.kt)("h2",{id:"output-with-label"},"Output with Label"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    cuba\n")),(0,d.kt)(y,{mdxType:"Output2"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"    4\n"))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"    ls -lart\n")),(0,d.kt)(y,{mdxType:"Output2"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"total 800\n-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md\n-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js\ndrwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules\n-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock\n-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json\ndrwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..\ndrwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static\n-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js\n-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store\n-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js\n-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore\ndrwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .\ndrwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs\ndrwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src\ndrwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus\ndrwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build\ndrwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git\n"))))}A.isMDXComponent=!0}}]);