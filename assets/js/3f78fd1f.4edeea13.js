"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9592],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={},l="Testing Philosophy",p={unversionedId:"internals-of-metaflow/testing-philosophy",id:"internals-of-metaflow/testing-philosophy",title:"Testing Philosophy",description:"Watch this talk for motivation: Autonomous Testing and the Future of Software Development by Will Wilson.",source:"@site/docs/internals-of-metaflow/testing-philosophy.md",sourceDirName:"internals-of-metaflow",slug:"/internals-of-metaflow/testing-philosophy",permalink:"/docusaurus/docs/internals-of-metaflow/testing-philosophy",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/internals-of-metaflow/testing-philosophy.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Technical Overview",permalink:"/docusaurus/docs/internals-of-metaflow/technical-overview"}},c=[{value:"Metaflow Test Suite",id:"metaflow-test-suite",children:[],level:2},{value:"Specifications",id:"specifications",children:[{value:"<strong>Contexts</strong>",id:"contexts",children:[],level:3},{value:"<strong>Tests</strong>",id:"tests",children:[{value:"<strong>Assertions</strong>",id:"assertions",children:[],level:4}],level:3},{value:"<strong>Graphs</strong>",id:"graphs",children:[],level:3},{value:"<strong>Checkers</strong>",id:"checkers",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Coverage report",id:"coverage-report",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-philosophy"},"Testing Philosophy"),(0,o.kt)("p",null,"Watch this talk for motivation: ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fFSPwJFXVlw"},"Autonomous Testing and the Future of Software Development by Will Wilson"),"."),(0,o.kt)("h2",{id:"metaflow-test-suite"},"Metaflow Test Suite"),(0,o.kt)("p",null,"The integration test harness for the core Metaflow at ",(0,o.kt)("inlineCode",{parentName:"p"},"test/core"),", generates and executes synthetic Metaflow flows, exercising all aspects of Metaflow. The test suite is executed using ",(0,o.kt)("a",{parentName:"p",href:"http://tox.readthedocs.io"},"tox")," as configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"tox.ini"),". You can run the tests by hand using ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"run_tests.py")," as described below."),(0,o.kt)("p",null,"What happens when you execute ",(0,o.kt)("inlineCode",{parentName:"p"},"python helloworld.py run"),"? The execution involves multiple layers of the Metaflow stack. The stack looks like following, starting from the most fundamental layer all the way to the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Python interpreter ","(",(0,o.kt)("inlineCode",{parentName:"li"},"python2"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"python3"),")"),(0,o.kt)("li",{parentName:"ol"},"Metaflow core ","(",(0,o.kt)("inlineCode",{parentName:"li"},"task.py"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"runtime.py"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"datastore"),", etc.",")"),(0,o.kt)("li",{parentName:"ol"},"Metaflow plugins ","(",(0,o.kt)("inlineCode",{parentName:"li"},"@timeout"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"@catch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata.py")," etc.",")"),(0,o.kt)("li",{parentName:"ol"},"User-defined graph"),(0,o.kt)("li",{parentName:"ol"},"User-defined step functions"),(0,o.kt)("li",{parentName:"ol"},"User interface ","(",(0,o.kt)("inlineCode",{parentName:"li"},"cli.py"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"metaflow.client"),")")),(0,o.kt)("p",null,"We could write unit tests for functions in the layers 2, 3, and 6, which would capture some bugs. However, a much larger superset of bugs is caused by unintended interactions across the layers. For instance, exceptions caught by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@catch")," tag ","(","3",")"," inside a deeply nested foreach graph ","(","4",")"," might not be returned correctly in the client API ","(","6",")"," when using Python 3 ","(","1",")","."),(0,o.kt)("p",null,"The integration test harness included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," directory tries to surface bugs like this by generating test cases automatically using ",(0,o.kt)("em",{parentName:"p"},"specifications")," provided by the developer."),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("p",null,"The test harness allows you to customize behavior in four ways that correspond to the layers above:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You define the execution environment, including environment variables, the version of the Python interpreter, and the type of datastore used as ",(0,o.kt)("em",{parentName:"li"},"contexts")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"contexts.json")," ","(","layers 1 and 2",")","."),(0,o.kt)("li",{parentName:"ol"},"You define the step functions, the decorators used, and the expected results as ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowTest")," templates, stored in the ",(0,o.kt)("inlineCode",{parentName:"li"},"tests")," directory ","(","layers 3 and 5",")","."),(0,o.kt)("li",{parentName:"ol"},"You define various graphs that match the step functions as simple JSON descriptions of the graph structure, stored in the ",(0,o.kt)("inlineCode",{parentName:"li"},"graphs")," directory ","(","layer 4",")","."),(0,o.kt)("li",{parentName:"ol"},"You define various ways to check the results that correspond to the different user interfaces of Metaflow as ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowCheck")," classes, stored in the ",(0,o.kt)("inlineCode",{parentName:"li"},"metaflow_test")," directory ","(","layer 6",")",". You can customize which checkers get used in which contexts in ",(0,o.kt)("inlineCode",{parentName:"li"},"context.json"),".")),(0,o.kt)("p",null,"The test harness takes all ",(0,o.kt)("inlineCode",{parentName:"p"},"contexts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"graphs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"checkers")," and generates a test flow for every combination of them, unless you explicitly set constraints on what combinations are allowed. The test flows are then executed, optionally in parallel, and results are collected and summarized."),(0,o.kt)("h3",{id:"contexts"},(0,o.kt)("strong",{parentName:"h3"},"Contexts")),(0,o.kt)("p",null,"Contexts are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"contexts.json"),". The file should be pretty self-explanatory. Most likely you do not need to edit the file unless you are adding tests for a new command-line argument."),(0,o.kt)("p",null,"Note that some contexts have ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled: true"),". These contexts are not executed by default when tests are run by a CI system. You can enable them on the command line for local testing, as shown below."),(0,o.kt)("h3",{id:"tests"},(0,o.kt)("strong",{parentName:"h3"},"Tests")),(0,o.kt)("p",null,"Take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/basic_artifact.py"),". This test verifies that artifacts defined in the first step are available in all steps downstream. You can use this simple test as a template for new tests."),(0,o.kt)("p",null,"Your test class should derive from ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowTest"),". The class variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIORITY")," denotes how fundamental the exercised functionality is to Metaflow. The tests are executed in the ascending order of priority, to make sure that foundations are solid before proceeding to more sophisticated cases."),(0,o.kt)("p",null,"The step functions are decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@steps")," decorator. Note that in contrast to normal Metaflow flows, these functions can be applied to multiple steps in a graph. A core idea behind this test harness is to decouple graphs from step functions, so various combinations can be tested automatically. Hence, you need to provide step functions that can be applied to various step types."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@steps")," decorator takes two arguments. The first argument is an integer that defines the order of precedence between multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," functions, in case multiple step function templates match. A typical pattern is to provide a specific function for a specific step type, such as joins and give it a precedence of ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". Then another catch-all can be defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"@steps(2, ['all'])"),". As the result, the special function is applied to joins and the catch all function for all other steps."),(0,o.kt)("p",null,"The second argument gives a list of ",(0,o.kt)("em",{parentName:"p"},"qualifiers")," specifying which types of steps this function can be applied to. There is a set of built-in qualifiers: ",(0,o.kt)("inlineCode",{parentName:"p"},"all"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"linear")," which match to the corresponding step types. In addition to these built-in qualifiers, graphs can specify any custom qualifiers."),(0,o.kt)("p",null,"By specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"required=True")," as a keyword argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"@steps"),", you can require that a certain step function needs to be used in combination with a graph to produce a valid test case. By creating a custom qualifier and setting ",(0,o.kt)("inlineCode",{parentName:"p"},"required=True")," you can control how tests get matched to graphs."),(0,o.kt)("p",null,"In general, it is beneficial to write test cases that do not specify overly restrictive qualifiers and ",(0,o.kt)("inlineCode",{parentName:"p"},"required=True"),". This way you cast a wide net to catch bugs with many generated test cases. However, if the test is slow to execute and/or does not benefit from a large number of matching graphs, it is a good idea to make it more specific."),(0,o.kt)("h4",{id:"assertions"},(0,o.kt)("strong",{parentName:"h4"},"Assertions")),(0,o.kt)("p",null,"The test case is not very useful unless it verifies its results. There are two ways to assert that the test behaves as expected."),(0,o.kt)("p",null,"You can use a function ",(0,o.kt)("inlineCode",{parentName:"p"},"assert_equals(expected, got)")," inside step functions to confirm that data inside the step functions is valid. Secondly, you can define a method ",(0,o.kt)("inlineCode",{parentName:"p"},"check_results(self, flow, checker)")," in your test class, which verifies the stored results after the flow has been executed successfully."),(0,o.kt)("p",null,"Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"checker.assert_artifact(step_name, artifact_name, expected_value)\n")),(0,o.kt)("p",null,"to assert that steps contain the expected data artifacts."),(0,o.kt)("p",null,"Take a look at existing test cases in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory to get an idea how this works in practice."),(0,o.kt)("h3",{id:"graphs"},(0,o.kt)("strong",{parentName:"h3"},"Graphs")),(0,o.kt)("p",null,"Graphs are simple JSON representations of directed graphs. They list every step in a graph and transitions between them. Every step can have an optional list of custom qualifiers, as described above."),(0,o.kt)("p",null,"You can take a look at the existing graphs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphs")," directory to get an idea of the syntax."),(0,o.kt)("h3",{id:"checkers"},(0,o.kt)("strong",{parentName:"h3"},"Checkers")),(0,o.kt)("p",null,"Currently the test harness exercises two types of user interfaces: The command line interface, defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"cli_check.py"),", and the Python API, defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"mli_check.py"),"."),(0,o.kt)("p",null,"Currently you can use these checkers to assert values of data artifacts or log output. If you want to add test for new type of functionality in the CLI and/or the Python API, you should add a new method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCheck")," base class and corresponding implementations in ",(0,o.kt)("inlineCode",{parentName:"p"},"mli_check.py")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cli_check.py"),". If certain functionality is only available in one of the interfaces, you can provide a stub implementation returning ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," in the other checker class."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The test harness is executed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"run_tests.py"),". By default, it executes all valid combinations of contexts, tests, graphs, and checkers. This mode is suitable for automated tests run by a CI system."),(0,o.kt)("p",null,"When testing locally, it is recommended to run the test suite as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"cd metaflow/test/core\nPYTHONPATH=`pwd`/../../ python run_tests.py --debug --contexts dev-local\n")),(0,o.kt)("p",null,"This uses only the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev_local")," context, which does not depend on any over-the-network communication like ",(0,o.kt)("inlineCode",{parentName:"p"},"--metadata=service")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--datastore=s3"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug")," flag makes the harness fail fast when the first test case fails. The default mode is to run all test cases and summarize all failures in the end."),(0,o.kt)("p",null,"You can run a single test case as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"cd metaflow/test/core\nPYTHONPATH=`pwd`/../../ python run_tests.py --debug --contexts dev-local --graphs single-linear-step --tests BasicArtifactTest\n")),(0,o.kt)("p",null,"This chooses a single context, a single graph, and a single test. If you are developing a new test, this is the fastest way to test the test."),(0,o.kt)("h3",{id:"coverage-report"},"Coverage report"),(0,o.kt)("p",null,"The test harness uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage")," package in Python to produce a test coverage report. By default, you can find a comprehensive test coverage report in the ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage")," directory after the test harness has finished."),(0,o.kt)("p",null,"After you have developed a new feature in Metaflow, use the line-by-line coverage report to confirm that all lines related the new feature are touched by the tests."))}d.isMDXComponent=!0}}]);