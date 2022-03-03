"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1975],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4527:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={sidebar_label:"task_datastore",title:"datastore.task_datastore"},l=void 0,d={unversionedId:"api/metaflow/datastore/task_datastore",id:"api/metaflow/datastore/task_datastore",title:"datastore.task_datastore",description:"TaskDataStore Objects",source:"@site/docs/api/metaflow/datastore/task_datastore.md",sourceDirName:"api/metaflow/datastore",slug:"/api/metaflow/datastore/task_datastore",permalink:"/docusaurus/docs/api/metaflow/datastore/task_datastore",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/datastore/task_datastore.md",tags:[],version:"current",frontMatter:{sidebar_label:"task_datastore",title:"datastore.task_datastore"},sidebar:"apiMetaflow",previous:{title:"inputs",permalink:"/docusaurus/docs/api/metaflow/datastore/inputs"},next:{title:"s3",permalink:"/docusaurus/docs/api/metaflow/datatools/s3"}},c=[{value:"TaskDataStore Objects",id:"taskdatastore-objects",children:[{value:"init_task",id:"init_task",children:[],level:4},{value:"save_artifacts",id:"save_artifacts",children:[],level:4}],level:2},{value:"Parameters",id:"parameters",children:[{value:"load_artifacts",id:"load_artifacts",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[],level:2},{value:"Returns",id:"returns",children:[{value:"get_artifact_sizes",id:"get_artifact_sizes",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-2",children:[],level:2},{value:"Returns",id:"returns-1",children:[{value:"save_metadata",id:"save_metadata",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-3",children:[{value:"load_metadata",id:"load_metadata",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-4",children:[],level:2},{value:"Returns",id:"returns-2",children:[{value:"has_metadata",id:"has_metadata",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-5",children:[],level:2},{value:"Returns",id:"returns-3",children:[{value:"get",id:"get",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-6",children:[{value:"is_none",id:"is_none",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-7",children:[{value:"done",id:"done",children:[],level:4},{value:"clone",id:"clone",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-8",children:[{value:"persist",id:"persist",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-9",children:[{value:"save_logs",id:"save_logs",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-10",children:[{value:"load_log_legacy",id:"load_log_legacy",children:[],level:4}],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"taskdatastore-objects"},"TaskDataStore Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class TaskDataStore(object)\n")),(0,o.kt)("p",null,"TaskDataStore is obtained through FlowDataStore.get_datastore_for_task and\nis used to store three things:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Task artifacts (using save_artifacts and load_artifacts) which will\n  ultimately be stored using ContentAddressedStore&#x27;s save_blobs and\n  load_blobs. This is basically the content indexed portion of the\n  storage (identical objects are stored only once).\n- Metadata information (using save_metadata and load_metadata) which\n  stores JSON encoded metadata about a task in a non-content indexed\n  way in a hierarchical manner (ie: the files are stored\n  in a path indicated by the pathspec (run_id/step_name/task_id)).\n  This portion of the store can be viewed as name indexed (storing\n  two metadata items with the same name will overwrite the previous item\n  so the condition of equality is the name as\n  opposed to the content).\n- Logs which are a special sort of task metadata but are handled\n  differently (they are not JSON-encodable dictionaries).\n")),(0,o.kt)("h4",{id:"init_task"},"init","_","task"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | init_task()\n')),(0,o.kt)("p",null,"Call this to initialize the datastore with a new attempt."),(0,o.kt)("p",null,"This method requires mode ","'","w","'","."),(0,o.kt)("h4",{id:"save_artifacts"},"save","_","artifacts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | save_artifacts(artifacts_iter, force_v4=False, len_hint=0)\n')),(0,o.kt)("p",null,"Saves Metaflow Artifacts (Python objects) to the datastore and stores\nany relevant metadata needed to retrieve them."),(0,o.kt)("p",null,"Typically, objects are pickled but the datastore may perform any\noperation that it deems necessary. You should only access artifacts\nusing load_artifacts"),(0,o.kt)("p",null,"This method requires mode ","'","w","'","."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"artifacts : Iterator","[(string, object)]","\nIterator over the human-readable name of the object to save\nand the object itself\nforce_v4 : boolean or Dict","[string -",">"," boolean]","\nIndicates whether the artifact should be pickled using the v4\nversion of pickle. If a single boolean, applies to all artifacts.\nIf a dictionary, applies to the object named only. Defaults to False\nif not present or not specified\nlen_hint: integer\nEstimated number of items in artifacts_iter"),(0,o.kt)("h4",{id:"load_artifacts"},"load","_","artifacts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @require_mode(None)\n | load_artifacts(names)\n")),(0,o.kt)("p",null,"Mirror function to save_artifacts"),(0,o.kt)("p",null,"This function will retrieve the objects referenced by ","'","name","'",". Each\nobject will be fetched and returned if found. Note that this function\nwill return objects that may not be the same as the ones saved using\nsaved_objects (taking into account possible environment changes, for\nexample different conda environments) but it will return objects that\ncan be used as the objects passed in to save_objects."),(0,o.kt)("p",null,"This method can be used in both ","'","r","'"," and ","'","w","'"," mode. For the latter use\ncase, this can happen when ",(0,o.kt)("inlineCode",{parentName:"p"},"passdown_partial")," is called and an artifact\npassed down that way is then loaded."),(0,o.kt)("h2",{id:"parameters-1"},"Parameters"),(0,o.kt)("p",null,"names : List","[string]","\nList of artifacts to retrieve"),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Iterator","[(string, object)]"," :\nAn iterator over objects retrieved."),(0,o.kt)("h4",{id:"get_artifact_sizes"},"get","_","artifact","_","sizes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @require_mode("r")\n | get_artifact_sizes(names)\n')),(0,o.kt)("p",null,"Retrieves file sizes of artifacts defined in ","'","names","'"," from their respective\nstored file metadata."),(0,o.kt)("p",null,"Usage restricted to only ","'","r","'"," mode due to depending on the metadata being written"),(0,o.kt)("h2",{id:"parameters-2"},"Parameters"),(0,o.kt)("p",null,"names : List","[string]","\nList of artifacts to retrieve"),(0,o.kt)("h2",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"Iterator","[(string, int)]"," :\nAn iterator over sizes retrieved."),(0,o.kt)("h4",{id:"save_metadata"},"save","_","metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | save_metadata(contents, allow_overwrite=True, add_attempt=True)\n')),(0,o.kt)("p",null,"Save task metadata. This is very similar to save_artifacts; this\nfunction takes a dictionary with the key being the name of the metadata\nto save and the value being the metadata.\nThe metadata, however, will not be stored in the CAS but rather directly\nin the TaskDataStore."),(0,o.kt)("p",null,"This method requires mode ","'","w","'"),(0,o.kt)("h2",{id:"parameters-3"},"Parameters"),(0,o.kt)("p",null,"contents : Dict","[string -",">"," JSON-ifiable objects]","\nDictionary of metadata to store\nallow_overwrite : boolean, optional\nIf True, allows the overwriting of the metadata, defaults to True\nadd_attempt : boolean, optional\nIf True, adds the attempt identifier to the metadata. defaults to\nTrue"),(0,o.kt)("h4",{id:"load_metadata"},"load","_","metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @require_mode("r")\n | load_metadata(names, add_attempt=True)\n')),(0,o.kt)("p",null,"Loads metadata saved with ",(0,o.kt)("inlineCode",{parentName:"p"},"save_metadata")),(0,o.kt)("h2",{id:"parameters-4"},"Parameters"),(0,o.kt)("p",null,"names : List","[string]","\nThe name of the metadata elements to load\nadd_attempt : bool, optional\nAdds the attempt identifier to the metadata name if True,\nby default True"),(0,o.kt)("h2",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,"Dict: string -",">"," JSON decoded object\nResults indexed by the name of the metadata loaded"),(0,o.kt)("h4",{id:"has_metadata"},"has","_","metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @require_mode(None)\n | has_metadata(name, add_attempt=True)\n")),(0,o.kt)("p",null,"Checks if this TaskDataStore has the metadata requested"),(0,o.kt)("p",null,"TODO: Should we make this take multiple names like the other calls?"),(0,o.kt)("p",null,"This method operates like load_metadata in both ","'","w","'"," and ","'","r","'"," modes."),(0,o.kt)("h2",{id:"parameters-5"},"Parameters"),(0,o.kt)("p",null,"names : string\nMetadata name to fetch\nadd_attempt : bool, optional\nAdds the attempt identifier to the metadata name if True,\nby default True"),(0,o.kt)("h2",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,"boolean\nTrue if the metadata exists or False otherwise"),(0,o.kt)("h4",{id:"get"},"get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @require_mode(None)\n | get(name, default=None)\n")),(0,o.kt)("p",null,"Convenience method around load_artifacts for a given name and with a\nprovided default."),(0,o.kt)("p",null,"This method requires mode ","'","r","'","."),(0,o.kt)("h2",{id:"parameters-6"},"Parameters"),(0,o.kt)("p",null,"name : str\nName of the object to get\ndefault : object, optional\nReturns this value if object not found, by default None"),(0,o.kt)("h4",{id:"is_none"},"is","_","none"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @require_mode("r")\n | is_none(name)\n')),(0,o.kt)("p",null,"Convenience method to test if an artifact is None"),(0,o.kt)("p",null,"This method requires mode ","'","r","'","."),(0,o.kt)("h2",{id:"parameters-7"},"Parameters"),(0,o.kt)("p",null,"name : string\nName of the artifact"),(0,o.kt)("h4",{id:"done"},"done"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | done()\n')),(0,o.kt)("p",null,"Mark this task-datastore as ","'","done","'"," for the current attempt"),(0,o.kt)("p",null,"Will throw an exception if mode != ","'","w","'"),(0,o.kt)("h4",{id:"clone"},"clone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | clone(origin)\n')),(0,o.kt)("p",null,"Clone the information located in the TaskDataStore origin into this\ndatastore"),(0,o.kt)("h2",{id:"parameters-8"},"Parameters"),(0,o.kt)("p",null,"origin : TaskDataStore\nTaskDataStore to clone"),(0,o.kt)("h4",{id:"persist"},"persist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | persist(flow)\n')),(0,o.kt)("p",null,"Persist any new artifacts that were produced when running flow"),(0,o.kt)("p",null,"NOTE: This is a DESTRUCTIVE operation that deletes artifacts from\nthe given flow to conserve memory. Don","'","t rely on artifact attributes\nof the flow object after calling this function."),(0,o.kt)("h2",{id:"parameters-9"},"Parameters"),(0,o.kt)("p",null,"flow : FlowSpec\nFlow to persist"),(0,o.kt)("h4",{id:"save_logs"},"save","_","logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @only_if_not_done\n | @require_mode("w")\n | save_logs(logsource, stream_data)\n')),(0,o.kt)("p",null,"Save log files for multiple streams, represented as\na dictionary of streams. Each stream is identified by a type (a string)\nand is either a stringish or a BytesIO object or a Path object."),(0,o.kt)("h2",{id:"parameters-10"},"Parameters"),(0,o.kt)("p",null,"logsource : string\nIdentifies the source of the stream (runtime, task, etc)"),(0,o.kt)("p",null,"stream_data : Dict","[string -",">"," bytes or Path]","\nEach entry should have a string as the key indicating the type\nof the stream (","'","stderr","'",", ","'","stdout","'",") and as value should be bytes or\na Path from which to stream the log."),(0,o.kt)("h4",{id:"load_log_legacy"},"load","_","log","_","legacy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},' | @require_mode("r")\n | load_log_legacy(stream, attempt_override=None)\n')),(0,o.kt)("p",null,"Load old-style, pre-mflog, log file represented as a bytes object."))}m.isMDXComponent=!0}}]);