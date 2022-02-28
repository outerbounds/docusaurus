"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5060],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(f,l(l({ref:t},d),{},{components:a})):o.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7301:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),l=["components"],s={},i="Metaflow on AWS",c={unversionedId:"metaflow-on-aws/metaflow-on-aws",id:"metaflow-on-aws/metaflow-on-aws",title:"Metaflow on AWS",description:"Traditionally, there has been a tension between local \\(e.g. on a laptop\\) and remote \\(e.g. on a cluster or a cloud\\) development and execution: Developing on a laptop is fast, whereas iterating with a remote cluster is slower. A laptop is a severely resource-constrained environment whereas a cluster can have virtually unlimited resources. Worse, simple local scripts may need to be translated to a new paradigm that is understood by a cluster.",source:"@site/docs/metaflow-on-aws/metaflow-on-aws.md",sourceDirName:"metaflow-on-aws",slug:"/metaflow-on-aws/",permalink:"/docs/metaflow-on-aws/",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/metaflow-on-aws/metaflow-on-aws.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 8: Autopilot",permalink:"/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot"},next:{title:"Metaflow Sandbox",permalink:"/docs/metaflow-on-aws/metaflow-sandbox"}},d=[{value:"Amazon Web Services",id:"amazon-web-services",children:[{value:"<strong>Datastore</strong>",id:"datastore",children:[],level:3},{value:"Compute",id:"compute",children:[],level:3},{value:"Metadata",id:"metadata",children:[],level:3},{value:"Notebooks",id:"notebooks",children:[],level:3},{value:"Scheduling",id:"scheduling",children:[],level:3}],level:2},{value:"Using Metaflow with AWS",id:"using-metaflow-with-aws",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metaflow-on-aws"},"Metaflow on AWS"),(0,r.kt)("p",null,"Traditionally, there has been a tension between local ","(","e.g. on a laptop",")"," and remote ","(","e.g. on a cluster or a cloud",")"," development and execution: Developing on a laptop is fast, whereas iterating with a remote cluster is slower. A laptop is a severely resource-constrained environment whereas a cluster can have virtually unlimited resources. Worse, simple local scripts may need to be translated to a new paradigm that is understood by a cluster."),(0,r.kt)("p",null,"Metaflow tries to combine the best of both worlds. Most importantly, we support the same idiomatic Python scripts both locally and remotely. No changes in code or libraries needed. However, Metaflow doesn't try to abstract away the fact that code is executed remotely. We believe that this is crucial in making troubleshooting easier."),(0,r.kt)("p",null,"Metaflow makes it easy to move back and forth between the local and remote modes of execution. You can even use a hybrid of the two approaches in a single workflow. This means that you can develop and test your Metaflow code similarly to any local Python script - simply and easily. When you need to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaflow.org/metaflow/scaling"},"process larger amounts of data"),", or you want to deploy your workflow to production, you can do it with a single line of code or a single command."),(0,r.kt)("p",null,"When you set up a cloud-based object store as the datastore, Metaflow snapshots all data and code in the cloud automatically. This means that you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaflow.org/metaflow/client"},"inspect"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaflow.org/metaflow/debugging#how-to-use-the-resume-command"},"resume"),", and restore any previous Metaflow execution without having to worry that the fruits of your hard work get lost."),(0,r.kt)("h2",{id:"amazon-web-services"},"Amazon Web Services"),(0,r.kt)("p",null,"While technically Metaflow could work with any cloud provider, currently Metaflow supports only ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com"},"Amazon Web Services")," as the remote backend, thanks to Netflix's decade-long experience with AWS."),(0,r.kt)("p",null,"The following table summarizes the integration between Metaflow and AWS:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Local"),(0,r.kt)("th",{parentName:"tr",align:"left"},"AWS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Datastore")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Local Directory"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/s3/"},"Amazon S3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Compute")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Local Process"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/batch/"},"AWS Batch"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Local Directory"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/fargate/"},"AWS Fargate")," + ",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/rds"},"Amazon RDS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Notebooks")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Local Notebook"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/sagemaker/"},"Amazon Sagemaker Notebooks"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Scheduling")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/step-functions/"},"AWS Step Functions")," + ",(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/eventbridge/"},"Amazon EventBridge"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Large-scale ML")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/sagemaker/"},"Sagemaker Models"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Hosting")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"*")))),(0,r.kt)("p",null,"(","*",")"," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaflow.org/introduction/roadmap"},"available later")),(0,r.kt)("h3",{id:"datastore"},(0,r.kt)("strong",{parentName:"h3"},"Datastore")),(0,r.kt)("p",null,"Datastore is a centralized data repository for all the data that's leveraged by and generated by Metaflow flows. In the local mode, all data artifacts are stored in a local directory. Metaflow integrates with Amazon S3 for cloud-scale storage so that you can process and persist larger amounts of data easily."),(0,r.kt)("h3",{id:"compute"},"Compute"),(0,r.kt)("p",null,"Metaflow executes all steps in the flow as a separate local process in local mode. To run larger workloads which require resources that might not be available on a laptop ","(","think GPUs or 100s of GBs of RAM",")",", Metaflow integrates with AWS Batch to seamlessly run every step of the flow as a ","(","or many",")"," separate AWS Batch job","(","s",")","."),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Metaflow ships with a light-weight ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow-service"},"metaflow service")," that provides a centralized place to keep track of all flow executions. This metadata service is not strictly needed. Metaflow will use a local directory to keep track of all executions from your laptop, even if you are using Amazon S3 as datastore or AWS Batch for ",(0,r.kt)("a",{parentName:"p",href:"#compute"},"compute"),". You can use a local Jupyter notebook to interact with data artifacts from all your previous executions as well as currently running ones. However, deploying the metaflow service ","(","as well as Amazon S3 as datastore",")"," is helpful if you would like to share results with your peers and track your work without fear of losing any state."),(0,r.kt)("p",null,"At Netflix, all executions are logged in the metaflow service and all data artifacts are stored in Amazon S3, so that any data scientist can interface with anybody's work via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metaflow.org/metaflow/client"},"client")," and collaborate fruitfully. Also, a centralized metaflow service along with a data store like Amazon S3 makes it easy for data scientists at Netflix to use hosted notebooks to easily set-up dashboards to monitors their flows."),(0,r.kt)("h3",{id:"notebooks"},"Notebooks"),(0,r.kt)("p",null,"We are a ",(0,r.kt)("a",{parentName:"p",href:"https://netflixtechblog.com/notebook-innovation-591ee3221233"},"big fan of Notebooks")," at Netflix. With Metaflow, users can easily create custom dashboards to monitor the execution of their Metaflow flows and track how their models are behaving in a very seamless manner. They can do that on their laptops with a local notebook or in the cloud with a hosted notebook solution. One such hosted solution is ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/sagemaker/"},"Sagemaker Notebooks")," by AWS. For notebooks hosted in the cloud, you would want to ensure that you have configured the ",(0,r.kt)("a",{parentName:"p",href:"#metadata"},"metaflow service")," and are using Amazon S3 for ",(0,r.kt)("a",{parentName:"p",href:"#datastore"},"datastore"),"."),(0,r.kt)("h3",{id:"scheduling"},"Scheduling"),(0,r.kt)("p",null,"With Metaflow, users can create, prototype and execute flows from their laptops that can scale easily by leveraging elastic storage and compute capabilities in the cloud. Often, there comes a time, when these flows need to be run autonomously without any user intervention. At that point, Metaflow makes it easy to move the flow execution from Metaflow to AWS Step Functions to leverage all the feature sets that you get from a production grade scheduler - high availability, monitoring, reliability, etc. In addition, with AWS EventBridge, users can set triggers to execute these flows on a schedule automatically."),(0,r.kt)("h2",{id:"using-metaflow-with-aws"},"Using Metaflow with AWS"),(0,r.kt)("p",null,"When you ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install metaflow"),"for the first time, you start in the local mode. Artifacts and metadata are stored in a local directory and computation is performed with local processes. This mode is perfectly fine for personal use but if your use case involves more people and/or data, we recommend that you configure Metaflow to use AWS."),(0,r.kt)("p",null,"Even after Metaflow has been configured to use AWS, users can still choose to use local tools, e.g. for rapid prototyping. The easy back-and-forth between local and remote is a key value proposition of Metaflow. However, we recommend that you enable ",(0,r.kt)("strong",{parentName:"p"},"metadata")," and ",(0,r.kt)("strong",{parentName:"p"},"datastore")," to use AWS by default, which makes sure that all data stays persistent and everyone in the organization can benefit from the results of workflows."),(0,r.kt)("p",null,"Netflix uses this setup internally. To make the experience smoother, Netflix's data scientists are provided with a ","(","shared",")"," EC2 instance where they can develop and test Metaflow code with minimal latency between their development environment and S3. Note that many IDEs such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/pycharm/"},"PyCharm")," support execution on a remote instance natively."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"If your organization doesn't have an AWS account already, we provide a hosted sandbox environment where you can test Metaflow using your own code and data, to get a feel of the benefits of AWS. Read more in the section about ",(0,r.kt)("a",{parentName:"p",href:"/docs/metaflow-on-aws/metaflow-sandbox"},"Metaflow Sandbox"),"."),(0,r.kt)("p",null,"If your organization has an AWS account already, see our ",(0,r.kt)("a",{parentName:"p",href:"https://admin-docs.metaflow.org/metaflow-on-aws/deployment-guide"},"deployment guide")," for detailed instructions on how to configure your account for Metaflow."),(0,r.kt)("p",null,"If you are already using Metaflow in your AWS account, and want to get started with how to manage various AWS resources, take a look at our ",(0,r.kt)("a",{parentName:"p",href:"https://admin-docs.metaflow.org/metaflow-on-aws/operations-guide"},"operations guide"),"."))}u.isMDXComponent=!0}}]);