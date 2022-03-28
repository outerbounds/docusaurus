"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3162],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6845:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return _},default:function(){return k},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return y}});var n=a(7462),r=a(3366),o=a(7294),s=a(3905),l={apiDoc:"apiDoc_jQeC",parameter:"parameter_c2kt",name:"name_BGiK",returnType:"returnType_A5wW",type:"type_xsBv",text:"text_gDq_"},i=function(e){var t=e.name,a=e.type;return o.createElement(o.Fragment,null,o.createElement("span",{className:l.name},t),"\xa0",o.createElement("span",{className:l.type},a))},d=function(e){var t=e.text;return o.createElement("div",{className:l.text},t)},p=function(e){var t=e.line.split(":");return t.length>1?o.createElement("div",{className:l.parameter},o.createElement(i,{name:t[0],type:t[1]})):o.createElement(d,{text:t[0]})},u=function(e){var t=e.type,a=e.description;return o.createElement("div",null,o.createElement("span",{className:l.returnType},t),"\xa0",o.createElement("span",{className:l.description},a))},c={parameters:p,returns:function(e){var t=e.line,a=t.split(":");return a.length>1?o.createElement("div",{className:l.parameter},o.createElement(i,{name:a[0],type:a[1]})):o.createElement(u,{type:t.split(" ")[0],description:t.substr(t.indexOf(" ")+1)})},yields:function(e){var t=e.line.split(":");return t.length>1?o.createElement("div",{className:l.parameter},o.createElement("span",{className:l.name},t[0]),"\xa0",o.createElement("span",{className:l.type},t[1])):o.createElement("div",{class:l.text},t[0])},raises:function(e){var t=e.line.split(":");return t.length>1?o.createElement("div",{className:l.parameter},o.createElement("span",{className:l.name},t[0]),"\xa0",o.createElement("span",{className:l.type},t[1])):o.createElement("div",{class:l.text},t[0])}},m=function(e){var t=e.children,a=(e.lang,null),n=0;return o.createElement("div",{className:l.apiDoc},t.map((function(e){var t,r,s,l,i,d,u,m;if(n++,!a)return 0===(null==(t=e.props)||null==(r=t.id)?void 0:r.indexOf("parameters"))&&(a="parameters"),0===(null==(s=e.props)||null==(l=s.id)?void 0:l.indexOf("returns"))&&(a="returns"),0===(null==(i=e.props)||null==(d=i.id)?void 0:d.indexOf("yields"))&&(a="yields"),0===(null==(u=e.props)||null==(m=u.id)?void 0:m.indexOf("raises"))&&(a="raises"),e;if("p"===e.props.mdxType){var f,v,_,h=function(e){var t;return null!=(t=c[e])?t:p}(a);return a=null,(Array.isArray(null==(f=e.props)?void 0:f.children)?null==(v=e.props)?void 0:v.children.join(""):null==(_=e.props)?void 0:_.children).split("\n").map((function(e){return n++,o.createElement(h,{key:"parameter_"+n,line:e})}))}})))},f=["components"],v={sidebar_label:"flow_datastore_bg",title:"flow_datastore_bg"},_=void 0,h={unversionedId:"flow_datastory_mdx",id:"flow_datastory_mdx",title:"flow_datastore_bg",description:"FlowDataStore Objects",source:"@site/docs/flow_datastory_mdx.mdx",sourceDirName:".",slug:"/flow_datastory_mdx",permalink:"/docs/flow_datastory_mdx",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/flow_datastory_mdx.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"flow_datastore_bg",title:"flow_datastore_bg"}},y=[{value:"FlowDataStore Objects",id:"flowdatastore-objects",children:[{value:"__init__",id:"__init__",children:[],level:4}],level:2},{value:"Parameters",id:"parameters",children:[{value:"get_latest_task_datastores",id:"get_latest_task_datastores",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[],level:2},{value:"Returns",id:"returns",children:[{value:"save_data",id:"save_data",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-2",children:[],level:2},{value:"Returns",id:"returns-1",children:[{value:"load_data",id:"load_data",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-3",children:[],level:2},{value:"Returns",id:"returns-2",children:[],level:2}],b={toc:y};function k(e){var t=e.components,a=(0,r.Z)(e,f);return(0,s.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m,{lang:"python",mdxType:"APIDoc"},(0,s.kt)("h2",{id:"flowdatastore-objects"},"FlowDataStore Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class FlowDataStore(object)\n")),(0,s.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | __init__(flow_name, environment, metadata=None, event_logger=None, monitor=None, storage_impl=None, ds_root=None)\n")),(0,s.kt)("p",null,"Initialize a Flow level datastore."),(0,s.kt)("p",null,"This datastore can then be used to get TaskDataStore to store artifacts\nand metadata about a task as well as a ContentAddressedStore to store\nthings like packages, etc."),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"flow_name : str\nThe name of the flow\nenvironment : MetaflowEnvironment\nEnvironment this datastore is operating in\nmetadata : MetadataProvider, optional\nThe metadata provider to use and update if needed, by default None\nevent_logger : EventLogger, optional\nEventLogger to use to report events, by default None\nmonitor : Monitor, optional\nMonitor to use to measure/monitor events, by default None\nstorage_impl : type\nClass for the backing DataStoreStorage to use; if not provided use\ndefault_storage_impl, optional\nds_root : str\nThe optional root for this datastore; if not provided, use the\ndefault for the DataStoreStorage, optional"),(0,s.kt)("h4",{id:"get_latest_task_datastores"},"get_latest_task_datastores"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | get_latest_task_datastores(run_id=None, steps=None, pathspecs=None, allow_not_done=False)\n")),(0,s.kt)("p",null,"Return a list of TaskDataStore for a subset of the tasks."),(0,s.kt)("p",null,"We filter the list based on ",(0,s.kt)("inlineCode",{parentName:"p"},"steps")," if non-None.\nAlternatively, ",(0,s.kt)("inlineCode",{parentName:"p"},"pathspecs")," can contain the exact list of pathspec(s)\n(run_id/step_name/task_id) that should be filtered.\nNote: When ",(0,s.kt)("inlineCode",{parentName:"p"},"pathspecs")," is specified, we expect strict consistency and\nnot eventual consistency in contrast to other modes."),(0,s.kt)("h2",{id:"parameters-1"},"Parameters"),(0,s.kt)("p",null,"run_id : str, optional\nRun ID to get the tasks from. If not specified, use pathspecs,\nby default None\nsteps : List","[str]"," , optional\nSteps to get the tasks from. If run_id is specified, this\nmust also be specified, by default None\npathspecs : List","[str]",", optional\nFull task specs (run_id/step_name/task_id). Can be used instead of\nspecifiying run_id and steps, by default None\nallow_not_done : bool, optional\nIf True, returns the latest attempt of a task even if that attempt\nwasn","'","t marked as done, by default False"),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"List","[TaskDataStore]","\nTask datastores for all the tasks specified."),(0,s.kt)("h4",{id:"save_data"},"save_data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | save_data(data_iter, len_hint=0)\n")),(0,s.kt)("p",null,"Saves data to the underlying content-addressed store"),(0,s.kt)("h2",{id:"parameters-2"},"Parameters"),(0,s.kt)("p",null,"data : Iterator","[bytes]","\nIterator over blobs to save; each item in the list will be saved individually.\nlen_hint : int\nEstimate of the number of items that will be produced by the iterator,\nby default 0."),(0,s.kt)("h2",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,"(str, str)\nTuple containing the URI to access the saved resource as well as\nthe key needed to retrieve it using load_data. This is returned in\nthe same order as the input."),(0,s.kt)("h4",{id:"load_data"},"load_data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," | load_data(keys, force_raw=False)\n")),(0,s.kt)("p",null,"Retrieves data from the underlying content-addressed store"),(0,s.kt)("h2",{id:"parameters-3"},"Parameters"),(0,s.kt)("p",null,"keys : List","[str]","\nKeys to retrieve\nforce_raw : bool, optional\nBackward compatible mode. Raw data will be properly identified with\nmetadata information but older datastores did not do this. If you\nknow the data should be handled as raw data, set this to True,\nby default False"),(0,s.kt)("h2",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,"Iterator","[bytes]","\nIterator over (key, blob) tuples")))}k.isMDXComponent=!0}}]);