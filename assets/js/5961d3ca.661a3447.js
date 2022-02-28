"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7482],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Episode 5: Statistics Redux",u={unversionedId:"r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",id:"r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",title:"Episode 5: Statistics Redux",description:"This example revisits Episode 02-statistics: Is this Data Science?.",source:"@site/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05.md",sourceDirName:"r/getting-started/tutorials/season-2-scaling-out-and-up",slug:"/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",permalink:"/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Episode 4: Hello AWS",permalink:"/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04"},next:{title:"Episode 6: Worldview",permalink:"/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06"}},c=[{value:"Showcasing:",id:"showcasing",children:[],level:2},{value:"Before playing this episode:",id:"before-playing-this-episode",children:[],level:2},{value:"To play this episode:",id:"to-play-this-episode",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"episode-5-statistics-redux"},"Episode 5: Statistics Redux"),(0,a.kt)("p",null,"This example revisits ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02"},(0,a.kt)("strong",{parentName:"a"},"Episode 02-statistics: Is this Data Science?")),"."),(0,a.kt)("p",null,"With Metaflow, you don't need to make any code changes to scale-up your flow by running on remote compute. In this example we re-run the ",(0,a.kt)("inlineCode",{parentName:"p"},"stats.R")," workflow adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--with batch")," command line argument. This instructs Metaflow to run all your steps on AWS batch without changing any code. You can control the behavior with additional arguments, like ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-workers"),". For this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-workers")," is used to limit the number of parallel genre specific statistics computations. You can then access the data artifacts ","(","even the local CSV file",")"," from anywhere because the data is being stored in AWS S3."),(0,a.kt)("h2",{id:"showcasing"},"Showcasing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--with batch")," command line option"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--max-workers")," command line option"),(0,a.kt)("li",{parentName:"ul"},"Accessing data artifact stored in AWS S3 from a local Markdown Notebook.")),(0,a.kt)("h2",{id:"before-playing-this-episode"},"Before playing this episode:"),(0,a.kt)("p",null,"Configure your ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/r/metaflow-on-aws/metaflow-sandbox"},"sandbox"),"."),(0,a.kt)("h2",{id:"to-play-this-episode"},"To play this episode:"),(0,a.kt)("p",null,"If you haven't yet pulled the tutorials to your current working directory, you can follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"../#pull-tutorials"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cd tutorials/02-statistics/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Rscript stats.R --package-suffixes=.R,.csv run --with batch --max-workers 4")),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"02-statistics/stats.Rmd")," in your RStudio and re-run the cells. You can acccess the artifacts stored in AWS S3 from your local RStudio session.")))}d.isMDXComponent=!0}}]);