"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6212],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],l={sidebar_label:"metadata",title:"metadata.metadata"},o=void 0,d={unversionedId:"api/metaflow/metadata/metadata",id:"api/metaflow/metadata/metadata",title:"metadata.metadata",description:"MetadataProvider Objects",source:"@site/docs/api/metaflow/metadata/metadata.md",sourceDirName:"api/metaflow/metadata",slug:"/api/metaflow/metadata/",permalink:"/docs/api/metaflow/metadata/",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/metadata/metadata.md",tags:[],version:"current",frontMatter:{sidebar_label:"metadata",title:"metadata.metadata"},sidebar:"apiMetaflow",previous:{title:"s3util",permalink:"/docs/api/metaflow/datatools/s3util"},next:{title:"batch_decorator",permalink:"/docs/api/metaflow/plugins/aws/batch/batch_decorator"}},u=[{value:"MetadataProvider Objects",id:"metadataprovider-objects",children:[{value:"compute_info",id:"compute_info",children:[],level:4}],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Returns",id:"returns",children:[{value:"default_info",id:"default_info",children:[],level:4}],level:2},{value:"Returns",id:"returns-1",children:[{value:"version",id:"version",children:[],level:4}],level:2},{value:"Returns",id:"returns-2",children:[{value:"new_run_id",id:"new_run_id",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[],level:2},{value:"Returns",id:"returns-3",children:[{value:"register_run_id",id:"register_run_id",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-2",children:[{value:"new_task_id",id:"new_task_id",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-3",children:[],level:2},{value:"Returns",id:"returns-4",children:[{value:"register_task_id",id:"register_task_id",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-4",children:[{value:"get_runtime_environment",id:"get_runtime_environment",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-5",children:[],level:2},{value:"Returns",id:"returns-5",children:[{value:"register_data_artifacts",id:"register_data_artifacts",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-6",children:[{value:"register_metadata",id:"register_metadata",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-7",children:[{value:"add_sticky_tags",id:"add_sticky_tags",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-8",children:[{value:"get_object",id:"get_object",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-9",children:[],level:2},{value:"Return",id:"return",children:[],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metadataprovider-objects"},"MetadataProvider Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@with_metaclass(MetadataProviderMeta)\nclass MetadataProvider(object)\n")),(0,i.kt)("h4",{id:"compute_info"},"compute","_","info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @classmethod\n | compute_info(cls, val)\n")),(0,i.kt)("p",null,"Compute the new information for this provider"),(0,i.kt)("p",null,"The computed value should be returned and will then be accessible directly as cls.INFO.\nThis information will be printed by the client when describing this metadata provider"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"val : str\nProvider specific information used in computing the new information. For example, this\ncan be a path."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"str :\nValue to be set to INFO"),(0,i.kt)("h4",{id:"default_info"},"default","_","info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @classmethod\n | default_info(cls)\n")),(0,i.kt)("p",null,"Returns the default information for this provider"),(0,i.kt)("p",null,"This should compute and return the default value for the information regarding this provider.\nFor example, this can compute where the metadata is stored"),(0,i.kt)("h2",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"str\nValue to be set by default in INFO"),(0,i.kt)("h4",{id:"version"},"version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | version()\n")),(0,i.kt)("p",null,"Returns the version of this provider"),(0,i.kt)("h2",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"str\nVersion of the provider"),(0,i.kt)("h4",{id:"new_run_id"},"new","_","run","_","id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | new_run_id(tags=None, sys_tags=None)\n")),(0,i.kt)("p",null,"Creates an ID and registers this new run."),(0,i.kt)("p",null,"The run ID will be unique within a given flow."),(0,i.kt)("h2",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,"tags : list, optional\nTags to apply to this particular run, by default None\nsys_tags : list, optional\nSystem tags to apply to this particular run, by default None"),(0,i.kt)("h2",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,"int\nRun ID for the run"),(0,i.kt)("h4",{id:"register_run_id"},"register","_","run","_","id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | register_run_id(run_id, tags=None, sys_tags=None)\n")),(0,i.kt)("p",null,"No-op operation in this implementation."),(0,i.kt)("h2",{id:"parameters-2"},"Parameters"),(0,i.kt)("p",null,"run_id : int\nRun ID for this run\ntags : list, optional\nTags to apply to this particular run, by default None\nsys_tags : list, optional\nSystem tags to apply to this particular run, by default None"),(0,i.kt)("h4",{id:"new_task_id"},"new","_","task","_","id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | new_task_id(run_id, step_name, tags=None, sys_tags=None)\n")),(0,i.kt)("p",null,"Creates an ID and registers this new task."),(0,i.kt)("p",null,"The task ID will be unique within a flow, run and step"),(0,i.kt)("h2",{id:"parameters-3"},"Parameters"),(0,i.kt)("p",null,"run_id : int\nID of the run\nstep_name : string\nName of the step\ntags : list, optional\nTags to apply to this particular task, by default None\nsys_tags : list, optional\nSystem tags to apply to this particular task, by default None"),(0,i.kt)("h2",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"int\nTask ID for the task"),(0,i.kt)("h4",{id:"register_task_id"},"register","_","task","_","id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | register_task_id(run_id, step_name, task_id, attempt=0, tags=None, sys_tags=None)\n")),(0,i.kt)("p",null,"No-op operation in this implementation."),(0,i.kt)("h2",{id:"parameters-4"},"Parameters"),(0,i.kt)("p",null,"run_id : int or convertible to int\nRun ID for this run\nstep_name : string\nName of the step\ntask_id : int\nTask ID\ntags : list, optional\nTags to apply to this particular run, by default []\nsys_tags : list, optional\nSystem tags to apply to this particular run, by default []"),(0,i.kt)("h4",{id:"get_runtime_environment"},"get","_","runtime","_","environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | get_runtime_environment(runtime_name)\n")),(0,i.kt)("p",null,"Returns a dictionary of environment variables to be set"),(0,i.kt)("h2",{id:"parameters-5"},"Parameters"),(0,i.kt)("p",null,"runtime_name : string\nName of the runtime for which to get the environment"),(0,i.kt)("h2",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"dict","[string]"," -",">"," string\nEnvironment variables from this metadata provider"),(0,i.kt)("h4",{id:"register_data_artifacts"},"register","_","data","_","artifacts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | register_data_artifacts(run_id, step_name, task_id, attempt_id, artifacts)\n")),(0,i.kt)("p",null,"Registers the fact that the data-artifacts are associated with\nthe particular task."),(0,i.kt)("p",null,"Artifacts produced by a given task can be associated with the\ntask using this call"),(0,i.kt)("h2",{id:"parameters-6"},"Parameters"),(0,i.kt)("p",null,"run_id : int\nRun ID for the task\nstep_name : string\nStep name for the task\ntask_id : int\nTask ID for the task\nattempt_id : int\nAttempt for the task\nartifacts : List of DataArtifact\nArtifacts associated with this task"),(0,i.kt)("h4",{id:"register_metadata"},"register","_","metadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | register_metadata(run_id, step_name, task_id, metadata)\n")),(0,i.kt)("p",null,"Registers metadata with a task."),(0,i.kt)("p",null,"Note that the same metadata can be registered multiple times for the same task (for example\nby multiple attempts). Internally, the timestamp of when the registration call is made is\nalso recorded allowing the user to determine the latest value of the metadata."),(0,i.kt)("h2",{id:"parameters-7"},"Parameters"),(0,i.kt)("p",null,"run_id : int\nRun ID for the task\nstep_name : string\nStep name for the task\ntask_id : int\nTask ID for the task\nmetadata : List of MetaDatum\nMetadata associated with this task"),(0,i.kt)("h4",{id:"add_sticky_tags"},"add","_","sticky","_","tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | add_sticky_tags(tags=None, sys_tags=None)\n")),(0,i.kt)("p",null,"Adds tags to be added to every run and task"),(0,i.kt)("p",null,"Tags can be added to record information about a run/task. Such tags can be specified on a\nper run or task basis using the new_run_id/register_run_id or new_task_id/register_task_id\nfunctions but can also be set globally using this function. Tags added here will be\nadded to every run/task created after this call is made."),(0,i.kt)("h2",{id:"parameters-8"},"Parameters"),(0,i.kt)("p",null,"tags : list, optional\nTags to add to every run/task, by default None\nsys_tags : list, optional\nSystem tags to add to every run/task, by default None"),(0,i.kt)("h4",{id:"get_object"},"get","_","object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @classmethod\n | get_object(cls, obj_type, sub_type, filters, attempt, *args)\n")),(0,i.kt)("p",null,"Returns the requested object depending on obj_type and sub_type"),(0,i.kt)("p",null,"obj_type can be one of ","'","root","'",", ","'","flow","'",", ","'","run","'",", ","'","step","'",", ","'","task","'",",\nor ","'","artifact","'"),(0,i.kt)("p",null,"sub_type describes the aggregation required and can be either:\n","'","metadata","'",", ","'","self","'"," or any of obj_type provided that it is slotted below\nthe object itself. For example, if obj_type is ","'","flow","'",", you can\nspecify ","'","run","'"," to get all the runs in that flow.\nA few special rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- &#x27;metadata&#x27; is only allowed for obj_type &#x27;task&#x27;\n- For obj_type &#x27;artifact&#x27;, only &#x27;self&#x27; is allowed\n")),(0,i.kt)("p",null,"A few examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- To get a list of all flows:\n    - set obj_type to &#x27;root&#x27; and sub_type to &#x27;flow&#x27;\n- To get a list of all tasks:\n    - set obj_type to &#x27;root&#x27; and sub_type to &#x27;task&#x27;\n- To get a list of all artifacts in a task:\n    - set obj_type to &#x27;task&#x27; and sub_type to &#x27;artifact&#x27;\n- To get information about a specific flow:\n    - set obj_type to &#x27;flow&#x27; and sub_type to &#x27;self&#x27;\n")),(0,i.kt)("h2",{id:"parameters-9"},"Parameters"),(0,i.kt)("p",null,"obj_type : string\nOne of ","'","root","'",", ","'","flow","'",", ","'","run","'",", ","'","step","'",", ","'","task","'",", ","'","artifact","'"," or ","'","metadata","'","\nsub_type : string\nSame as obj_type with the addition of ","'","self","'","\nfilters : dict\nDictionary with keys ","'","any_tags","'",", ","'","tags","'"," and ","'","system_tags","'",". If specified\nwill return only objects that have the specified tags present. Filters\nare ANDed together so all tags must be present for the object to be returned.\nattempt : int or None\nIf None, for metadata and artifacts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  - returns information about the latest attempt for artifacts\n  - returns all metadata across all attempts\nOtherwise, returns information about metadata and artifacts for that\nattempt only.\nNOTE: For older versions of Metaflow (pre 2.4.0), the attempt for\nmetadata is not known; in that case, all metadata is returned (as\nif None was passed in).\n")),(0,i.kt)("h2",{id:"return"},"Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"object or list :\n    Depending on the call, the type of object return varies\n")))}c.isMDXComponent=!0}}]);