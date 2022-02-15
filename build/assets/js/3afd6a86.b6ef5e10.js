"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[577],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4594:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},s="Episode 3: Playlist Redux",p={unversionedId:"getting-started/tutorials/season-1-the-local-experience/episode03",id:"getting-started/tutorials/season-1-the-local-experience/episode03",title:"Episode 3: Playlist Redux",description:"Follow the Money.",source:"@site/docs/getting-started/tutorials/season-1-the-local-experience/episode03.md",sourceDirName:"getting-started/tutorials/season-1-the-local-experience",slug:"/getting-started/tutorials/season-1-the-local-experience/episode03",permalink:"/docs/getting-started/tutorials/season-1-the-local-experience/episode03",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/tutorials/season-1-the-local-experience/episode03.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Episode 2: Statistics",permalink:"/docs/getting-started/tutorials/season-1-the-local-experience/episode02"},next:{title:"Episode 4: Playlist Plus",permalink:"/docs/getting-started/tutorials/season-1-the-local-experience/episode04"}},c=[{value:"Follow the Money.",id:"follow-the-money",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"episode-3-playlist-redux"},"Episode 3: Playlist Redux"),(0,a.kt)("h2",{id:"follow-the-money"},"Follow the Money."),(0,a.kt)("p",null,"Use Metaflow to load the statistics generated from ",(0,a.kt)("a",{parentName:"p",href:"episode02"},"Episode 2")," and improve our playlist generator by only recommending top box office grossing movies."),(0,a.kt)("p",null,"You can find the tutorial code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/03-playlist-redux"},"GitHub")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Showcasing:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"../../../metaflow/client"},"Client API "),"in a flow to fetch and use data artifacts generated from other flows.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run 'Episode 02-statistics: Is this Data Science?'")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To play this episode:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python 03-playlist-redux/playlist.py show")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python 03-playlist-redux/playlist.py run"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../"},"Tutorials")))}d.isMDXComponent=!0}}]);