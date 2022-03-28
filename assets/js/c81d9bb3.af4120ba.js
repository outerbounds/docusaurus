"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7599],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6122:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l="Episode 2: Statistics",p={unversionedId:"r/getting-started/tutorials/season-1-the-local-experience/episode02",id:"r/getting-started/tutorials/season-1-the-local-experience/episode02",title:"Episode 2: Statistics",description:"Use Metaflow to load the movie metadata CSV file into a data frame and compute some movie genre specific statistics. These statistics are then used in later examples to improve our playlist generator.",source:"@site/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02.md",sourceDirName:"r/getting-started/tutorials/season-1-the-local-experience",slug:"/r/getting-started/tutorials/season-1-the-local-experience/episode02",permalink:"/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Episode 1: Playlist",permalink:"/docs/r/getting-started/tutorials/season-1-the-local-experience/episode01"},next:{title:"Episode 3: Playlist Redux",permalink:"/docs/r/getting-started/tutorials/season-1-the-local-experience/episode03"}},c=[{value:"Showcasing:",id:"showcasing",children:[],level:2},{value:"To play this episode:",id:"to-play-this-episode",children:[],level:2}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"episode-2-statistics"},"Episode 2: Statistics"),(0,i.kt)("p",null,"Use Metaflow to load the movie metadata CSV file into a data frame and compute some movie genre specific statistics. These statistics are then used in later examples to improve our playlist generator."),(0,i.kt)("p",null,"You can optionally use the Metaflow client to eyeball the results in a Markdown Notebook, and make some simple plots."),(0,i.kt)("h2",{id:"showcasing"},"Showcasing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fan-out over a set of parameters using ",(0,i.kt)("a",{parentName:"li",href:"/docs/r/metaflow/basics#foreach"},"Metaflow foreach"),"."),(0,i.kt)("li",{parentName:"ul"},"Plotting results in a Markdown Notebook.")),(0,i.kt)("h2",{id:"to-play-this-episode"},"To play this episode:"),(0,i.kt)("p",null,"If you haven't yet pulled the tutorials to your current working directory, you can follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"../#pull-tutorials"},"here"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd tutorials/02-statistics")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Rscript stats.R show")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Rscript stats.R run")),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"stats.Rmd")," in RStudio")),(0,i.kt)("p",null,"The dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"movies.csv")," is the same one as in Episode 01, which looks like this The dataset looks like this"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"movie_title"),(0,i.kt)("th",{parentName:"tr",align:"left"},"title_year"),(0,i.kt)("th",{parentName:"tr",align:"left"},"genre"),(0,i.kt)("th",{parentName:"tr",align:"left"},"gross"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Avatar"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2009"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sci-Fi"),(0,i.kt)("td",{parentName:"tr",align:"left"},"760505847")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pirates of the Caribbean: At World's End"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2007"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fantasy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"309404152")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Spectre"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2015"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Thriller"),(0,i.kt)("td",{parentName:"tr",align:"left"},"200074175")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"..."),(0,i.kt)("td",{parentName:"tr",align:"left"},"..."),(0,i.kt)("td",{parentName:"tr",align:"left"},"..."),(0,i.kt)("td",{parentName:"tr",align:"left"},"...")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8291).Z,width:"1432",height:"344"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MovieStatsFlow")," below performs the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ingests a CSV into a data frame."),(0,i.kt)("li",{parentName:"ol"},"Fan-out over genre using Metaflow foreach."),(0,i.kt)("li",{parentName:"ol"},"Compute median and mean for each genre."),(0,i.kt)("li",{parentName:"ol"},"Save a data frame of genre specific statistics.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\n# The start step:\nstart <- function(self){\n    # Loads the movie data into a data frame\n    self$df <- read.csv("./movies.csv", stringsAsFactors=FALSE)\n\n    # find all unique genres\n    self$genres <- levels(as.factor(self$df$genre))\n}\n\n# Compute statistics for a single genre.\ncompute_stats <- function(self){\n    self$genre <- self$input\n    message("Computing statistics for ", self$genre)\n\n    # Find all the movies that have this genre\n    self$df_by_genre <- self$df[self$df$genre == self$genre, ]\n\n    gross <- self$df_by_genre$gross\n\n    # Get some statistics on the gross box office for these titles.\n    self$median <- median(gross)\n    self$mean <- mean(gross)\n}\n\n#  Join our parallel branches and merge results into a data frame.\njoin <- function(self, inputs){\n    self$stats <- data.frame(\n        "genres" = unlist(lapply(inputs, function(inp){inp$genre})),\n        "median" = unlist(lapply(inputs, function(inp){inp$median})),\n        "mean" = unlist(lapply(inputs, function(inp){inp$mean})))\n\n    print(head(self$stats))\n}\n\nmetaflow("MovieStatsFlow") %>%\n    step(step = "start",\n          r_function = start,\n          next_step = "compute_stats",\n          foreach = "genres") %>%\n    step(step = "compute_stats",\n         r_function = compute_stats,\n         next_step = "join") %>%\n    step(step = "join",\n         r_function = join,\n         next_step = "end",\n         join = TRUE) %>%\n    step(step = "end") %>%\n    run()\n')))}d.isMDXComponent=!0},8291:function(e,t,n){t.Z=n.p+"assets/images/tutorial-episode-2-a061d17ef87a4587f007e802338470fc.png"}}]);