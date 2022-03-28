"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7068:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o="tutorialslink_Jqri",a="tutorialsicon_KtFA",l=function(e){var t=e.link;return r.createElement("a",{className:o,href:t},r.createElement("svg",{viewBox:"0 0 16 16",fill:"none",preserveAspectRatio:"xMidYMid meet","data-rnw-int-class":"nearest__262-1673__",className:a},r.createElement("path",{d:"M14.5 16h-13a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v15a.5.5 0 01-.5.5zM2 15h12V1H2v14z",fill:"currentColor"}),r.createElement("path",{d:"M13 2H3v1h10V2zM13 13H3v1h10v-1z",fill:"currentColor"})),r.createElement("span",null,"Tutorials"))}},5077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=n(7068),i=["components"],s={},c="Episode 0: Hello World",p={unversionedId:"python/getting-started/tutorials/season-1-the-local-experience/episode00",id:"python/getting-started/tutorials/season-1-the-local-experience/episode00",title:"Episode 0: Hello World",description:"Metaflow says Hi!",source:"@site/docs/python/getting-started/tutorials/season-1-the-local-experience/episode00.md",sourceDirName:"python/getting-started/tutorials/season-1-the-local-experience",slug:"/python/getting-started/tutorials/season-1-the-local-experience/episode00",permalink:"/docs/python/getting-started/tutorials/season-1-the-local-experience/episode00",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/python/getting-started/tutorials/season-1-the-local-experience/episode00.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Season 1: The Local Experience",permalink:"/docs/python/getting-started/tutorials/season-1-the-local-experience/"},next:{title:"Episode 1: Playlist",permalink:"/docs/python/getting-started/tutorials/season-1-the-local-experience/episode01"}},u=[{value:"Metaflow says Hi!",id:"metaflow-says-hi",children:[{value:"Showcasing:",id:"showcasing",children:[],level:4},{value:"To play this episode:",id:"to-play-this-episode",children:[],level:4}],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"episode-0-hello-world"},"Episode 0: Hello World"),(0,a.kt)("h2",{id:"metaflow-says-hi"},"Metaflow says Hi!"),(0,a.kt)("p",null,"This flow is a simple linear workflow that verifies your installation by printing out ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Metaflow says: Hi!")),"' to the terminal."),(0,a.kt)("p",null,"You can find the tutorial code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/00-helloworld"},"GitHub")),(0,a.kt)("h4",{id:"showcasing"},"Showcasing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../metaflow/basics"},"Basics of Metaflow.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../metaflow/basics#what-should-be-a-step"},"Step")," decorator.")),(0,a.kt)("h4",{id:"to-play-this-episode"},"To play this episode:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python 00-helloworld/helloworld.py show")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python 00-helloworld/helloworld.py run"))),(0,a.kt)(l.Z,{link:"../",mdxType:"TutorialsLink"}))}f.isMDXComponent=!0}}]);