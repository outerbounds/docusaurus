"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,h=f["".concat(o,".").concat(d)]||f[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={sidebar_label:"flowspec",title:"flowspec"},o=void 0,c={unversionedId:"api/metaflow/flowspec",id:"api/metaflow/flowspec",title:"flowspec",description:"ParallelUBF Objects",source:"@site/docs/api/metaflow/flowspec.md",sourceDirName:"api/metaflow",slug:"/api/metaflow/flowspec",permalink:"/docusaurus/docs/api/metaflow/flowspec",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/flowspec.md",tags:[],version:"current",frontMatter:{sidebar_label:"flowspec",title:"flowspec"},sidebar:"apiMetaflow",previous:{title:"decorators",permalink:"/docusaurus/docs/api/metaflow/decorators"},next:{title:"includefile",permalink:"/docusaurus/docs/api/metaflow/includefile"}},p=[{value:"ParallelUBF Objects",id:"parallelubf-objects",children:[],level:2},{value:"FlowSpec Objects",id:"flowspec-objects",children:[],level:2},{value:"Attributes",id:"attributes",children:[{value:"__init__",id:"__init__",children:[],level:4}],level:2},{value:"Parameters",id:"parameters",children:[{value:"script_name",id:"script_name",children:[],level:4}],level:2},{value:"Returns",id:"returns",children:[{value:"__iter__",id:"__iter__",children:[],level:4}],level:2},{value:"Returns",id:"returns-1",children:[{value:"index",id:"index",children:[],level:4}],level:2},{value:"See Also",id:"see-also",children:[],level:2},{value:"Returns",id:"returns-2",children:[{value:"input",id:"input",children:[],level:4}],level:2},{value:"See Also",id:"see-also-1",children:[],level:2},{value:"Returns",id:"returns-3",children:[{value:"foreach_stack",id:"foreach_stack",children:[],level:4}],level:2},{value:"Returns",id:"returns-4",children:[{value:"merge_artifacts",id:"merge_artifacts",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[],level:2},{value:"Raises",id:"raises",children:[{value:"next",id:"next",children:[],level:4}],level:2},{value:"Raises",id:"raises-1",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"parallelubf-objects"},"ParallelUBF Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ParallelUBF(UnboundedForeachInput)\n")),(0,l.kt)("p",null,"Unbounded-for-each placeholder for supporting parallel (multi-node) steps."),(0,l.kt)("h2",{id:"flowspec-objects"},"FlowSpec Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class FlowSpec(object)\n")),(0,l.kt)("p",null,"Main class from which all Flows should inherit."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"script_name\nindex\ninput"),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(use_cli=True)\n")),(0,l.kt)("p",null,"Construct a FlowSpec"),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"use_cli : bool, optional, default: True\nSet to True if the flow is invoked from ",(0,l.kt)("strong",{parentName:"p"},"main")," or the command line"),(0,l.kt)("h4",{id:"script_name"},"script","_","name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef script_name()\n")),(0,l.kt)("p",null,"Returns the name of the script containing the flow"),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("p",null,"str\nA string containing the name of the script"),(0,l.kt)("h4",{id:"__iter__"},"_","_","iter","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __iter__()\n")),(0,l.kt)("p",null,"Iterate over all steps in the Flow"),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"Iterator","[graph.DAGNode]","\nIterator over the steps in the flow"),(0,l.kt)("h4",{id:"index"},"index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef index()\n")),(0,l.kt)("p",null,"Index of the task in a foreach step"),(0,l.kt)("p",null,"In a foreach step, multiple instances of this step (tasks) will be executed,\none for each element in the foreach.\nThis property returns the zero based index of the current task. If this is not\na foreach step, this returns None."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("p",null,"foreach_stack: A detailed example is given in the documentation of this function"),(0,l.kt)("h2",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"int\nIndex of the task in a foreach step"),(0,l.kt)("h4",{id:"input"},"input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef input()\n")),(0,l.kt)("p",null,"Value passed to the task in a foreach step"),(0,l.kt)("p",null,"In a foreach step, multiple instances of this step (tasks) will be executed,\none for each element in the foreach.\nThis property returns the element passed to the current task. If this is not\na foreach step, this returns None."),(0,l.kt)("h2",{id:"see-also-1"},"See Also"),(0,l.kt)("p",null,"foreach_stack: A detailed example is given in the documentation of this function"),(0,l.kt)("h2",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"object\nInput passed to the task (can be any object)"),(0,l.kt)("h4",{id:"foreach_stack"},"foreach","_","stack"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def foreach_stack()\n")),(0,l.kt)("p",null,"Returns the current stack of foreach steps for the current step"),(0,l.kt)("p",null,"This effectively corresponds to the indexes and values at the various levels of nesting.\nFor example, considering the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"@step\ndef root(self):\n    self.split_1 = [&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;]\n    self.next(self.nest_1, foreach=&#x27;split_1&#x27;)\n\n@step\ndef nest_1(self):\n    self.split_2 = [&#x27;d&#x27;, &#x27;e&#x27;, &#x27;f&#x27;, &#x27;g&#x27;]\n    self.next(self.nest_2, foreach=&#x27;split_2&#x27;):\n\n@step\ndef nest_2(self):\n    foo = self.foreach_stack()\n")),(0,l.kt)("p",null,"foo will take the following values in the various tasks for nest_2:\n","[(0, 3, ","'","a","'","), (0, 4, ","'","d","'",")][(0, 3, &#x27;a&#x27;), (1, 4, &#x27;e&#x27;)]","\n...\n","[(0, 3, ","'","a","'","), (3, 4, ","'","g","'",")][(1, 3, &#x27;b&#x27;), (0, 4, &#x27;d&#x27;)]","\n..."),(0,l.kt)("p",null,"where each tuple corresponds to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- the index of the task for that level of the loop\n- the number of splits for that level of the loop\n- the value for that level of the loop\n")),(0,l.kt)("p",null,"Note that the last tuple returned in a task corresponds to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- first element: value returned by self.index\n- third element: value returned by self.input\n")),(0,l.kt)("h2",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"List[Tuple","[int, int, object]","]\nAn array describing the current stack of foreach steps"),(0,l.kt)("h4",{id:"merge_artifacts"},"merge","_","artifacts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def merge_artifacts(inputs, exclude=[], include=[])\n")),(0,l.kt)("p",null,"Merge the artifacts coming from each merge branch (from inputs)"),(0,l.kt)("p",null,"This function takes all the artifacts coming from the branches of a\njoin point and assigns them to self in the calling step. Only artifacts\nnot set in the current step are considered. If, for a given artifact, different\nvalues are present on the incoming edges, an error will be thrown (and the artifacts\nthat ",'"',"conflict",'"'," will be reported)."),(0,l.kt)("p",null,"As a few examples, in the simple graph: A splitting into B and C and joining in D:\nA:\nself.x = 5\nself.y = 6\nB:\nself.b_var = 1\nself.x = from_b\nC:\nself.x = from_c"),(0,l.kt)("p",null,"D:\nmerge_artifacts(inputs)"),(0,l.kt)("p",null,"In D, the following artifacts are set:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"y (value: 6), b_var (value: 1)"),(0,l.kt)("li",{parentName:"ul"},"if from_b and from_c are the same, x will be accessible and have value from_b"),(0,l.kt)("li",{parentName:"ul"},"if from_b and from_c are different, an error will be thrown. To prevent this error,\nyou need to manually set self.x in D to a merged value (for example the max) prior to\ncalling merge_artifacts.")),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,"inputs : List","[Steps]","\nIncoming steps to the join point\nexclude : List","[str]",", optional\nIf specified, do not consider merging artifacts with a name in ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude"),".\nCannot specify if ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," is also specified\ninclude : List","[str]",", optional\nIf specified, only merge artifacts specified. Cannot specify if ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude")," is\nalso specified"),(0,l.kt)("h2",{id:"raises"},"Raises"),(0,l.kt)("p",null,"MetaflowException\nThis exception is thrown if this is not called in a join step\nUnhandledInMergeArtifactsException\nThis exception is thrown in case of unresolved conflicts\nMissingInMergeArtifactsException\nThis exception is thrown in case an artifact specified in `include cannot\nbe found"),(0,l.kt)("h4",{id:"next"},"next"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def next(*dsts, **kwargs)\n")),(0,l.kt)("p",null,"Indicates the next step to execute at the end of this step"),(0,l.kt)("p",null,"This statement should appear once and only once in each and every step (except the ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"\nstep). Furthermore, it should be the last statement in the step."),(0,l.kt)("p",null,"There are several valid formats to specify the next step:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Straight-line connection: self.next(self.next_step) where `next_step` is a method in\n  the current class decorated with the `@step` decorator\n- Static fan-out connection: self.next(self.step1, self.step2, ...) where `stepX` are\n  methods in the current class decorated with the `@step` decorator\n- Foreach branch:\n    self.next(self.foreach_step, foreach=&#x27;foreach_iterator&#x27;)\n  In this situation, `foreach_step` is a method in the current class decorated with the\n  `@step` docorator and `foreach_iterator` is a variable name in the current class that\n  evaluates to an iterator. A task will be launched for each value in the iterator and\n  each task will execute the code specified by the step `foreach_step`.\n")),(0,l.kt)("h2",{id:"raises-1"},"Raises"),(0,l.kt)("p",null,"InvalidNextException\nRaised if the format of the arguments does not match one of the ones given above."))}f.isMDXComponent=!0}}]);