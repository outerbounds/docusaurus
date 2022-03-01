"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[239],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Organizing Results",p={unversionedId:"python/metaflow/tagging",id:"python/metaflow/tagging",title:"Organizing Results",description:"A boring, under-appreciated part of high-quality science (or any project work in general), is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility.",source:"@site/docs/python/metaflow/tagging.md",sourceDirName:"python/metaflow",slug:"/python/metaflow/tagging",permalink:"/docusaurus/docs/python/metaflow/tagging",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/python/metaflow/tagging.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Dealing with Failures",permalink:"/docusaurus/docs/python/metaflow/failures"},next:{title:"Scheduling Metaflow Flows",permalink:"/docusaurus/docs/python/going-to-production-with-metaflow/scheduling-metaflow-flows"}},u=[{value:"Namespaces",id:"namespaces",children:[{value:"Switching Namespaces",id:"switching-namespaces",children:[],level:3},{value:"Global Namespace",id:"global-namespace",children:[],level:3}],level:2},{value:"Production Namespaces",id:"production-namespaces",children:[{value:"Production tokens",id:"production-tokens",children:[],level:3},{value:"Resetting a production namespace",id:"resetting-a-production-namespace",children:[],level:3}],level:2},{value:"Resuming across namespaces",id:"resuming-across-namespaces",children:[],level:2},{value:"Tagging",id:"tagging",children:[{value:"Tags as Namespaces",id:"tags-as-namespaces",children:[],level:3}],level:2},{value:"Accessing Current IDs in a Flow",id:"accessing-current-ids-in-a-flow",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organizing-results"},"Organizing Results"),(0,r.kt)("p",null,"A boring, under-appreciated part of high-quality science (or any project work in general), is keeping results organized. This is the key to effective collaboration, versioning of parallel lines of work, and reproducibility."),(0,r.kt)("p",null,"The good news is that Metaflow does 80% of this work for you without you having to do anything. This document explains how Metaflow keeps things organized with a concept called ",(0,r.kt)("strong",{parentName:"p"},"namespaces")," and how you can optionally make results even neater with ",(0,r.kt)("strong",{parentName:"p"},"tags"),"."),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"As explained in ",(0,r.kt)("a",{parentName:"p",href:"basics"},"Basics of Metaflow"),", Metaflow persists all runs and all the data artifacts they produce. Every run gets a unique run ID, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow/546"),", which can be used to refer to a specific set of results. You can access these results with the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API"),"."),(0,r.kt)("p",null,"Many users can use Metaflow concurrently. Imagine that Anne and Will are collaborating on a project that consists of two flows, ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". As they, amongst other people, run their versions independently they end up with the following runs:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2696).Z,width:"596",height:"418"})),(0,r.kt)("p",null,"Anne could analyze her latest ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," results in a notebook by remembering that her latest run is ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow/8"),". Fortunately, Metaflow makes this even easier thanks to ",(0,r.kt)("strong",{parentName:"p"},"namespaces"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46).Z,width:"686",height:"494"})),(0,r.kt)("p",null,"When Anne runs ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow"),", her runs are automatically ",(0,r.kt)("strong",{parentName:"p"},"tagged")," with her user name, prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"user:"),". By default, when Anne uses the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API")," in a notebook or in a Python script, the API only returns results that are tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"user:anne"),". Instead of having to remember the exact ID of her latest run, she can simply say:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\n\nrun = Flow('PredictionFlow').latest_run\n")),(0,r.kt)("p",null,"For Anne, this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/8'"),". For Will, this will return ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,r.kt)("h3",{id:"switching-namespaces"},"Switching Namespaces"),(0,r.kt)("p",null,"Namespaces are not about security or access control. They help you to keep results organized. During development, organizing results by the user who produced them is a sensible default."),(0,r.kt)("p",null,"You can freely explore results produced by other people. In a notebook (for example), Anne can write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace('user:will')\nrun = Flow('PredictionFlow').latest_run\n")),(0,r.kt)("p",null,"to see Will's latest results, in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"'PredictionFlow/5'"),"."),(0,r.kt)("p",null,"You can also access a specific run given its ID directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nrun = Run('PredictionFlow/5')\n")),(0,r.kt)("p",null,"However, this will fail for Anne, since ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow/5")," is in Will's namespace. An important feature of namespaces is to make sure that you can't accidentally use someone else's results, which could lead to hard to debug, incorrect analyses."),(0,r.kt)("p",null,"If Anne wants to access Will's results, she must do so explicitly by switching to Will's namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace('user:will')\nrun = Run('PredictionFlow/5')\n")),(0,r.kt)("p",null,"In other words, you can use the Client API freely without having to worry about using incorrect results by accident."),(0,r.kt)("p",null,"If you use the Client API in your flows to access results of other flows, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--namespace")," flag on the command line to switch between namespaces. This is a better approach than hardcoding a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace()")," function call in the code that defines your Metaflow workflow."),(0,r.kt)("h3",{id:"global-namespace"},"Global Namespace"),(0,r.kt)("p",null,"What if you know a run ID but you don't know whose namespace it belongs to? No worries, you can access all results in the Metaflow universe in the ",(0,r.kt)("strong",{parentName:"p"},"global namespace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow, namespace\n\nnamespace(None)\nrun = Run('PredictionFlow/5')\n")),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace(None)")," allows you allows you to access all results without limitations. Be careful though: relative references like ",(0,r.kt)("inlineCode",{parentName:"p"},"latest_run")," make little sense in the global namespace since anyone can produce a new run at any time."),(0,r.kt)("h2",{id:"production-namespaces"},"Production Namespaces"),(0,r.kt)("p",null,"During development, namespacing by the user name feels natural. However, when you ",(0,r.kt)("a",{parentName:"p",href:"../going-to-production-with-metaflow/scheduling-metaflow-flows"},"schedule your flow to run automatically"),', runs are not related to a specific user anymore. It is typical for multiple people to collaborate on a project that has a canonical production version. It is not obvious which user "owns" the production version.'),(0,r.kt)("p",null,"Moreover, it is critical that you, and all other people, can keep experimenting on the project without having to worry about breaking the production version. If the production flow ran in the namespace of any individual, relative references like ",(0,r.kt)("inlineCode",{parentName:"p"},"latest_run")," could break the production easily as the user keeps executing experimental runs."),(0,r.kt)("p",null,"As a solution, by default the production namespace is made separate from the user namespace:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8339).Z,width:"881",height:"498"})),(0,r.kt)("p",null,"Isolated production namespaces have three main benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Production tokens allow all users of Metaflow to ",(0,r.kt)("strong",{parentName:"li"},"experiment freely")," with any project without having to worry about accidentally breaking a production deployment. Even if they ran step-functions create, they could not overwrite a production version without explicit consent, via a shared production token, by the person who did the previous authorized deployment."),(0,r.kt)("li",{parentName:"ol"},"An isolated production namespace makes it easy to ",(0,r.kt)("strong",{parentName:"li"},"keep production results separate from any experimental runs")," of the same project running concurrently. You can rest assured that when you switch to a production namespace, you will see only results related to production - nothing more, nothing less."),(0,r.kt)("li",{parentName:"ol"},"By having control over the production namespace, you can ",(0,r.kt)("strong",{parentName:"li"},"alter data that is seen by production flows"),". For instance, if you have separate training and prediction flows in production, the prediction flow can access the previously built model as long as one exists in the same namespace. By changing the production namespace, you can make sure that a new deployment isn't tainted by old results.")),(0,r.kt)("p",null,"If you are a single developer working on a new project, you don't have to do anything special to deal with production namespaces. You can rely on the default behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,r.kt)("h3",{id:"production-tokens"},"Production tokens"),(0,r.kt)("p",null,"When you deploy a Flow to production for the first time, Metaflow creates a new, isolated production namespace for your production flow. This namespace is identified by a ",(0,r.kt)("strong",{parentName:"p"},"production token"),", which is a random identifier that identifies a production deployment, e.g. production:PredictionFlow3 above. You can examine production results in a notebook by switching to the production namespace."),(0,r.kt)("p",null,"If another person wants to deploy a new version of the flow to production, they must use the same production token. You, or whoever has the token, are responsible for sharing it with users who are authorized to deploy new versions to production. This manual step should prevent random users from deploying versions to production inadvertently."),(0,r.kt)("p",null,"After you have shared the production token with another person, they can deploy a new version with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py step-functions create --authorize TOKEN_YOU_SHARED_WITH_THEM\n")),(0,r.kt)("p",null,"They need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--authorize")," option only once. Metaflow stores the token for them after the first deployment, so they need to do this only once."),(0,r.kt)("h3",{id:"resetting-a-production-namespace"},"Resetting a production namespace"),(0,r.kt)("p",null,"If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will deploy an updated version of your code in the existing production namespace of the flow."),(0,r.kt)("p",null,"Sometimes the code has changed so drastically that you want to recreate a fresh namespace for its results. You can do this as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python production_flow.py step-functions create --generate-new-token\n")),(0,r.kt)("p",null,"This will deploy a new version in production using a fresh, empty namespace."),(0,r.kt)("h2",{id:"resuming-across-namespaces"},"Resuming across namespaces"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"resume")," command")," is smart enough to work across production and personal namespaces. You can ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," a production workflow without having to do anything special with namespaces."),(0,r.kt)("p",null,"You can resume runs of other users and you can resume any production runs. The results of your resumed runs are always created in your personal namespace."),(0,r.kt)("h2",{id:"tagging"},"Tagging"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"user:")," tag is assigned by Metaflow automatically. In addition to automatically assigned tags, you can add and remove arbitrary tags in objects. Tags are an excellent way to add extra annotations to runs, tasks etc., which makes it easier for you and other people to find and retrieve results of interest."),(0,r.kt)("p",null,"An easy way to add tags is the ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," command line option. You can add multiple tags with multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," options. For instance, this will annotate a ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow")," run with a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python helloworld.py run --tag crazy_test\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--tag")," option assigns the specified tag to all objects produced by the run: the run itself, its steps, tasks, and data artifacts."),(0,r.kt)("p",null,"You can access runs (or steps or tasks) with a certain tag easily using the Client API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nrun = list(Flow('HelloFlow').runs('crazy_test'))[0]\n")),(0,r.kt)("p",null,"This will return the latest run of ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloFlow")," with a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test")," in your namespace. Filtering is performed both based on the current ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace()")," and the tag filter."),(0,r.kt)("p",null,"You can also filter by multiple tags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nrun = list(Flow('HelloFlow').runs('crazy_test', 'date:20180301'))[0]\n")),(0,r.kt)("p",null,"This requires that all the tags listed, and the current namespace, are present in the object."),(0,r.kt)("p",null,"You can see the set of tags assigned to an object with the ",(0,r.kt)("inlineCode",{parentName:"p"},".tags")," property. In the above case, ",(0,r.kt)("inlineCode",{parentName:"p"},"run.tags")," would return a set with a string ",(0,r.kt)("inlineCode",{parentName:"p"},"crazy_test")," amongst other automatically assigned tags."),(0,r.kt)("h3",{id:"tags-as-namespaces"},"Tags as Namespaces"),(0,r.kt)("p",null,"Let's consider again the earlier example with Anne and Will. They are working on their own versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionFlow")," but they want to collaborate on ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow"),". They could add a descriptive tag, say ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz_features"),", to ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," runs."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5023).Z,width:"638",height:"448"})),(0,r.kt)("p",null,"Now, they can easily get the latest results of ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow")," regardless of the user who ran the flow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Flow\nnamespace('xyz_features')\nrun = Flow('FeatureFlow').latest_run\n")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"FeatureFlow/34")," which happened to be run by Anne. If Will runs the flow again, his results will be the latest results in this namespace."),(0,r.kt)("p",null,"We encourage you to use a combination of namespaces, domain-specific tags, and filtering by tags to design a workflow that works well for your project."),(0,r.kt)("h2",{id:"accessing-current-ids-in-a-flow"},"Accessing Current IDs in a Flow"),(0,r.kt)("p",null,"Tagging and namespaces, together with the ",(0,r.kt)("a",{parentName:"p",href:"client"},"Client API"),", are the main ways for accessing results of past runs. Metaflow uses these mechanisms to organize and isolate results automatically, so in most cases you don't have to do anything."),(0,r.kt)("p",null,"However, in some cases you may need to deal with IDs explicitly. For instance, if your flow interacts with external systems, it is a good idea to inform the external system about the identity of the run, so you can trace back any issues to a specific run. Also IDs can come in handy if you need to version externally stored data."),(0,r.kt)("p",null,"For this purpose, Metaflow provides a singleton object ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," that represents the identity of the currently running task. Use it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowSpec")," to retrieve current IDs of interest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, current\n\nclass CurrentFlow(FlowSpec):\n\n    @step\n    def start(self):\n        print("flow name: %s" % current.flow_name)\n        print("run id: %s" % current.run_id)\n        print("origin run id: %s" % current.origin_run_id)\n        print("step name: %s" % current.step_name)\n        print("task id: %s" % current.task_id)\n        print("pathspec: %s" % current.pathspec)\n        print("namespace: %s" % current.namespace)\n        print("username: %s" % current.username)\n        print("flow parameters: %s" % str(current.parameter_names))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print("end has a different step name: %s" % current.step_name)\n        print("end has a different task id: %s" % current.task_id)\n        print("end has a different pathspec: %s" % current.pathspec)\n\nif __name__ == \'__main__\':\n    CurrentFlow()\n')),(0,r.kt)("p",null,"In particular, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"current.pathspec")," is convenient as an unambiguous identifier of a task. For instance, the above script printed out"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pathspec: CurrentFlow/1/start/550539\n")),(0,r.kt)("p",null,"Now you can inspect this particular task using",(0,r.kt)("a",{parentName:"p",href:"client"}," the Client API")," by instantiating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," object as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Task\ntask = Task('CurrentFlow/1/start/550539')\nprint task.stdout\n")),(0,r.kt)("p",null,"This prints out the output of the task identified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pathspec"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton also provides programmatic access to the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," used by the ",(0,r.kt)("a",{parentName:"p",href:"debugging#how-to-use-the-resume-command"},"resume")," within your flow code."),(0,r.kt)("p",null,"If a user explicitly overrides the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"--origin-run-id"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton would reflect that value."),(0,r.kt)("p",null,"If not, it would be the id of the last invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," (successful or not)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This value would remain the same even after multiple successful ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," invocations. If you don't want this behavior, you can always override the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"origin-run-id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," a specific run."))),(0,r.kt)("p",null,"For regular ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," invocations, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"current.origin_run_id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("p",null,"Suppose we invoked ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," for the above script to re-run everything from ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," without explicitly overriding the CLI option ",(0,r.kt)("inlineCode",{parentName:"p"},"origin-run-id"),", we can see the value chosen by Metaflow using the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," singleton:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python current_flow.py resume start\n")),(0,r.kt)("p",null,"You should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"origin_run_id")," used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," in the output (the exact value for you might be different):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"origin run id: 4\n")))}d.isMDXComponent=!0},2696:function(e,t,n){t.Z=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuuy7v5kovmxtsv_namespace1-0868414851a2703b7058dda77294743a.png"},46:function(e,t,n){t.Z=n.p+"assets/images/assets_metaflow_-lpjn0yp7r49jrnxca_5_-lpjryuvqmspdu9w5imb_namespace2-e6724671478c141360319922e3eb45b5.png"},5023:function(e,t,n){t.Z=n.p+"assets/images/namespace3-9d8e91c0ba47d26b3688658d74447e13.png"},8339:function(e,t,n){t.Z=n.p+"assets/images/namespace4_(3)-9e825aaf633bd9c3557c35b34291c647.png"}}]);