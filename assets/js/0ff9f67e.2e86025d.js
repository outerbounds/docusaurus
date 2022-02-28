"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3766],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),i=n(2389),o=n(9548),l=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,f=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),y=w.tabGroupChoices,v=w.setTabGroupChoices,N=(0,r.useState)(k),T=N[0],x=N[1],C=[],R=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=y[f];null!=S&&S!==T&&g.some((function(e){return e.value===S}))&&x(S)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(R(t),x(a),null!=f&&v(f,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},6603:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(8215),s=["components"],u={},p="Debugging with Metaflow",d={unversionedId:"r/metaflow/debugging",id:"r/metaflow/debugging",title:"Debugging with Metaflow",description:"Metaflow wants to make debugging failed flows as painless as possible.",source:"@site/docs/r/metaflow/debugging.md",sourceDirName:"r/metaflow",slug:"/r/metaflow/debugging",permalink:"/docusaurus/docs/r/metaflow/debugging",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/r/metaflow/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Inspecting Flows and Results",permalink:"/docusaurus/docs/r/metaflow/client"},next:{title:"Scaling Out and Up",permalink:"/docusaurus/docs/r/metaflow/scaling"}},c=[{value:"How to debug failed flows",id:"how-to-debug-failed-flows",children:[{value:"How to use the <code>resume</code> command",id:"how-to-use-the-resume-command",children:[{value:"Resuming from an arbitrary step",id:"resuming-from-an-arbitrary-step",children:[],level:4},{value:"Resume and parameters",id:"resume-and-parameters",children:[],level:4}],level:3}],level:2},{value:"Reproducing Production Issues Locally",id:"reproducing-production-issues-locally",children:[{value:"Staging flows for production",id:"staging-flows-for-production",children:[],level:3}],level:2},{value:"Inspecting data with RStudio IDE or Jupyter Notebook",id:"inspecting-data-with-rstudio-ide-or-jupyter-notebook",children:[],level:2}],f={toc:c};function m(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging-with-metaflow"},"Debugging with Metaflow"),(0,i.kt)("p",null,"Metaflow wants to make debugging failed flows as painless as possible."),(0,i.kt)("p",null,"Debugging issues during development is a normal part of the development process. You should be able to develop and debug your Metaflow scripts similar to how you develop any R scripts locally."),(0,i.kt)("p",null,"Debugging a failure can either happen ",(0,i.kt)("strong",{parentName:"p"},"after")," a failed execution or ",(0,i.kt)("strong",{parentName:"p"},"during")," execution. In the first case, Metaflow provides two mechanisms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/r/metaflow/debugging#how-to-use-the-resume-command"},"ability to resume a flow"),", re-executing all successful steps and only re-executing from the failed step. This allows you to fix the problem in the failed step, resume the flow and make progress."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/r/metaflow/client"},"ability to inspect the data")," produced by each step in a flow to be able to determine what went wrong.")),(0,i.kt)("h2",{id:"how-to-debug-failed-flows"},"How to debug failed flows"),(0,i.kt)("p",null,"The process of debugging failed flows is similar both for development-time and production-time issues:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the step that failed. The failed step is reported as the last line of the error report where it is easy to spot."),(0,i.kt)("li",{parentName:"ol"},"Identify the run id of the failed run. On the console output, each line is prefixed with an identifier like ",(0,i.kt)("inlineCode",{parentName:"li"},"2/start/21426"),". Here, ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," is the run id, ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," is the step name, and ",(0,i.kt)("inlineCode",{parentName:"li"},"21426")," is the task id."),(0,i.kt)("li",{parentName:"ol"},"Reproduce the failed run with ",(0,i.kt)("inlineCode",{parentName:"li"},"resume")," as ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/r/metaflow/debugging#how-to-use-the-resume-command"},"described below"),". Confirm that the error message you get locally matches to the original error message."),(0,i.kt)("li",{parentName:"ol"},"Identify the failed logic inside the failed step. You can do this by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," statements in the step until ",(0,i.kt)("inlineCode",{parentName:"li"},"resume")," reveals enough information. Alternatively, you can reproduce the faulty logic in R studio or jupyter notebook using input data artifacts for the step, as described below in the section about ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus/docs/r/metaflow/debugging#inspecting-data-with-rstudio-or-jupyter-notebook"},"RStudio and Jupyter Notebook"),"."),(0,i.kt)("li",{parentName:"ol"},"Confirm that the fix works with ",(0,i.kt)("inlineCode",{parentName:"li"},"resume"),". Return to 4 if the error has not been fixed."),(0,i.kt)("li",{parentName:"ol"},"When the step works locally, rerun the whole flow from ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"end")," and confirm that the fix works as intended.")),(0,i.kt)("h3",{id:"how-to-use-the-resume-command"},"How to use the ",(0,i.kt)("inlineCode",{parentName:"h3"},"resume")," command"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," command allows you to resume execution of a past run at a failed step. Resuming makes it easy to quickly reproduce the failure and iterate on the step code until a fix has been found."),(0,i.kt)("p",null,"Here is how it works. First, save the snippet below :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="debugflow.R"',title:'"debugflow.R"'},'library(metaflow)\n\na <- function(self){\n    self$var <- 1\n}\n\nb <- function(self){\n    self$var <- tofail("cannot find function tofail")\n}\n\njoin <- function(self, inputs){\n    print(paste("var in step a is", inputs$a$var))\n    print(paste("var in step b is", inputs$b$var))\n}\n\nmetaflow("DebugFlow") %>%\n    step(step = "start",\n         next_step = c("a", "b")) %>%\n    step(step = "a",\n         r_function=a,\n         next_step="join") %>%\n    step(step="b",\n         r_function=b,\n         next_step="join") %>%\n    step(step="join",\n         r_function=join,\n         next_step="end",\n         join=TRUE) %>%\n    step(step="end") %>%\n    run()\n')),(0,i.kt)("p",null,"Run the script with:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R run\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Execute in RStudio as is\n")))),(0,i.kt)("p",null,"The run should fail. The output should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'...\n2020-06-19 13:23:22.264 [153/a/1002 (pid 44264)] Task is starting.\n2020-06-19 13:23:22.980 [153/b/1003 (pid 44272)] Task is starting.\n2020-06-19 13:23:30.488 [153/a/1002 (pid 44264)] Task finished successfully.\n2020-06-19 13:23:31.813 [153/b/1003 (pid 44272)] Evaluation error: could not find function "tofail".\n2020-06-19 13:23:33.211 [153/b/1003 (pid 44272)] Task failed.\n2020-06-19 13:23:33.211 Workflow failed.\n')),(0,i.kt)("p",null,"This shows that the step ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," of the run ",(0,i.kt)("inlineCode",{parentName:"p"},"153")," failed. In your case, the run id could be different."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," command runs the flow similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),". However, in contrast to ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," resuming reuses results of every successful step instead of actually running them."),(0,i.kt)("p",null,"Try it with"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Replace run() in debugflow.R with\n# run(resume = TRUE)\n# and execute in RStudio\n")))),(0,i.kt)("p",null,"Metaflow remembers the run number of the last local run, which in this case is ",(0,i.kt)("inlineCode",{parentName:"p"},"153"),", so you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," reusing results of the run above. Since we have not changed anything yet, you should see the above error again but with an incremented run number."),(0,i.kt)("p",null,"You can also resume a specific run using the CLI option ",(0,i.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," if you don't like the default value selected by Metaflow. To get the same behavior as above, you can also do:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume --origin-run-id 153\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Replace run() in debugflow.R with\n# run(resume = TRUE, origin_run_id = "153")\n# and execute in RStudio\n')))),(0,i.kt)("p",null,"If you'd like programmatic access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin-run-id")," selected for the ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," ","(","either implicitly selected by Metaflow as last ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," invocation, or explicitly declared by the user via the CLI",")",", you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," object. Read more ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/r/metaflow/tagging#accessing-current-ids-in-a-flow"},"here"),"."),(0,i.kt)("p",null,"Next, fix the error by replacing ",(0,i.kt)("inlineCode",{parentName:"p"},'tofail("cannot find function tofail")')," in ",(0,i.kt)("inlineCode",{parentName:"p"},"debugflow.R")," with ",(0,i.kt)("inlineCode",{parentName:"p"},'"any message"'),". Try again after the fix. This time, you should see the flow completing successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'2020-06-19 14:09:06.015 Gathering required information to resume run (this may take a bit of time)...\n2020-06-19 14:09:22.177 Workflow starting (run-id 154):\n2020-06-19 14:09:22.865 [154/start/1045] Cloning results of a previously run task 153/start/1001\n2020-06-19 14:09:27.797 [154/a/1046] Cloning results of a previously run task 153/a/1002\n2020-06-19 14:09:28.789 [154/b/1047 (pid 48073)] Task is starting.\n2020-06-19 14:09:37.263 [154/b/1047 (pid 48073)] Task finished successfully.\n2020-06-19 14:09:38.784 [154/join/1048 (pid 48130)] Task is starting.\n2020-06-19 14:09:44.621 [154/join/1048 (pid 48130)] [1] "var in step a is 1"\n2020-06-19 14:09:44.811 [154/join/1048 (pid 48130)] [1] "var in step b is any message"\n2020-06-19 14:09:49.704 [154/join/1048 (pid 48130)] Task finished successfully.\n2020-06-19 14:09:50.798 [154/end/1049 (pid 48156)] Task is starting.\n2020-06-19 14:10:00.518 [154/end/1049 (pid 48156)] Task finished successfully.\n2020-06-19 14:10:00.893 Done!\n')),(0,i.kt)("p",null,"Resuming uses the flow and step names to decide what results can be reused. This means that the results of previously successful steps will get reused even if you change their step code. You can add new steps and alter code of failed steps safely with ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")),(0,i.kt)("h4",{id:"resuming-from-an-arbitrary-step"},"Resuming from an arbitrary step"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," resumes from the step that failed, like ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," above. Sometimes fixing the failed step requires re-execution of some steps that precede it."),(0,i.kt)("p",null,"You can choose the step to resume from by specifying the step name on the command line:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debugflow.R resume start\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Replace run() in debugflow.R with\n# run(resume = "start")\n# and execute in RStudio\n')))),(0,i.kt)("p",null,"This would resume execution from the step ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),". If you specify a step that comes after the step that failed, execution resumes from the failed step - you can't skip over steps."),(0,i.kt)("h4",{id:"resume-and-parameters"},"Resume and parameters"),(0,i.kt)("p",null,"If your flow has ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/r/metaflow/basics#how-to-define-parameters-for-flows"},(0,i.kt)("inlineCode",{parentName:"a"},"Parameters")),", you can't change their values when resuming. Changing parameter values could change the results of any steps, including those that ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," skips over, which could result to unexpected behavior in subsequent steps."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," command reuses the parameter values that you set with ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," originally."),(0,i.kt)("h2",{id:"reproducing-production-issues-locally"},"Reproducing Production Issues Locally"),(0,i.kt)("p",null,"This section shows you how to reproduce a failed Metaflow run on AWS Step Functions locally. This is how a failed run on AWS Step Functions UI looks like -"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7343).Z,width:"1999",height:"180"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4798).Z,width:"1999",height:"1009"})),(0,i.kt)("p",null,"Notice the execution ID of ",(0,i.kt)("inlineCode",{parentName:"p"},"5ca85f96-8508-409d-a5f5-b567db1040c5"),". When running on AWS Step Functions, Metaflow uses the AWS Step Functions execution ID ","(","prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"sfn-"),")"," as the run id."),(0,i.kt)("p",null,"The graph visualization shows that step ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," failed, as expected. First, you should inspect the logs of the failed step to get an idea of why it failed. You can access AWS Batch step logs in the AWS Step Functions UI by looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobId")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," blob that can be accessed by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception")," pane on the right side of the UI. You can use this ",(0,i.kt)("inlineCode",{parentName:"p"},"JobId")," in the AWS Batch console to check the job logs. This ",(0,i.kt)("inlineCode",{parentName:"p"},"JobId")," is also the metaflow task ID for the step."),(0,i.kt)("p",null,"Next, we want to reproduce the above error locally. We do this by resuming the specific AWS Step Functions run that failed:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'   ...\n   step(step="end",\n        ...)\n   run(resume=TRUE,\n       origin_run_id="sfn-5ca85f96-8508-409d-a5f5-b567db1040c5")\n')))),(0,i.kt)("p",null,"This will reuse the results of the ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," step from the AWS Step Functions run. It will try to rerun the step ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," locally, which fails with the same error as it does in production."),(0,i.kt)("p",null,"You can fix the error locally as above. In the case of this simple flow, you can run the whole flow locally to confirm that the fix works. After validating the results, you would deploy a new version to production with ",(0,i.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,i.kt)("p",null,"However, this might not be a feasible approach for complex production flow. For instance, the flow might process large amounts of data that can not be handled in your local instance. We have better approaches for staging flows for production:"),(0,i.kt)("h3",{id:"staging-flows-for-production"},"Staging flows for production"),(0,i.kt)("p",null,"The easiest approach to test a demanding flow is to run it with AWS Batch. This works even with resume:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5 --with batch\n")),(0,i.kt)("p",null,"This will resume your flow and run every step on AWS Batch. When you are ready to test a fixed flow end-to-end, just run it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript debug.R run --with batch\n")),(0,i.kt)("p",null,"Alternatively, you can change the name of the flow temporarily, e.g. from DebugFlow to DebugFlowStaging. Then you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"step-functions create")," with the new name, which will create a separate staging flow on AWS Step Functions."),(0,i.kt)("p",null,"You can test the staging flow freely without interfering with the production flow. Once the staging flow runs successfully, you can confidently deploy a new version to production."),(0,i.kt)("h2",{id:"inspecting-data-with-rstudio-ide-or-jupyter-notebook"},"Inspecting data with RStudio IDE or Jupyter Notebook"),(0,i.kt)("p",null,"The above example demonstrates a trivial error. In the real life, errors can be much trickier to debug. In the case of machine learning, a flow may fail because of an unexpected distribution of input data, although nothing is wrong with the code per se."),(0,i.kt)("p",null,"Being able to inspect data produced by every step is a powerful feature of Metaflow which can help in situations like this."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus/docs/r/metaflow/client"},"Metaflow client")," in an RStudio IDE or a Jupyter Notebook to fetch artifacts produced each step, and run sanity checks or further debug the issue."))}m.isMDXComponent=!0},7343:function(e,t,n){t.Z=n.p+"assets/images/image1-accbb36a62286f898ffc47fe5c0ea1f3.png"},4798:function(e,t,n){t.Z=n.p+"assets/images/image3_(1)-0fa449301236d6773f122388d74743a0.png"}}]);