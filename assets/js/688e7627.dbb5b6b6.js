"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),v=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,r.useState)(k),T=N[0],C=N[1],_=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=v[m];null!=I&&I!==T&&f.some((function(e){return e.value===I}))&&C(I)}var F=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==T&&(x(t),C(a),null!=m&&b(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onFocus:F,onClick:F},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7328:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={},p="Organizing Results",c={unversionedId:"r/metaflow/tagging",id:"r/metaflow/tagging",title:"Organizing Results",description:"A boring, under-appreciated part of high-quality science \\(or any project work in general\\), is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility.",source:"@site/docs/r/metaflow/tagging.md",sourceDirName:"r/metaflow",slug:"/r/metaflow/tagging",permalink:"/docusaurus/docs/r/metaflow/tagging",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/r/metaflow/tagging.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Dealing with Failures",permalink:"/docusaurus/docs/r/metaflow/failures"},next:{title:"Scheduling Metaflow Flows",permalink:"/docusaurus/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows"}},d=[{value:"Namespaces",id:"namespaces",children:[{value:"Switching Namespaces",id:"switching-namespaces",children:[],level:3},{value:"Global Namespace",id:"global-namespace",children:[],level:3},{value:"Resuming across namespaces",id:"resuming-across-namespaces",children:[],level:3}],level:2},{value:"Production Namespaces",id:"production-namespaces",children:[{value:"Production tokens",id:"production-tokens",children:[],level:3},{value:"Resetting a production namespace",id:"resetting-a-production-namespace",children:[],level:3}],level:2},{value:"Tagging",id:"tagging",children:[{value:"Accessing Tags",id:"accessing-tags",children:[],level:3},{value:"Tags as Namespaces",id:"tags-as-namespaces",children:[],level:3}],level:2},{value:"Accessing Current IDs in a Flow",id:"accessing-current-ids-in-a-flow",children:[],level:2}],m={toc:d};function h(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organizing-results"},"Organizing Results"),(0,o.kt)("p",null,"A boring, under-appreciated part of high-quality science ","(","or any project work in general",")",", is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility."),(0,o.kt)("p",null,"The good news is that Metaflow does 80% of this work for you without you having to do anything. This document explains how Metaflow keeps things organized with a concept called ",(0,o.kt)("strong",{parentName:"p"},"namespaces")," and how you can optionally make results even neater with ",(0,o.kt)("strong",{parentName:"p"},"tags"),"."),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"As explained in ",(0,o.kt)("a",{parentName:"p",href:"basics"},"Basics of Metaflow"),", Metaflow persists all runs and all the data artifacts they produce. Every run gets a unique run ID, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow/546"),", which can be used to refer to a specific set of results. You can access these results with the ",(0,o.kt)("a",{parentName:"p",href:"client"},"Client API"),"."),(0,o.kt)("p",null,"Many users can use Metaflow concurrently. Imagine that Anne and Will are collaborating on a project that consists of two flows, ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". As they, amongst other people, run their versions independently they end up with the following runs:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2696).Z,width:"596",height:"418"})),(0,o.kt)("p",null,"Anne could analyze her latest ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," results in a notebook by remembering that her latest run is ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow/8"),". Fortunately, Metaflow makes this even easier thanks to ",(0,o.kt)("strong",{parentName:"p"},"namespaces"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46).Z,width:"686",height:"494"})),(0,o.kt)("p",null,"When Anne runs ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow"),", her runs are automatically ",(0,o.kt)("strong",{parentName:"p"},"tagged")," with her user name, prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"user:"),". By default, when Anne uses the ",(0,o.kt)("a",{parentName:"p",href:"client"},"Client API"),", the API only returns results that are tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"user:anne"),". Instead of having to remember the exact ID of her latest run, she can simply say:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nrun <- flow_client$new('PredictionFlow')$latest_run\n")),(0,o.kt)("p",null,"For Anne, this will return ",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/8'"),". For Will, this will return ",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,o.kt)("h3",{id:"switching-namespaces"},"Switching Namespaces"),(0,o.kt)("p",null,"Namespaces are not about security or access control. They help you to keep results organized. During development, organizing results by the user who produced them is a sensible default."),(0,o.kt)("p",null,"You can freely explore results produced by other people. In a notebook ","(","for example",")",", Anne can write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('user:will')\nrun <- flow_client$new('PredictionFlow')$latest_run\n")),(0,o.kt)("p",null,"to see Will's latest results, in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,o.kt)("p",null,"You can also access a specific run given its ID directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,o.kt)("p",null,"However, this will fail for Anne, since ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow/5")," is in Will's namespace. An important feature of namespaces is to make sure that you can't accidentally use someone else's results, which could lead to hard to debug, incorrect analyses."),(0,o.kt)("p",null,"If Anne wants to access Will's results, she must do so explicitly by switching to Will's namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('user:will')\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,o.kt)("p",null,"In other words, you can use the Client API freely without having to worry about using incorrect results by accident."),(0,o.kt)("p",null,"If you use the Client API in your flows to access results of other flows, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--namespace")," flag on the command line to switch between namespaces. This is a better approach than hardcoding a ",(0,o.kt)("inlineCode",{parentName:"p"},"set_namespace()")," function call in the code that defines your Metaflow workflow."),(0,o.kt)("h3",{id:"global-namespace"},"Global Namespace"),(0,o.kt)("p",null,"What if you know a run ID but you don't know whose namespace it belongs to? No worries, you can access all results in the Metaflow universe in the ",(0,o.kt)("strong",{parentName:"p"},"global namespace"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace(NULL)\nrun <- flow_client$new('PredictionFlow')$run(\"5\")\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"set_namespace(NULL)")," allows you to access all results without limitations. Be careful though: relative references like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_run")," make little sense in the global namespace since anyone can produce a new run at any time."),(0,o.kt)("h3",{id:"resuming-across-namespaces"},"Resuming across namespaces"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"The ",(0,o.kt)("inlineCode",{parentName:"a"},"resume")," command")," is smart enough to work across production and personal namespaces. You can ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," a production workflow without having to do anything special with namespaces."),(0,o.kt)("p",null,"You can resume runs of other users and you can resume any production runs. The results of your resumed runs are always created in your personal namespace."),(0,o.kt)("h2",{id:"production-namespaces"},"Production Namespaces"),(0,o.kt)("p",null,"During development, namespacing by the user name feels natural. However, when you ",(0,o.kt)("a",{parentName:"p",href:"../going-to-production-with-metaflow/scheduling-metaflow-flows"},"schedule your flow to run automatically"),', runs are not related to a specific user anymore. It is typical for multiple people to collaborate on a project that has a canonical production version. It is not obvious which user "owns" the production version.'),(0,o.kt)("p",null,"Moreover, it is critical that you, and all other people, can keep experimenting on the project without having to worry about breaking the production version. If the production flow ran in the namespace of any individual, relative references like ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_run")," could break the production easily as the user keeps executing experimental runs."),(0,o.kt)("p",null,"As a solution, by default the production namespace is made separate from the user namespace:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8339).Z,width:"881",height:"498"})),(0,o.kt)("p",null,"Isolated production namespaces have three main benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Production tokens allow all users of Metaflow to ",(0,o.kt)("strong",{parentName:"li"},"experiment freely")," with any project without having to worry about accidentally breaking a production deployment. Even if they ran step-functions create, they could not overwrite a production version without explicit consent, via a shared production token, by the person who did the previously authorized deployment."),(0,o.kt)("li",{parentName:"ol"},"An isolated production namespace makes it easy to ",(0,o.kt)("strong",{parentName:"li"},"keep production results separate from any experimental runs")," of the same project running concurrently. You can rest assured that when you switch to a production namespace, you will see only results related to production - nothing more, nothing less."),(0,o.kt)("li",{parentName:"ol"},"By having control over the production namespace, you can ",(0,o.kt)("strong",{parentName:"li"},"alter data that is seen by production flows"),". For instance, if you have separate training and prediction flows in production, the prediction flow can access the previously built model as long as one exists in the same namespace. By changing the production namespace, you can make sure that a new deployment isn't tainted by old results.")),(0,o.kt)("p",null,"If you are a single developer working on a new project, you don't have to do anything special to deal with production namespaces. You can rely on the default behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,o.kt)("h3",{id:"production-tokens"},"Production tokens"),(0,o.kt)("p",null,"When you deploy a Flow to production for the first time, Metaflow creates a new, isolated production namespace for your production flow. This namespace is identified by a ",(0,o.kt)("strong",{parentName:"p"},"production token"),", which is a random identifier that identifies a production deployment, e.g. production:PredictionFlow3 above. You can examine production results in a notebook by switching to the production namespace."),(0,o.kt)("p",null,"If another person wants to deploy a new version of the flow to production, they must use the same production token. You, or whoever has the token, are responsible for sharing it with users who are authorized to deploy new versions to production. This manual step should prevent random users from deploying versions to production inadvertently."),(0,o.kt)("p",null,"After you have shared the production token with another person, they can deploy a new version with"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript production_flow.R step-functions create --authorize TOKEN_YOU_SHARED_WITH_THEM\n"))),(0,o.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'  ...\n  step(step = "end",\n       ...)\n  %>%\n  run(step_fucntions = "create",\n    authorize = "TOKEN_YOU_SHARED_WITH_THEM")\n')))),(0,o.kt)("p",null,"They need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--authorize")," option only once. Metaflow stores the token for them after the first deployment, so they need to do this only once."),(0,o.kt)("h3",{id:"resetting-a-production-namespace"},"Resetting a production namespace"),(0,o.kt)("p",null,"If you call ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will deploy an updated version of your code in the existing production namespace of the flow."),(0,o.kt)("p",null,"Sometimes the code has changed so drastically that you want to recreate a fresh namespace for its results. You can do this as follows:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript production_flow.R step-functions create --generate-new-token\n"))),(0,o.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'  ...\n  step(step = "end",\n       ...)\n  %>%\n  run(step_fucntions = "create",\n      generate_new_token = TRUE)\n')))),(0,o.kt)("p",null,"This will deploy a new version in production using a fresh, empty namespace"),(0,o.kt)("h2",{id:"tagging"},"Tagging"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user:")," tag is assigned by Metaflow automatically. In addition to automatically assigned tags, you can add and remove arbitrary tags in objects. Tags are an excellent way to add extra annotations to runs, tasks etc., which makes it easier for you and other people to find and retrieve results of interest."),(0,o.kt)("p",null,"An easy way to add tags is the ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag")," command line option. You can add multiple tags with multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag")," options. For instance, this will annotate a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow")," run with a tag ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript helloworld.R run --tag crazy_test\n"))),(0,o.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Replace run() in helloworld.R with\n# run(tag = c("crazy_test"))\n# and execute in RStudio\n')))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag")," option assigns the specified tag to all objects produced by the run: the run itself, its steps, tasks, and data artifacts."),(0,o.kt)("h3",{id:"accessing-tags"},"Accessing Tags"),(0,o.kt)("p",null,"You can access runs ","(","or steps or tasks",")"," with a certain tag easily using the Client API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\nrun <- flow_client$new("HelloFlow").runs_with_tags("crazy_test")[[1]]\n')),(0,o.kt)("p",null,"This will return the latest run of ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloFlow")," with a tag ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test")," in your namespace. Filtering is performed both based on the current ",(0,o.kt)("inlineCode",{parentName:"p"},"set_namespace()")," and the tag filter."),(0,o.kt)("p",null,"You can also filter by multiple tags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\nrun <- flow_client$new("HelloFlow").runs_with_tags("crazy_test", "date:2020-06-01")[[1]]\n')),(0,o.kt)("p",null,"This requires that all the tags listed, and the current namespace, are present in the object."),(0,o.kt)("p",null,"You can see the set of tags assigned to an object with the ",(0,o.kt)("inlineCode",{parentName:"p"},".tags")," property. In the above case, ",(0,o.kt)("inlineCode",{parentName:"p"},"run.tags")," would return a set with a string ",(0,o.kt)("inlineCode",{parentName:"p"},"crazy_test")," amongst other automatically assigned tags."),(0,o.kt)("h3",{id:"tags-as-namespaces"},"Tags as Namespaces"),(0,o.kt)("p",null,"Let's consider again the earlier example with Anne and Will. They are working on their own versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," but they want to collaborate on ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". They could add a descriptive tag, say ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz_features"),", to ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," runs."),(0,o.kt)("p",null,"Now, they can easily get the latest results of ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," regardless of the user who ran the flow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"library(metaflow)\nset_namespace('xyz_features')\nrun <- flow_client$new('FeatureFlow')$latest_run\n")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"FeatureFlow/34")," which happened to be run by Anne. If Will runs the flow again, his results will be the latest results in this namespace."),(0,o.kt)("p",null,"We encourage you to use a combination of namespaces, domain-specific tags, and filtering by tags to design a workflow that works well for your project."),(0,o.kt)("h2",{id:"accessing-current-ids-in-a-flow"},"Accessing Current IDs in a Flow"),(0,o.kt)("p",null,"Tagging and namespaces, together with the ",(0,o.kt)("a",{parentName:"p",href:"client"},"Client API"),", are the main ways for accessing results of past runs. Metaflow uses these mechanisms to organize and isolate results automatically, so in most cases you don't have to do anything."),(0,o.kt)("p",null,"However, in some cases you may need to deal with IDs explicitly. For instance, if your flow interacts with external systems, it is a good idea to inform the external system about the identity of the run, so you can trace back any issues to a specific run. Also IDs can come in handy if you need to version externally stored data."),(0,o.kt)("p",null,"For this purpose, Metaflow provides a singleton object ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," that represents the identity of the currently running task. Use it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"FlowSpec")," to retrieve current IDs of interest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="current_flow.R"',title:'"current_flow.R"'},'library(metaflow)\n\nstart <- function(self){\n    print(paste0("flow name: ", current("flow_name")))\n    print(paste0("run id: ", current("run_id")))\n    print(paste0("origin run id: ", current("origin_run_id")))\n    print(paste0("step name: ", current("step_name")))\n    print(paste0("task id: ", current("task_id")))\n    print(paste0("pathspec: ", current("pathspec")))\n    print(paste0("username: ", current("username")))\n}\n\nmetaflow("CurrentFlow") %>%\n    step(step="start",\n         r_function=start,\n         next_step="end") %>%\n    step(step="end") %>%\n    run()\n')),(0,o.kt)("p",null,"You can see the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "flow name: CurrentFlow"\n2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "run id: 198"\n2020-06-19 21:19:03.387 [198/start/1139 (pid 64853)] [1] "origin run id: "\n2020-06-19 21:19:03.388 [198/start/1139 (pid 64853)] [1] "step name: start"\n2020-06-19 21:19:03.388 [198/start/1139 (pid 64853)] [1] "task id: 1139"\n2020-06-19 21:19:03.389 [198/start/1139 (pid 64853)] [1] "pathspec: CurrentFlow/198/start/1139"\n2020-06-19 21:19:03.389 [198/start/1139 (pid 64853)] [1] "username: jge"\n2020-06-19 21:19:08.400 [198/start/1139 (pid 64853)] Task finished successfully.\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton also provides programmatic access to the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," used by the ",(0,o.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"resume")," within your flow code."),(0,o.kt)("p",null,"For regular ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," invocations, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},'current("origin_run_id")')," is ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("p",null,"If a user explicitly overrides the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton would reflect that value. Suppose we invoked ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," for the above script to re-run everything from ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," without explicitly overriding the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"origin-run-id"),", we can see the value chosen by Metaflow using the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"Rscript current_flow.R resume start\n"))),(0,o.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Replace run() in current_flow.R with\n# run(resume = "start")\n# and execute in RStudio\n')))),(0,o.kt)("p",null,"You should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"origin_run_id")," used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," in the output ","(","the exact value for you might be different",")",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'"origin run id: 198"\n')))}h.isMDXComponent=!0},2696:function(e,t,n){t.Z=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuuy7v5kovmxtsv_namespace1-0868414851a2703b7058dda77294743a.png"},46:function(e,t,n){t.Z=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuvqmspdu9w5imb_namespace2-e6724671478c141360319922e3eb45b5.png"},8339:function(e,t,n){t.Z=n.p+"assets/images/namespace4_(3)-9e825aaf633bd9c3557c35b34291c647.png"}}]);