"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8781],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(7294),r=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,h=e.groupId,f=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(w,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=m[0])?void 0:r.props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),b=k.tabGroupChoices,v=k.setTabGroupChoices,S=(0,a.useState)(y),N=S[0],T=S[1],x=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var F=b[h];null!=F&&F!==N&&w.some((function(e){return e.value===F}))&&T(F)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),o=w[n].value;o!==N&&(A(t),T(o),null!=h&&v(h,o))},W=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=x.indexOf(e.currentTarget)+1;n=x[o]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},w.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:W,onFocus:I,onClick:I},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,r.Z)();return a.createElement(u,(0,o.Z)({key:String(t)},e))}},5867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={},c="Scheduling Metaflow Flows",p={unversionedId:"r/going-to-production-with-metaflow/scheduling-metaflow-flows",id:"r/going-to-production-with-metaflow/scheduling-metaflow-flows",title:"Scheduling Metaflow Flows",description:"A key feature of Metaflow is to make it easy to take machine learning pipelines from prototyping to production. This sentence and a number of other Metaflow documents use the word production casually. What do we actually mean by it?",source:"@site/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows.md",sourceDirName:"r/going-to-production-with-metaflow",slug:"/r/going-to-production-with-metaflow/scheduling-metaflow-flows",permalink:"/docusaurus/docs/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Organizing Results",permalink:"/docusaurus/docs/docs/r/metaflow/tagging"}},d=[{value:"Why AWS Step Functions?",id:"why-aws-step-functions",children:[],level:2},{value:"Pushing a flow to production",id:"pushing-a-flow-to-production",children:[{value:"Limiting the number of concurrent tasks",id:"limiting-the-number-of-concurrent-tasks",children:[],level:3}],level:2},{value:"Scheduling a flow",id:"scheduling-a-flow",children:[],level:2}],h={toc:d};function f(e){var t=e.components,u=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduling-metaflow-flows"},"Scheduling Metaflow Flows"),(0,r.kt)("p",null,"A key feature of Metaflow is to make it easy to take machine learning pipelines from prototyping to production. This sentence and a number of other Metaflow documents use the word production casually. What do we actually mean by it?"),(0,r.kt)("p",null,"For Machine Learning Infrastructure, production has a simple and unexciting meaning: In production, the flow should run without any human intervention. If your flow produced valid results during development, we want it to produce equally valid results in production - just without anyone managing it manually."),(0,r.kt)("p",null,"Eventually, something will fail in production, and human intervention is needed. In these cases, we want to minimize the amount of human intervention and the time spent on debugging."),(0,r.kt)("p",null,"If your flow is built with Metaflow best practices, making it run automatically in production should not be a big deal."),(0,r.kt)("p",null,"By this definition, you can not run your flow with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript helloworld.R run\n")),(0,r.kt)("p",null,"in production as it requires someone to type the command manually. A classic solution is to have cron or another similar time-based scheduler to run the command automatically at a set schedule."),(0,r.kt)("p",null,"It is not easy to use cron as a production scheduler. What if the instance running cron fails? If the scheduled command fails, how do I know it has failed? How do you see its error logs? Does my cron instance have enough capacity to handle another command? And most importantly, how do I orchestrate schedules of multiple commands so that their mutual dependencies are handled correctly?"),(0,r.kt)("h2",{id:"why-aws-step-functions"},"Why AWS Step Functions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"AWS Step Functions")," is a general-purpose workflow orchestrator that can answer these questions. If you are curious, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},"read AWS Step Functions documentation to learn all about it"),". If you just want to get your flow in production, this document contains everything you need to know."),(0,r.kt)("p",null,"In the Metaflow's point of view, the main benefits of AWS Step Functions are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS Step Functions orchestrates workflows expressed as state machines, which are a superset of directed graphs. This means that we can map Metaflow flows to corresponding AWS Step Functions state machines fully automatically. This gives you much more detail about what gets executed and how, in contrast to treating Metaflow scripts as black boxes."),(0,r.kt)("li",{parentName:"ul"},"AWS Step Functions comes with tooling that is required for running workflows in production. You can benefit from battle-hardened solutions provided by AWS for alerting, monitoring, and scheduling. By using AWS Step Functions your Metaflow flows can integrate seamlessly with the wider AWS offerings.")),(0,r.kt)("p",null,"When running on AWS Step Functions, Metaflow code works exactly as it does locally: No changes are required in the code. All data artifacts produced by steps run on AWS Step Functions are available using the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/client"},"Client API"),". All tasks are run on AWS Batch respecting the resources decorator, as explained in ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/scaling"},"Scaling Out and Up"),"."),(0,r.kt)("p",null,"This document describes the basics of AWS Step Functions scheduling. If your project involves multiple people, multiple workflows, or it is becoming business-critical, we will soon introduce a new feature around coordinating larger Metaflow projects."),(0,r.kt)("h2",{id:"pushing-a-flow-to-production"},"Pushing a flow to production"),(0,r.kt)("p",null,"Let's use ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/basics#how-to-define-parameters-for-flows"},"the flow from the section about parameters")," as an example:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"R",value:"R",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'library(metaflow)\n\nstart <- function(self){\n    print(paste("alpha is", self$alpha))\n}\n\nend <- function(self){\n    print(paste("alpha still is", self$alpha))\n}\n\nmetaflow("ParameterFlow") %>%\n    parameter("alpha",\n              help="learning rate",\n              default = 0.1) %>%\n    step(step="start",\n         r_function=start,\n         next_step="end") %>%\n    step(step="end",\n         r_function=end) %>%\n    run()\n'))),(0,r.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'...\n   step(step="end",\n         r_function=end) %>%\n   run(step_functions = "create")\n')))),(0,r.kt)("p",null,"Save this script to a file ",(0,r.kt)("inlineCode",{parentName:"p"},"parameter_flow.R"),". To deploy a version to AWS Step Functions, simply source the ",(0,r.kt)("inlineCode",{parentName:"p"},"RStudio")," version of the code or in a terminal run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript parameter_flow.R --with retry step-functions create\n")),(0,r.kt)("p",null,"This command takes a snapshot of your code in the working directory, as well as the version of Metaflow used, and exports the whole package to AWS Step Functions for scheduling."),(0,r.kt)("p",null,"It is highly recommended that you ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/failures#retrying-tasks-with-the-retry-decorator"},"enable retries")," when deploying to AWS Step Functions, which you can do easily with --with retry as shown above. However, make sure that all your steps are safe to retry before you do this. If some of your steps interact with external services in ways that can't tolerate automatic retries, decorate them with retry with times set to zero ","(","times=0",")"," as described in ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/failures#how-to-prevent-retries"},"How to Prevent Retries"),"."),(0,r.kt)("p",null,"The command will export your workflow to AWS Step Functions. You can also search for the flow by name within the AWS Step Functions UI. You should see a visualization of the exported flow, like here:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1220).Z,width:"1999",height:"1090"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7153).Z,width:"1999",height:"172"})),(0,r.kt)("p",null,"You can click the orange Start Execution button to execute the flow on AWS Step Functions. It pops up a dialog asking for an input. You can specify your parameters as an escaped JSON string with Parameters as the key - ",(0,r.kt)("em",{parentName:"p"},"*","*")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "Parameters" : "{\\"alpha\\": 0.5}"\n}\n')),(0,r.kt)("p",null,"Metaflow automatically maps Parameters of your flow to corresponding parameters on AWS Step Functions."),(0,r.kt)("p",null,"After you click Start Execution on the Input dialog, AWS Step Functions starts running the flow:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6693).Z,width:"1999",height:"931"})),(0,r.kt)("p",null,"In this case, the run should succeed without problems. If there were errors, you could reproduce them locally as explained in ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/debugging"},"Debugging with Metaflow"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can trigger the workflow through command line as well:")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Bash",value:"Bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript parameter_flow.R step-functions trigger --alpha 0.5\n"))),(0,r.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'...\n   step(step="end",\n         r_function=end) %>%\n   run(step-functions="trigger",\n       alpha=0.5)\n')))),(0,r.kt)("p",null,"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," again, it will create a new version of your flow on AWS Step Functions. The newest version becomes the production version automatically ","(","due to the consistency guarantees provided by AWS Step Functions, it might be a couple of seconds before this happens",")",". If you want to test on AWS Step Functions without interfering with a production flow, you can change the name of your class, e.g. from ParameterFlow to ParameterFlowStaging, and ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create")," the flow under a new name."),(0,r.kt)("p",null,"Note that step-functions create creates a new isolated ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/tagging#tags-as-namespaces"},"production namespace")," for your production flow. Please read ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/tagging"},"Organizing Results")," to learn all about namespace behavior."),(0,r.kt)("h3",{id:"limiting-the-number-of-concurrent-tasks"},"Limiting the number of concurrent tasks"),(0,r.kt)("p",null,"By default, Metaflow configures AWS Step Functions to execute at most 100 tasks concurrently within a foreach step. This should ensure that most workflows finish quickly without overwhelming your AWS Batch queue, the execution backend."),(0,r.kt)("p",null,"If your workflow includes a large foreach and you need results faster, you can increase the default with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers")," option. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"step-functions create --max-workers 500")," allows 500 tasks to be executed concurrently for every foreach step."),(0,r.kt)("p",null,"This option is similar to ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/docs/r/metaflow/scaling#safeguard-flags"},(0,r.kt)("inlineCode",{parentName:"a"},"run --max-workers"))," that is used to limit concurrency outside AWS Step Functions."),(0,r.kt)("h2",{id:"scheduling-a-flow"},"Scheduling a flow"),(0,r.kt)("p",null,"By default, a flow on AWS Step Functions does not run automatically. You need to set up a trigger to launch the flow when an event occurs."),(0,r.kt)("p",null,"Metaflow provides built-in support for triggering Metaflow flows through time-based ","(","cron",")"," triggers. Use a time-based trigger if you want to trigger the workflow at a certain time."),(0,r.kt)("p",null,"Time-based triggers are implemented at the FlowSpec-level using the ",(0,r.kt)("inlineCode",{parentName:"p"},"schedule")," decorator. This flow is triggered hourly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'library(metaflow)\n\nstart <- function(self){\n    print(Sys.time())\n}\n\nend <- function(self){\n    print("Scheduled successfully")\n}\n\nmetaflow("ScheduledFlow",\n    decorator("schedule", hourly=TRUE)) %>%\n    step(step="start",\n         r_function=start,\n         next_step="end") %>%\n    step(step="end",\n         r_function=end) %>%\n    run()\n')),(0,r.kt)("p",null,"You can define the schedule with ",(0,r.kt)("inlineCode",{parentName:"p"},"decorator")," in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'decorator("schedule", weekly=True)')," runs the workflow on Sundays at midnight."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'decorator("schedule", daily=True)')," runs the workflow every day at midnight."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'decorator("schedule", hourly=True)')," runs the workflow every hour."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decorator(\"schedule\", cron='0 10 * * ? *')")," runs the workflow at the given ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/cron"},"Cron")," schedule, in this case at 10am UTC every day. You can use the rules defined ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html"},"here")," to define the schedule for the cron option.")))}f.isMDXComponent=!0},1220:function(e,t,n){t.Z=n.p+"assets/images/image2-bfe069afec6d8baa6f2df66eca8b1e33.png"},7153:function(e,t,n){t.Z=n.p+"assets/images/image5-c0529acd1bc60a0e294d98d68e0dd33b.png"},6693:function(e,t,n){t.Z=n.p+"assets/images/image6-6752bb3387ee674b969de12be8053326.png"}}]);