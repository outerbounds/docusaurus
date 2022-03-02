"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8622],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6549:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s="Scaling Out and Up",u={unversionedId:"python/metaflow/scaling",id:"python/metaflow/scaling",title:"Scaling Out and Up",description:"From a usability point of view, it is hard to beat the convenience of writing and running a straightforward script in the comfort of your favorite IDE and a local terminal. Since one of the core values of Metaflow is usability, we encourage you to start with this easy approach and not worry about scalability until it becomes an issue.",source:"@site/docs/python/metaflow/scaling.md",sourceDirName:"python/metaflow",slug:"/python/metaflow/scaling",permalink:"/docusaurus/docs/python/metaflow/scaling",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/python/metaflow/scaling.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Debugging with Metaflow",permalink:"/docusaurus/docs/python/metaflow/debugging"},next:{title:"Loading and Storing Data",permalink:"/docusaurus/docs/python/metaflow/data"}},p=[{value:"Requesting resources with <code>resources</code> decorator",id:"requesting-resources-with-resources-decorator",children:[],level:2},{value:"Using AWS Batch",id:"using-aws-batch",children:[{value:"Using AWS Batch selectively with <code>@batch</code> decorator",id:"using-aws-batch-selectively-with-batch-decorator",children:[],level:3},{value:"Parallelization over multiple cores\xb6",id:"parallelization-over-multiple-cores",children:[],level:3},{value:"AWS Batch tips and tricks",id:"aws-batch-tips-and-tricks",children:[{value:"<strong>What value of <code>@timeout</code> should I set?</strong>",id:"what-value-of-timeout-should-i-set",children:[],level:4},{value:"<strong>How much <code>@resources</code> can I request?</strong>",id:"how-much-resources-can-i-request",children:[],level:4},{value:"My job is stuck in <code>RUNNABLE</code> state. What do I do?",id:"my-job-is-stuck-in-runnable-state-what-do-i-do",children:[],level:4},{value:"<strong>Listing and killing AWS Batch tasks</strong>",id:"listing-and-killing-aws-batch-tasks",children:[],level:4},{value:"<strong>Safeguard flags</strong>",id:"safeguard-flags",children:[],level:4},{value:"<strong>Accessing AWS Batch logs</strong>",id:"accessing-aws-batch-logs",children:[],level:4}],level:3}],level:2},{value:"Big Data",id:"big-data",children:[{value:"Disk space",id:"disk-space",children:[],level:3},{value:"Large data artifacts",id:"large-data-artifacts",children:[],level:3}],level:2}],c={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scaling-out-and-up"},"Scaling Out and Up"),(0,r.kt)("p",null,"From a usability point of view, it is hard to beat the convenience of writing and running a straightforward script in the comfort of your favorite IDE and a local terminal. Since one of the core values of Metaflow is usability, we encourage you to start with this easy approach and not worry about scalability until it becomes an issue."),(0,r.kt)("p",null,"Instead of providing magical abstractions or a new paradigm for scalability, Metaflow provides a set of easy-to-use tools that help you to make your code scalable depending on your specific needs."),(0,r.kt)("p",null,"The scalability tools fall into three categories:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance Optimization"),": You can improve performance of your code by utilizing off-the-shelf, high-performance libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dmlc/xgboost"},"XGboost")," or ",(0,r.kt)("a",{parentName:"p",href:"https://tensorflow.org"},"Tensorflow"),". Sometimes, it is appropriate to implement a custom algorithm in a high-performance language such as C++ which can be called from your Metaflow steps. Or, as a happy medium between low-performance but productive Python and a fast but tedious C++, you may be able to use a compiler such as ",(0,r.kt)("a",{parentName:"p",href:"https://numba.pydata.org"},"Numba")," to speed up your code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scaling Up"),": One should not underestimate the horsepower of modern large server type machine. It is sometimes worth considering running on a larger machine prior to trying anything else."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scaling Out"),": Metaflow also integrates with Batch from AWS allowing you to parallelize your steps over an arbitrarily large number of Batch jobs, giving you access to virtually unlimited amount of computing power."),(0,r.kt)("p",null,"It is hard to be prescriptive about which of the three categories is most suitable for your problem. Often, the answer is a combination of the three. In general, start with the approach that is the easiest to implement and keep iterating until the performance is satisfactory."),(0,r.kt)("p",null,"This section focuses specifically on using Batch to scale up and out: you can use Batch to request a larger instance to run your step as well as use it to parallelize your steps over multiple instances. This section requires you to have Metaflow working with AWS. See the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/"},"AWS section")," for more information on either setting up Metaflow in your ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/deploy-to-aws"},"own AWS environment")," or using the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/metaflow-sandbox"},"provided sandbox"),"."),(0,r.kt)("p",null,"This section presents the tools available in Metaflow for scaling up and out."),(0,r.kt)("h2",{id:"requesting-resources-with-resources-decorator"},"Requesting resources with ",(0,r.kt)("inlineCode",{parentName:"h2"},"resources")," decorator"),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, resources\n\nclass BigSum(FlowSpec):\n\n    @resources(memory=60000, cpu=1)\n    @step\n    def start(self):\n        import numpy\n        import time\n        big_matrix = numpy.random.ranf((80000, 80000))\n        t = time.time()\n        self.sum = numpy.sum(big_matrix)\n        self.took = time.time() - t\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print("The sum is %f." % self.sum)\n        print("Computing it took %dms." % (self.took * 1000))\n\nif __name__ == \'__main__\':\n    BigSum()\n')),(0,r.kt)("p",null,"This example creates a huge 80000x80000 random matrix, ",(0,r.kt)("inlineCode",{parentName:"p"},"big_matrix"),". The matrix requires about 80000^2 ","*"," 8 bytes = 48GB of memory. "),(0,r.kt)("p",null,"If you attempt to run this on your local machine, it is likely that the following will happen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ python BigSum.py run\n\n2019-11-29 02:43:39.689 [5/start/21975 (pid 83812)] File "BugSum.py", line 11, in start\n2018-11-29 02:43:39.689 [5/start/21975 (pid 83812)] big_matrix = numpy.random.ranf((80000, 80000))\n2018-11-29 02:43:39.689 [5/start/21975 (pid 83812)] File "mtrand.pyx", line 856, in mtrand.RandomState.random_sample\n2018-11-29 02:43:39.689 [5/start/21975 (pid 83812)] File "mtrand.pyx", line 167, in mtrand.cont0_array\n2018-11-29 02:43:39.689 [5/start/21975 (pid 83812)] MemoryError\n2018-11-29 02:43:39.689 [5/start/21975 (pid 83812)]\n2018-11-29 02:43:39.844 [5/start/21975 (pid 83812)] Task failed.\n2018-11-29 02:43:39.844 Workflow failed.\n    Step failure:\n    Step start (task-id 21975) failed.\n')),(0,r.kt)("p",null,"This fails quickly due to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryError")," on most laptops as we are unable to allocate 48GB of memory. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator suggests resource requirements for a step. The ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," argument specifies the amount of RAM in megabytes and ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," the number of CPU cores requested. It does not produce the resources magically, which is why the run above failed."),(0,r.kt)("h2",{id:"using-aws-batch"},"Using AWS Batch"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator gains all its power in collaboration with Batch execution. Note that for this section, you will need to have Metaflow working in an AWS cloud environment ","(","either having ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/deploy-to-aws"},"deployed it yourself")," or running in the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/metaflow-sandbox"},"Metaflow sandbox"),")"),(0,r.kt)("p",null,"With the following command, you instruct Metaflow to run all your steps on AWS Batch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python BigSum.py run --with batch\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--with batch")," option instructs Metaflow to run all tasks as separate AWS Batch jobs, instead of using a local process for each task. It has the same effect as adding ",(0,r.kt)("inlineCode",{parentName:"p"},"@batch")," decorator to all steps in the code."),(0,r.kt)("p",null,"This time the run should succeed thanks to the large enough instance. Note that in this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator is used as a prescription for the size of the box that Batch should run the job on; please be sure that this resource requirement can be met. See ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow/scaling#my-job-is-stuck-in-runnable-state-what-do-i-do"},"here")," on what can happen if this is not the case."),(0,r.kt)("p",null,"You should see an output like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The sum is 3200003911.795288.\nComputing it took 4497ms.\n")),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"gpu=N")," to request N GPUs for the instance."),(0,r.kt)("h3",{id:"using-aws-batch-selectively-with-batch-decorator"},"Using AWS Batch selectively with ",(0,r.kt)("inlineCode",{parentName:"h3"},"@batch")," decorator"),(0,r.kt)("p",null,"A close relative of the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator is ",(0,r.kt)("inlineCode",{parentName:"p"},"batch"),". It takes exactly the same keyword arguments as ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," but instead of being a mere suggestion, it forces the step to be run on AWS Batch."),(0,r.kt)("p",null,"The main benefit of ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," is that you can selectively run some steps locally and some on AWS Batch. In the example above, try replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," and run it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python BigSum.py run\n")),(0,r.kt)("p",null,"You will see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," step gets executed on a large AWS Batch instance but the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," step, which does not need special resources, is executed locally without the additional latency of launching a AWS Batch job. Executing a ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow/basics#foreach"},(0,r.kt)("inlineCode",{parentName:"a"},"foreach"))," step launches parallel AWS Batch jobs with the specified resources for the step."),(0,r.kt)("h3",{id:"parallelization-over-multiple-cores"},"Parallelization over multiple cores",(0,r.kt)("a",{parentName:"h3",href:"http://manuals.test.netflix.net/view/mli/mkdocs/master/scaling/#parallelization-over-multiple-cores"},"\xb6")),(0,r.kt)("p",null,"When running locally, branches in your flow are executed in parallel as separate processes which the operating system can allocate to separate CPU cores. This means that your flow can utilize multiple cores without you having to do anything special besides defining branches in the flow."),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"--with batch"),", branches are mapped to separate AWS Batch jobs that are executed in parallel. All this makes sense for basic use cases. What if you want to utilize multiple cores on an AWS Batch instance?"),(0,r.kt)("p",null,"Metaflow provides a utility function called ",(0,r.kt)("inlineCode",{parentName:"p"},"parallel_map")," as an answer. This function is almost equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pool().map")," in the Python's built-in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/2/library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.map"},"multiprocessing")," library. The main differences are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parallel_map")," supports lambdas and any other callables of Python."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parallel_map")," does not suffer from bugs present in ",(0,r.kt)("inlineCode",{parentName:"li"},"multiprocessing"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parallel_map")," can handle larger amounts of data.")),(0,r.kt)("p",null,"Besides the AWS Batch use case, ",(0,r.kt)("inlineCode",{parentName:"p"},"parallel_map")," may be appropriate for simple operations that might be too cumbersome to implement as separate steps."),(0,r.kt)("p",null,"Here is an extension of our previous example that implements a multi-core ",(0,r.kt)("inlineCode",{parentName:"p"},"sum()")," by partitioning the matrix by row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, batch, parallel_map\n\nclass BigSum(FlowSpec):\n\n    @batch(memory=60000, cpu=8)\n    @step\n    def start(self):\n        import numpy\n        import time\n        big_matrix = numpy.random.ranf((80000, 80000))\n        t = time.time()\n        parts = parallel_map(lambda i: big_matrix[i:i+10000].sum(),\n                             range(0, 80000, 10000))\n        self.sum = sum(parts)\n        self.took = time.time() - t\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print("The sum is %f." % self.sum)\n        print("Computing it took %dms." % (self.took * 1000))\n\nif __name__ == \'__main__\':\n    BigSum()\n')),(0,r.kt)("p",null,"Note that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu=8")," to request eight CPU cores from AWS Batch, so our ",(0,r.kt)("inlineCode",{parentName:"p"},"parallel_map")," can benefit from optimal parallelism."),(0,r.kt)("p",null,"Disappointingly, in this case the parallel ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," is not faster than the original simple implementation due to the overhead of launching separate processes in ",(0,r.kt)("inlineCode",{parentName:"p"},"parallel_map"),". A less trivial operation might see a much larger performance boost."),(0,r.kt)("h3",{id:"aws-batch-tips-and-tricks"},"AWS Batch tips and tricks"),(0,r.kt)("p",null,"Here are some useful tips and tricks related to running Metaflow on AWS Batch."),(0,r.kt)("h4",{id:"what-value-of-timeout-should-i-set"},(0,r.kt)("strong",{parentName:"h4"},"What value of ",(0,r.kt)("inlineCode",{parentName:"strong"},"@timeout")," should I set?")),(0,r.kt)("p",null,"Metaflow sets a default timeout of 5 days so that you tasks don't get stuck infinitely while running on AWS Batch. For more details on how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@timeout")," please read ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow/failures#timing-out-with-timeout-decorator"},"this.")),(0,r.kt)("h4",{id:"how-much-resources-can-i-request"},(0,r.kt)("strong",{parentName:"h4"},"How much ",(0,r.kt)("inlineCode",{parentName:"strong"},"@resources")," can I request?")),(0,r.kt)("p",null,"Here are the current defaults for different resource types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cpu"),": 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory"),": 4000 ","(","4GB",")")),(0,r.kt)("p",null,"When setting ",(0,r.kt)("inlineCode",{parentName:"p"},"@resources"),", keep in mind the configuration of your AWS Batch Compute Environment. Your job will be stuck in a ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNABLE")," state if AWS is unable to provision the requested resources. Additionally, as a good measure, don't request more resources than what your workflow actually needs. On the other hand, never optimize resources prematurely."),(0,r.kt)("p",null,"You can place your AWS Batch task in a specific queue by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"queue")," argument. By default, all tasks execute on a vanilla ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/python/"},"python docker image")," corresponding to the version of Python interpreter used to launch the flow and can be overridden using the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," argument."),(0,r.kt)("p",null,"You can also specify the resource requirements on command line as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python BigSum.py run --with batch:cpu=4,memory=10000,queue=default,image=ubuntu:latest\n")),(0,r.kt)("h4",{id:"my-job-is-stuck-in-runnable-state-what-do-i-do"},"My job is stuck in ",(0,r.kt)("inlineCode",{parentName:"h4"},"RUNNABLE")," state. What do I do?"),(0,r.kt)("p",null,"Consult ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable"},"this article"),"."),(0,r.kt)("h4",{id:"listing-and-killing-aws-batch-tasks"},(0,r.kt)("strong",{parentName:"h4"},"Listing and killing AWS Batch tasks")),(0,r.kt)("p",null,"If you interrupt a Metaflow run, any AWS Batch tasks launched by the run get killed by Metaflow automatically. Even if something went wrong during the final cleanup, the tasks will finish and die eventually, at the latest when they hit the maximum time allowed for an AWS Batch task."),(0,r.kt)("p",null,"If you want to make sure you have no AWS Batch tasks running, or you want to manage them manually, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"batch kill")," commands. These commands are disabled in the ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow-on-aws/metaflow-sandbox"},"Metaflow AWS Sandbox"),"."),(0,r.kt)("p",null,"You can easily see what AWS Batch tasks were launched by your latest run with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch list\n")),(0,r.kt)("p",null,"You can kill the tasks started by the latest run with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch kill\n")),(0,r.kt)("p",null,"If you have started multiple runs, you can make sure there are no orphaned tasks still running with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch list --my-runs\n")),(0,r.kt)("p",null,"You can kill the tasks started by the latest run with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch kill --my-runs\n")),(0,r.kt)("p",null,"If you see multiple runs running, you can cherry-pick a specific job, e.g. 456, to be killed as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch kill --run-id 456\n")),(0,r.kt)("p",null,"If you are working with another person, you can see and kill their tasks related to this flow with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py batch kill --user willsmith\n")),(0,r.kt)("p",null,"Note that all the above commands only affect the flow defined in your script. You can work on many flows in parallel and be confident that ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," kills tasks only related to the flow you called ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," with. "),(0,r.kt)("h4",{id:"safeguard-flags"},(0,r.kt)("strong",{parentName:"h4"},"Safeguard flags")),(0,r.kt)("p",null,"It is almost too easy to launch AWS Batch jobs with Metaflow. Consider a foreach loop defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"self.params = range(1000)\nself.next(self.fanned_out, foreach='params')\n")),(0,r.kt)("p",null,"When run with ",(0,r.kt)("inlineCode",{parentName:"p"},"--with batch"),", this code would launch 1000 parallel Batch instances which may turn out to be quite expensive."),(0,r.kt)("p",null,"To safeguard against inadvertent launching of many parallel Batch jobs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," commands have a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-num-splits")," which fails the task if it attempts to launch more than 100 splits by default. Use the flag to increase the limit if you actually need more tasks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py run --max-num-splits 200\n")),(0,r.kt)("p",null,"Another flag, ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),", limits the number of tasks run in parallel. Even if a foreach launched 100 splits, ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers")," would make only 16 ","(","by default",")"," of them run in parallel at any point in time. If you want more parallelism, increase the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python myflow.py run --max-workers 32\n")),(0,r.kt)("h4",{id:"accessing-aws-batch-logs"},(0,r.kt)("strong",{parentName:"h4"},"Accessing AWS Batch logs")),(0,r.kt)("p",null,"As a convenience feature, you can also see the logs of any past step as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python bigsum.py logs 15/end\n")),(0,r.kt)("h2",{id:"big-data"},"Big Data"),(0,r.kt)("p",null,"The previous sections focused on CPU and memory-bound steps. Loading and processing big data is often an IO-bound operation, which requires a different approach."),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow/data"},"Loading and Storing Data")," for more details about how to build efficient data pipelines in Metaflow."),(0,r.kt)("h3",{id:"disk-space"},"Disk space"),(0,r.kt)("p",null,"You can request higher disk space on AWS Batch instances by using an unmanaged Compute Environment with a custom AMI."),(0,r.kt)("h3",{id:"large-data-artifacts"},"Large data artifacts"),(0,r.kt)("p",null,"Metaflow uses Python's default object serialization format, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pickle.html"},"Pickle"),", to persist data artifacts."),(0,r.kt)("p",null,"Unfortunately Python was not able to pickle objects larger than 2GB prior to Python 3.5. If you need to store large data artifacts, such as a large data frame, using a recent version of Python 3 is highly recommended."),(0,r.kt)("p",null,"In the rare cases where Metaflow's built-in serialization does not work for you, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docusaurus/docs/python/metaflow/data#data-outside-tables-metaflow-s3"},"Metaflow S3 client")," to persist arbitrary data in S3."))}h.isMDXComponent=!0}}]);