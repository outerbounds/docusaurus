"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5411],{1077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(2004),r=["components"],s={},u="Debugging with Metaflow",p={unversionedId:"metaflow/debugging",id:"metaflow/debugging",title:"Debugging with Metaflow",description:"Metaflow wants to make debugging failed flows as painless as possible.",source:"@site/docs/metaflow/debugging.md",sourceDirName:"metaflow",slug:"/metaflow/debugging",permalink:"/docs/metaflow/debugging",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/metaflow/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loading and Storing Data",permalink:"/docs/metaflow/data"},next:{title:"Managing External Libraries",permalink:"/docs/metaflow/dependencies"}},d=[{value:"How to debug failed flows",id:"how-to-debug-failed-flows",children:[{value:"How to use the <code>resume</code> command",id:"how-to-use-the-resume-command",children:[{value:"Resuming from an arbitrary step",id:"resuming-from-an-arbitrary-step",children:[],level:4},{value:"Resume and parameters",id:"resume-and-parameters",children:[],level:4}],level:3}],level:2},{value:"<strong>Reproducing production issues locally</strong>",id:"reproducing-production-issues-locally",children:[{value:"<strong>Staging flows for production</strong>",id:"staging-flows-for-production",children:[],level:3}],level:2},{value:"Inspecting data with a notebook",id:"inspecting-data-with-a-notebook",children:[],level:2},{value:"Debugging your Flow code using an IDE",id:"debugging-your-flow-code-using-an-ide",children:[{value:"Debugging with PyCharm",id:"debugging-with-pycharm",children:[],level:3},{value:"Debugging with VSCode",id:"debugging-with-vscode",children:[],level:3},{value:"Combining debugging with resume",id:"combining-debugging-with-resume",children:[],level:3},{value:"Compatibility with Conda decorator",id:"compatibility-with-conda-decorator",children:[],level:3}],level:2}],h={toc:d};function c(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-with-metaflow"},"Debugging with Metaflow"),(0,o.kt)("p",null,"Metaflow wants to make debugging failed flows as painless as possible."),(0,o.kt)("p",null,"Debugging issues during development is a normal part of the development process. You should be able to develop and debug your Metaflow scripts similar to how you develop any Python scripts locally."),(0,o.kt)("p",null,"Debugging a failure can either happen ",(0,o.kt)("strong",{parentName:"p"},"after")," a failed execution or ",(0,o.kt)("strong",{parentName:"p"},"during")," execution. In the first case, Metaflow provides two mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"debugging#how-to-debug-failed-flows"},"ability to resume a flow"),", re-executing all successful steps and only re-executing from the failed step. This allows you to fix the problem in the failed step, resume the flow and make progress."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"debugging#inspecting-data-with-a-notebook"},"ability to inspect the data")," produced by each step in a flow to be able to determine what went wrong.")),(0,o.kt)("p",null,"In the second case, Metaflow is also compatible (at least when executing locally) with ",(0,o.kt)("a",{parentName:"p",href:"debugging#debugging-your-flow-code"},"debuggers")," which allow you to set breakpoints inside your step code. You will then be able to inspect and modify state and step through your code line-by-line to determine where the problem is."),(0,o.kt)("h2",{id:"how-to-debug-failed-flows"},"How to debug failed flows"),(0,o.kt)("p",null,"The process of debugging failed flows is similar both for development-time and production-time issues:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the step that failed. The failed step is reported as the last line of the error report where it is easy to spot."),(0,o.kt)("li",{parentName:"ol"},"Identify the run id of the failed run. On the console output, each line is prefixed with an identifier like ",(0,o.kt)("inlineCode",{parentName:"li"},"2/start/21426"),". Here, ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," is the run id, ",(0,o.kt)("inlineCode",{parentName:"li"},"start")," is the step name, and ",(0,o.kt)("inlineCode",{parentName:"li"},"21426")," is the task id."),(0,o.kt)("li",{parentName:"ol"},"Reproduce the failed run with ",(0,o.kt)("inlineCode",{parentName:"li"},"resume")," as ",(0,o.kt)("a",{parentName:"li",href:"debugging#how-to-use-the-resume-command"},"described below"),". Confirm that the error message you get locally matches to the original error message."),(0,o.kt)("li",{parentName:"ol"},"Identify the failed logic inside the failed step. You can do this by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"print")," statements in the step until ",(0,o.kt)("inlineCode",{parentName:"li"},"resume")," reveals enough information. Alternatively, you can reproduce the faulty logic in a notebook using input data artifacts for the step, as described below in the section about ",(0,o.kt)("a",{parentName:"li",href:"debugging#inspecting-data-with-a-notebook"},"notebooks"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm that the fix works with ",(0,o.kt)("inlineCode",{parentName:"li"},"resume"),". Return to 4 if the error has not been fixed."),(0,o.kt)("li",{parentName:"ol"},"When the step works locally, rerun the whole flow from ",(0,o.kt)("inlineCode",{parentName:"li"},"start")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"end")," and confirm that the fix works as intended.")),(0,o.kt)("h3",{id:"how-to-use-the-resume-command"},"How to use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"resume")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command allows you to resume execution of a past run at a failed step. Resuming makes it easy to quickly reproduce the failure and iterate on the step code until a fix has been found."),(0,o.kt)("p",null,"Here is how it works. First, save the snippet below :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step\n\nclass DebugFlow(FlowSpec):\n\n    @step\n    def start(self):\n        self.next(self.a, self.b)\n\n    @step\n    def a(self):\n        self.x = 1\n        self.next(self.join)\n\n    @step\n    def b(self):\n        self.x = int('2fail')\n        self.next(self.join)\n\n    @step\n    def join(self, inputs):\n        print('a is %s' % inputs.a.x)\n        print('b is %s' % inputs.b.x)\n        print('total is %d' % sum(input.x for input in inputs))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    DebugFlow()\n")),(0,o.kt)("p",null,"Run the script with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py run\n")),(0,o.kt)("p",null,"The run should fail. The output should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"...\n2018-01-27 22:59:40.313 [3/b/21638 (pid 13720)] File \"debug.py\", line 17, in b\n2018-01-27 22:59:40.313 [3/b/21638 (pid 13720)] self.x = int('2fail')\n2018-01-27 22:59:40.314 [3/b/21638 (pid 13720)] ValueError: invalid literal for int() with base 10: '2fail'\n2018-01-27 22:59:40.314 [3/b/21638 (pid 13720)]\n2018-01-27 22:59:40.361 [3/a/21637 (pid 13719)] Task finished successfully.\n2018-01-27 22:59:40.362 [3/b/21638 (pid 13720)] Task failed.\n2018-01-27 22:59:40.362 Workflow failed.\n    Step failure:\n    Step b (task-id 21638) failed.\n")),(0,o.kt)("p",null,"This shows that the step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," of the run ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," failed. In your case, the run id could be different."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command runs the flow similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),". However, in contrast to ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," resuming reuses results of every successful step instead of actually running them."),(0,o.kt)("p",null,"Try it with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume\n")),(0,o.kt)("p",null,"Metaflow remembers the run number of the last local run, which in this case is ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),", so you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," reusing results of the run above. Since we have not changed anything yet, you should see the above error again but with an incremented run number."),(0,o.kt)("p",null,"You can also resume a specific run using the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," if you don't like the default value selected by Metaflow. To get the same behavior as above, you can also do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume --origin-run-id 3\n")),(0,o.kt)("p",null,"If you'd like programmatic access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--origin-run-id")," selected for the ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," (either implicitly selected by Metaflow as last ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," invocation, or explicitly declared by the user via the CLI), you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," singleton. Read more ",(0,o.kt)("a",{parentName:"p",href:"tagging#accessing-current-ids-in-a-flow"},"here"),"."),(0,o.kt)("p",null,"Next, fix the error by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"int('2fail')")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"debug.py")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"int('2')"),". Try again after the fix. This time, you should see the flow completing successfully."),(0,o.kt)("p",null,"Resuming uses the flow and step names to decide what results can be reused. This means that the results of previously successful steps will get reused even if you change their step code. You can add new steps and alter code of failed steps safely with ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")),(0,o.kt)("h4",{id:"resuming-from-an-arbitrary-step"},"Resuming from an arbitrary step"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," resumes from the step that failed, like ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," above. Sometimes fixing the failed step requires re-execution of some steps that precede it."),(0,o.kt)("p",null,"You can choose the step to resume from by specifying the step name on the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume start\n")),(0,o.kt)("p",null,"This would resume execution from the step ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),". If you specify a step that comes after the step that failed, execution resumes from the failed step - you can't skip over steps."),(0,o.kt)("h4",{id:"resume-and-parameters"},"Resume and parameters"),(0,o.kt)("p",null,"If your flow has ",(0,o.kt)("a",{parentName:"p",href:"basics#how-to-define-parameters-for-flows"},(0,o.kt)("inlineCode",{parentName:"a"},"Parameters")),", you can't change their values when resuming. Changing parameter values could change the results of any steps, including those that ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," skips over, which could result to unexpected behavior in subsequent steps."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resume")," command reuses the parameter values that you set with ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," originally."),(0,o.kt)("h2",{id:"reproducing-production-issues-locally"},(0,o.kt)("strong",{parentName:"h2"},"Reproducing production issues locally")),(0,o.kt)("p",null,"This section shows you how to reproduce a failed Metaflow run on AWS Step Functions locally. This is how a failed run on AWS Step Functions UI looks like -"," "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7343).Z,width:"1999",height:"180"})),(0,o.kt)("p",null,"![](/assets/image3 (1).png)"),(0,o.kt)("p",null,"Notice the execution ID of ",(0,o.kt)("inlineCode",{parentName:"p"},"5ca85f96-8508-409d-a5f5-b567db1040c5"),". When running on AWS Step Functions, Metaflow uses the AWS Step Functions execution ID (prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"sfn-"),") as the run id."," "),(0,o.kt)("p",null,"The graph visualization shows that step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," failed, as expected. First, you should inspect the logs of the failed step to get an idea of why it failed. You can access AWS Batch step logs in the AWS Step Functions UI by looking for the ",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," blob that can be accessed by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," pane on the right side of the UI. You can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," in the AWS Batch console to check the job logs. This ",(0,o.kt)("inlineCode",{parentName:"p"},"JobId")," is also the metaflow task ID for the step."),(0,o.kt)("p",null,"Next, we want to reproduce the above error locally. We do this by resuming the specific AWS Step Functions run that failed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5\n")),(0,o.kt)("p",null,"This will reuse the results of the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," step from the AWS Step Functions run. It will try to rerun the step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," locally, which fails with the same error as it does in production."),(0,o.kt)("p",null,"You can fix the error locally as above. In the case of this simple flow, you can run the whole flow locally to confirm that the fix works. After validating the results, you would deploy a new version to production with ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create"),"."),(0,o.kt)("p",null,"However, this might not be a feasible approach for complex production flow. For instance, the flow might process large amounts of data that can not be handled in your local instance. We have better approaches for staging flows for production:"),(0,o.kt)("h3",{id:"staging-flows-for-production"},(0,o.kt)("strong",{parentName:"h3"},"Staging flows for production")),(0,o.kt)("p",null,"The easiest approach to test a demanding flow is to run it with AWS Batch. This works even with resume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py resume --origin-run-id sfn-5ca85f96-8508-409d-a5f5-b567db1040c5 --with batch\n")),(0,o.kt)("p",null,"This will resume your flow and run every step on AWS Batch. When you are ready to test a fixed flow end-to-end, just run it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python debug.py run --with batch\n")),(0,o.kt)("p",null,"Alternatively, you can change the name of the flow temporarily, e.g. from DebugFlow to DebugFlowStaging. Then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"step-functions create")," with the new name, which will create a separate staging flow on AWS Step Functions."),(0,o.kt)("p",null,"You can test the staging flow freely without interfering with the production flow. Once the staging flow runs successfully, you can confidently deploy a new version to production."),(0,o.kt)("h2",{id:"inspecting-data-with-a-notebook"},"Inspecting data with a notebook"),(0,o.kt)("p",null,"The above example demonstrates a trivial error. In the real life, errors can be much trickier to debug. In the case of machine learning, a flow may fail because of an unexpected distribution of input data, although nothing is wrong with the code per se."),(0,o.kt)("p",null,"Being able to inspect data produced by every step is a powerful feature of Metaflow which can help in situations like this."),(0,o.kt)("p",null,"This clip (no audio) demonstrates inspecting values in a flow:"),(0,o.kt)(l.Z,{playing:!0,controls:!0,url:"https://share.getcloudapp.com/X6uDx9KB",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"In the above clip, you will see:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the flow from the ",(0,o.kt)("a",{parentName:"li",href:"../getting-started/tutorials/"},"tutorials")," (",(0,o.kt)("a",{parentName:"li",href:"../getting-started/tutorials/season-1-the-local-experience/episode01"},"Episode 1"),"), the ",(0,o.kt)("inlineCode",{parentName:"li"},"genre_movies")," step calculates an artifact ",(0,o.kt)("inlineCode",{parentName:"li"},"movies"),". We are going to demonstrate how this artifact can be inspected after the flow has executed;"),(0,o.kt)("li",{parentName:"ol"},"In a Jupyter notebook, you can list all the flows and select the latest run of the Episode 1 flow;"),(0,o.kt)("li",{parentName:"ol"},"Further, you can select the ",(0,o.kt)("inlineCode",{parentName:"li"},"genre_movies")," step from this flow and inspect its value. As you can see, the value computed at that step is fully available via the ",(0,o.kt)("a",{parentName:"li",href:"client"},"Client API")," and this works for any completed step even steps that completed successfully in a failed run.")),(0,o.kt)("p",null,"For more details about the notebook API, see the ",(0,o.kt)("a",{parentName:"p",href:"client"},"Client API"),"."),(0,o.kt)("h2",{id:"debugging-your-flow-code-using-an-ide"},"Debugging your Flow code using an IDE"),(0,o.kt)("p",null,"If anything fails in your code, Metaflow prints out the normal Python stack trace showing the line of code that caused the error. Typically, this error message provides enough information so you can fix the code using your favorite editor."),(0,o.kt)("p",null,"Alternatively, you can use a built-in debugger available in many modern IDEs. Since Metaflow uses subprocesses to launch steps, the IDE may need some additional configuration to handle this properly. We detail the configuration for two popular IDEs here. Other IDEs may also work similarly - let us know and we can add information about your favorite tool."),(0,o.kt)("h3",{id:"debugging-with-pycharm"},"Debugging with PyCharm"),(0,o.kt)("p",null,"The following steps will allow you to debug your Flow within PyCharm:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In the "Run" menu, select "Edit Configurations..."'),(0,o.kt)("li",{parentName:"ol"},"Create a new configuration with the following items:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Set the "Script path" field to point to the absolute path of your Flow script'),(0,o.kt)("li",{parentName:"ol"},'Set the "Parameters" field to "run"'),(0,o.kt)("li",{parentName:"ol"},'Set the "Working directory" field to the directory containing your Flow script'))),(0,o.kt)("li",{parentName:"ol"},'You can now set your breakpoints as usual in your Flow code and select "Debug" from the "Run" menu.')),(0,o.kt)("p",null,'Note that since Metaflow may launch multiple steps in parallel, you may actually hit multiple breakpoints at the same time; you will be able to switch between those breakpoints using the drop down menu (it will say "MainThread"). You can also restrict Metaflow to only execute one step at a time by adding "--max-workers 1" to the "Parameters" field.'),(0,o.kt)("h3",{id:"debugging-with-vscode"},"Debugging with VSCode"),(0,o.kt)("p",null,"You can enable debugging of a Flow in VSCode by adjusting your project's configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode/launch.json"),"."),(0,o.kt)("p",null,"Here is a recording of the end-to-end setup proccess:"),(0,o.kt)(l.Z,{playing:!0,controls:!0,url:"https://www.youtube.com/watch?v=xWGxDeojqeM",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"The configuration file as illustrated in the recording is provided below. Make sure you are extra careful to update the json structure appropriately if you already have existing settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Metaflow Debug",\n            "type": "python",\n            "request": "launch",\n            "program": "${file}",\n            "args": [\n                "run"\n            ],\n            "env": {\n                "USERNAME": "hamel"\n            },\n            "subProcess": true,\n            "console": "integratedTerminal"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,'You can now set breakpoints and then select "Start Debugging" from the "Debug" menu or command pallete as illustrated in the recording. Note that since Metaflow may launch multiple steps in parallel, you may actually hit multiple breakpoints at the same time; you will be able to switch between those breakpoints by selecting the proper function stack in the "Call Stack" window. You can also restrict Metaflow to only execute one step at a time by adding the values "--max-workers" and "1" to the "args" array in the configuration.'),(0,o.kt)("h3",{id:"combining-debugging-with-resume"},"Combining debugging with resume"),(0,o.kt)("p",null,'You can naturally combine the techniques described in this section with the "resume" command described previously. Instead of passing "run" as the program argument, simply pass "resume".'),(0,o.kt)("h3",{id:"compatibility-with-conda-decorator"},"Compatibility with Conda decorator"),(0,o.kt)("p",null,"The above instructions work even if you use ",(0,o.kt)("a",{parentName:"p",href:"dependencies#managing-dependencies-with-conda-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@conda")," decorators")," in your code; you need, however, to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," binary is available in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". The easiest way to do this is to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable to properly include the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," binary if it is in a non-standard location. In VSCode, you can simply add this value in the env section of launch.json and in PyCharm, the UI allows you to set environment variables."),(0,o.kt)("h2",{id:""}))}c.isMDXComponent=!0},7343:function(e,t,n){t.Z=n.p+"assets/images/image1-accbb36a62286f898ffc47fe5c0ea1f3.png"}}]);