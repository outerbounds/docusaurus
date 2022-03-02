"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4199],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={sidebar_label:"s3",title:"datatools.s3"},s=void 0,p={unversionedId:"api/metaflow/datatools/s3",id:"api/metaflow/datatools/s3",title:"datatools.s3",description:"S3Object Objects",source:"@site/docs/api/metaflow/datatools/s3.md",sourceDirName:"api/metaflow/datatools",slug:"/api/metaflow/datatools/s3",permalink:"/docusaurus/docs/api/metaflow/datatools/s3",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/datatools/s3.md",tags:[],version:"current",frontMatter:{sidebar_label:"s3",title:"datatools.s3"},sidebar:"apiMetaflow",previous:{title:"task_datastore",permalink:"/docusaurus/docs/api/metaflow/datastore/task_datastore"},next:{title:"s3util",permalink:"/docusaurus/docs/api/metaflow/datatools/s3util"}},u=[{value:"S3Object Objects",id:"s3object-objects",children:[{value:"exists",id:"exists",children:[],level:4},{value:"downloaded",id:"downloaded",children:[],level:4},{value:"url",id:"url",children:[],level:4},{value:"prefix",id:"prefix",children:[],level:4},{value:"key",id:"key",children:[],level:4},{value:"path",id:"path",children:[],level:4},{value:"blob",id:"blob",children:[],level:4},{value:"text",id:"text",children:[],level:4},{value:"size",id:"size",children:[],level:4},{value:"has_info",id:"has_info",children:[],level:4},{value:"metadata",id:"metadata",children:[],level:4},{value:"content_type",id:"content_type",children:[],level:4},{value:"range_info",id:"range_info",children:[],level:4},{value:"last_modified",id:"last_modified",children:[],level:4}],level:2},{value:"S3 Objects",id:"s3-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"close",id:"close",children:[],level:4},{value:"list_paths",id:"list_paths",children:[],level:4},{value:"list_recursive",id:"list_recursive",children:[],level:4},{value:"info",id:"info",children:[],level:4},{value:"info_many",id:"info_many",children:[],level:4},{value:"get",id:"get",children:[],level:4},{value:"get_many",id:"get_many",children:[],level:4},{value:"get_recursive",id:"get_recursive",children:[],level:4},{value:"get_all",id:"get_all",children:[],level:4},{value:"put",id:"put",children:[],level:4},{value:"put_many",id:"put_many",children:[],level:4},{value:"put_files",id:"put_files",children:[],level:4}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"s3object-objects"},"S3Object Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class S3Object(object)\n")),(0,r.kt)("p",null,"This object represents a path or an object in S3,\nwith an optional local copy.\nGet or list calls return one or more of S3Objects."),(0,r.kt)("h4",{id:"exists"},"exists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | exists()\n")),(0,r.kt)("p",null,"Does this key correspond to an object in S3?"),(0,r.kt)("h4",{id:"downloaded"},"downloaded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | downloaded()\n")),(0,r.kt)("p",null,"Has this object been downloaded?"),(0,r.kt)("h4",{id:"url"},"url"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | url()\n")),(0,r.kt)("p",null,"S3 location of the object"),(0,r.kt)("h4",{id:"prefix"},"prefix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | prefix()\n")),(0,r.kt)("p",null,"Prefix requested that matches the object."),(0,r.kt)("h4",{id:"key"},"key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | key()\n")),(0,r.kt)("p",null,"Key corresponds to the key given to the get call that produced\nthis object. This may be a full S3 URL or a suffix based on what\nwas requested."),(0,r.kt)("h4",{id:"path"},"path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | path()\n")),(0,r.kt)("p",null,"Path to the local file corresponding to the object downloaded.\nThis file gets deleted automatically when a S3 scope exits.\nReturns None if this S3Object has not been downloaded."),(0,r.kt)("h4",{id:"blob"},"blob"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | blob()\n")),(0,r.kt)("p",null,"Contents of the object as a byte string.\nReturns None if this S3Object has not been downloaded."),(0,r.kt)("h4",{id:"text"},"text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | text()\n")),(0,r.kt)("p",null,"Contents of the object as a Unicode string.\nReturns None if this S3Object has not been downloaded."),(0,r.kt)("h4",{id:"size"},"size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | size()\n")),(0,r.kt)("p",null,"Size of the object in bytes.\nReturns None if the key does not correspond to an object in S3."),(0,r.kt)("h4",{id:"has_info"},"has","_","info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | has_info()\n")),(0,r.kt)("p",null,"Returns true if this S3Object contains the content-type or user-metadata.\nIf False, this means that content_type and range_info will not return the\nproper information"),(0,r.kt)("h4",{id:"metadata"},"metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | metadata()\n")),(0,r.kt)("p",null,"Returns a dictionary of user-defined metadata"),(0,r.kt)("h4",{id:"content_type"},"content","_","type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | content_type()\n")),(0,r.kt)("p",null,"Returns the content-type of the S3 object; if unknown, returns None"),(0,r.kt)("h4",{id:"range_info"},"range","_","info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | range_info()\n")),(0,r.kt)("p",null,"Returns a namedtuple containing the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- total_size: size in S3 of the object\n- request_offset: the starting offset in this S3Object\n- request_length: the length in this S3Object\n")),(0,r.kt)("h4",{id:"last_modified"},"last","_","modified"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | last_modified()\n")),(0,r.kt)("p",null,"Returns the last modified unix timestamp of the object, or None\nif not fetched."),(0,r.kt)("h2",{id:"s3-objects"},"S3 Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class S3(object)\n")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},' | __init__(tmproot=".", bucket=None, prefix=None, run=None, s3root=None, **kwargs)\n')),(0,r.kt)("p",null,"Initialize a new context for S3 operations. This object is used as\na context manager for a with statement.\nThere are two ways to initialize this object depending whether you want\nto bind paths to a Metaflow run or not."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"With a run object:\nrun: (required) Either a FlowSpec object (typically ","'","self","'",") or a\nRun object corresponding to an existing Metaflow run. These\nare used to add a version suffix in the S3 path.\nbucket: (optional) S3 bucket.\nprefix: (optional) S3 prefix."),(0,r.kt)("li",{parentName:"ol"},"Without a run object:\ns3root: (optional) An S3 root URL for all operations. If this is\nnot specified, all operations require a full S3 URL.\nThese options are supported in both the modes:\ntmproot: (optional) Root path for temporary files (default: ","'",".","'",")")),(0,r.kt)("h4",{id:"close"},"close"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | close()\n")),(0,r.kt)("p",null,"Delete all temporary files downloaded in this context."),(0,r.kt)("h4",{id:"list_paths"},"list","_","paths"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | list_paths(keys=None)\n")),(0,r.kt)("p",null,"List the next level of paths in S3. If multiple keys are\nspecified, listings are done in parallel. The returned\nS3Objects have .exists == False if the url refers to a\nprefix, not an existing S3 object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - (required) a list of suffixes for paths to list.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects (not downloaded)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"  Consider the following paths in S3:\nA/B/C\nD/E\nIn this case, list_paths(","['","A","'",", ","'","D","']","), returns ","['","A/B","'",", ","'","D/E","']",". The\nfirst S3Object has .exists == False, since it does not refer to an\nobject in S3. It is just a prefix."),(0,r.kt)("h4",{id:"list_recursive"},"list","_","recursive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | list_recursive(keys=None)\n")),(0,r.kt)("p",null,"List objects in S3 recursively. If multiple keys are\nspecified, listings are done in parallel. The returned\nS3Objects have always .exists == True, since they refer\nto existing objects in S3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - (required) a list of suffixes for paths to list.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects (not downloaded)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("p",null,"  Consider the following paths in S3:\nA/B/C\nD/E\nIn this case, list_recursive(","['","A","'",", ","'","D","']","), returns ","['","A/B/C","'",", ","'","D/E","']","."),(0,r.kt)("h4",{id:"info"},"info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | info(key=None, return_missing=False)\n")),(0,r.kt)("p",null,"Get information about a single object from S3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - (optional) a suffix identifying the object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_missing")," - (optional, default False) if set to True, do\nnot raise an exception for a missing key but\nreturn it as an S3Object with .exists == False.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  an S3Object containing information about the object. The\ndownloaded property will be false and exists will indicate whether\nor not the file exists"),(0,r.kt)("h4",{id:"info_many"},"info","_","many"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | info_many(keys, return_missing=False)\n")),(0,r.kt)("p",null,"Get information about many objects from S3 in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - (required) a list of suffixes identifying the objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_missing")," - (optional, default False) if set to True, do\nnot raise an exception for a missing key but\nreturn it as an S3Object with .exists == False.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects corresponding to the objects requested. The\ndownloaded property will be false and exists will indicate whether\nor not the file exists."),(0,r.kt)("h4",{id:"get"},"get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | get(key=None, return_missing=False, return_info=True)\n")),(0,r.kt)("p",null,"Get a single object from S3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - (optional) a suffix identifying the object. Can also be\nan object containing the properties ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"offset")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"length")," to specify a range query. ",(0,r.kt)("inlineCode",{parentName:"li"},"S3GetObject")," is such an object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_missing")," - (optional, default False) if set to True, do\nnot raise an exception for a missing key but\nreturn it as an S3Object with .exists == False."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_info")," - (optional, default True) if set to True, fetch the\ncontent-type and user metadata associated with the object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  an S3Object corresponding to the object requested."),(0,r.kt)("h4",{id:"get_many"},"get","_","many"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | get_many(keys, return_missing=False, return_info=True)\n")),(0,r.kt)("p",null,"Get many objects from S3 in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - (required) a list of suffixes identifying the objects. Each\nitem in the list can also be an object containing the properties\n",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"offset")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"length to specify a range query.\n"),"S3GetObject` is such an object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_missing")," - (optional, default False) if set to True, do\nnot raise an exception for a missing key but\nreturn it as an S3Object with .exists == False."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_info")," - (optional, default True) if set to True, fetch the\ncontent-type and user metadata associated with the object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects corresponding to the objects requested."),(0,r.kt)("h4",{id:"get_recursive"},"get","_","recursive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | get_recursive(keys, return_info=False)\n")),(0,r.kt)("p",null,"Get many objects from S3 recursively in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," - (required) a list of suffixes for paths to download\nrecursively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_info")," - (optional, default False) if set to True, fetch the\ncontent-type and user metadata associated with the object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects corresponding to the objects requested."),(0,r.kt)("h4",{id:"get_all"},"get","_","all"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | get_all(return_info=False)\n")),(0,r.kt)("p",null,"Get all objects from S3 recursively (in parallel). This request\nonly works if S3 is initialized with a run or a s3root prefix."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return_info")," - (optional, default False) if set to True, fetch the\ncontent-type and user metadata associated with the object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of S3Objects corresponding to the objects requested."),(0,r.kt)("h4",{id:"put"},"put"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | put(key, obj, overwrite=True, content_type=None, metadata=None)\n")),(0,r.kt)("p",null,"Put an object to S3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - (required) suffix for the object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"obj")," - (required) a bytes, string, or a unicode object to\nbe stored in S3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwrite")," - (optional) overwrites the key with obj, if it exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content_type")," - (optional) string representing the MIME type of the\nobject"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," - (optional) User metadata to store alongside the object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  an S3 URL corresponding to the object stored."),(0,r.kt)("h4",{id:"put_many"},"put","_","many"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | put_many(key_objs, overwrite=True)\n")),(0,r.kt)("p",null,"Put objects to S3 in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key_objs")," - (required) an iterator of (key, value) tuples. Value must\nbe a string, bytes, or a unicode object. Instead of\n(key, value) tuples, you can also pass any object that\nhas the following properties ","'","key","'",", ","'","value","'",", ","'","content_type","'",",\n","'","metadata","'"," like the S3PutObject for example. ","'","key","'"," and\n","'","value","'"," are required but others are optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwrite")," - (optional) overwrites the key with obj, if it exists")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of (key, S3 URL) tuples corresponding to the files sent."),(0,r.kt)("h4",{id:"put_files"},"put","_","files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," | put_files(key_paths, overwrite=True)\n")),(0,r.kt)("p",null,"Put files to S3 in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key_paths")," - (required) an iterator of (key, path) tuples. Instead of\n(key, path) tuples, you can also pass any object that\nhas the following properties ","'","key","'",", ","'","path","'",", ","'","content_type","'",",\n","'","metadata","'"," like the S3PutObject for example. ","'","key","'"," and\n","'","path","'"," are required but others are optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwrite")," - (optional) overwrites the key with obj, if it exists")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  a list of (key, S3 URL) tuples corresponding to the files sent."))}d.isMDXComponent=!0}}]);