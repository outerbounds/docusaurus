"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6598],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=n,f=h["".concat(i,".").concat(p)]||h[p]||u[p]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},415:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],l={sidebar_label:"datastore_storage",title:"datastore.datastore_storage"},i=void 0,d={unversionedId:"api/metaflow/datastore/datastore_storage",id:"api/metaflow/datastore/datastore_storage",title:"datastore.datastore_storage",description:"CloseAfterUse Objects",source:"@site/docs/api/metaflow/datastore/datastore_storage.md",sourceDirName:"api/metaflow/datastore",slug:"/api/metaflow/datastore/datastore_storage",permalink:"/docs/api/metaflow/datastore/datastore_storage",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/datastore/datastore_storage.md",tags:[],version:"current",frontMatter:{sidebar_label:"datastore_storage",title:"datastore.datastore_storage"},sidebar:"apiMetaflow",previous:{title:"content_addressed_store",permalink:"/docs/api/metaflow/datastore/content_addressed_store"},next:{title:"flow_datastore",permalink:"/docs/api/metaflow/datastore/flow_datastore"}},c=[{value:"CloseAfterUse Objects",id:"closeafteruse-objects",children:[],level:2},{value:"DataStoreStorage Objects",id:"datastorestorage-objects",children:[{value:"get_datastore_root_from_config",id:"get_datastore_root_from_config",children:[],level:4}],level:2},{value:"Parameters",id:"parameters",children:[{value:"get_datastore_root_from_location",id:"get_datastore_root_from_location",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-1",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Raises",id:"raises",children:[{value:"is_file",id:"is_file",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-2",children:[],level:2},{value:"Returns",id:"returns-1",children:[{value:"info_file",id:"info_file",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-3",children:[],level:2},{value:"Returns",id:"returns-2",children:[{value:"size_file",id:"size_file",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-4",children:[],level:2},{value:"Returns",id:"returns-3",children:[{value:"list_content",id:"list_content",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-5",children:[],level:2},{value:"Returns",id:"returns-4",children:[{value:"save_bytes",id:"save_bytes",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-6",children:[],level:2},{value:"Returns",id:"returns-5",children:[{value:"load_bytes",id:"load_bytes",children:[],level:4}],level:2},{value:"Parameters",id:"parameters-7",children:[],level:2},{value:"Returns",id:"returns-6",children:[],level:2}],u={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"closeafteruse-objects"},"CloseAfterUse Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CloseAfterUse(object)\n")),(0,o.kt)("p",null,"Class that can be used to wrap data and a closer (cleanup code).\nThis class should be used in a with statement and, when the with\nscope exits, ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," will be called on the closer object"),(0,o.kt)("h2",{id:"datastorestorage-objects"},"DataStoreStorage Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class DataStoreStorage(object)\n")),(0,o.kt)("p",null,"A DataStoreStorage defines the interface of communication between the\nhigher-level datastores and the actual storage system."),(0,o.kt)("p",null,"Both the ContentAddressedStore and the TaskDataStore use these methods to\nread/write/list from the actual storage system. These methods are meant to\nbe low-level; they are in a class to provide better abstraction but this\nclass itself is not meant to be initialized."),(0,o.kt)("h4",{id:"get_datastore_root_from_config"},"get","_","datastore","_","root","_","from","_","config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @classmethod\n | get_datastore_root_from_config(cls, echo, create_on_absent=True)\n")),(0,o.kt)("p",null,"Returns a default choice for datastore_root from metaflow_config"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"echo : function\nFunction to use to print out messages\ncreate_on_absent : bool, optional\nCreate the datastore root if it doesn","'","t exist, by default True"),(0,o.kt)("h4",{id:"get_datastore_root_from_location"},"get","_","datastore","_","root","_","from","_","location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | @classmethod\n | get_datastore_root_from_location(cls, path, flow_name)\n")),(0,o.kt)("p",null,"Extracts the datastore_root location from a path using\na content-addressed store."),(0,o.kt)("p",null,"NOTE: This leaks some detail of the content-addressed store so not ideal"),(0,o.kt)("p",null,"This method will raise an exception if the flow_name is not as expected"),(0,o.kt)("h2",{id:"parameters-1"},"Parameters"),(0,o.kt)("p",null,"path : str\nLocation from which to extract the datastore root value\nflow_name : str\nFlow name (for verification purposes)"),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"str\nThe datastore_root value that can be used to initialize an instance\nof this datastore storage."),(0,o.kt)("h2",{id:"raises"},"Raises"),(0,o.kt)("p",null,"DataException\nRaised if the path is not a valid path from this datastore."),(0,o.kt)("h4",{id:"is_file"},"is","_","file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | is_file(paths)\n")),(0,o.kt)("p",null,"Returns True or False depending on whether path refers to a valid\nfile-like object"),(0,o.kt)("p",null,"This method returns False if path points to a directory"),(0,o.kt)("h2",{id:"parameters-2"},"Parameters"),(0,o.kt)("p",null,"path : List","[string]","\nPath to the object"),(0,o.kt)("h2",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"List","[bool]"),(0,o.kt)("h4",{id:"info_file"},"info","_","file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | info_file(path)\n")),(0,o.kt)("p",null,"Returns a tuple where the first element is True or False depending on\nwhether path refers to a valid file-like object (like is_file) and the\nsecond element is a dictionary of metadata associated with the file or\nNone if the file does not exist or there is no metadata."),(0,o.kt)("h2",{id:"parameters-3"},"Parameters"),(0,o.kt)("p",null,"path : string\nPath to the object"),(0,o.kt)("h2",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,"tuple\n(bool, dict)"),(0,o.kt)("h4",{id:"size_file"},"size","_","file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | size_file(path)\n")),(0,o.kt)("p",null,"Returns file size at the indicated ","'","path","'",", or None if file can not be found."),(0,o.kt)("h2",{id:"parameters-4"},"Parameters"),(0,o.kt)("p",null,"path : string\nPath to the object"),(0,o.kt)("h2",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,"Optional\nint"),(0,o.kt)("h4",{id:"list_content"},"list","_","content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | list_content(paths)\n")),(0,o.kt)("p",null,"Lists the content of the datastore in the directory indicated by ","'","paths","'","."),(0,o.kt)("p",null,"This is similar to executing a ","'","ls","'","; it will only list the content one\nlevel down and simply returns the paths to the elements present as well\nas whether or not those elements are files (if not, they are further\ndirectories that can be traversed)"),(0,o.kt)("p",null,"The path returned always include the path passed in. As an example,\nif your filesystem contains the files: A/b.txt A/c.txt and the directory\nA/D, on return, you would get, for an input of ","['","A","']",":\n","[(","'","A/b.txt","'",", True), (","'","A/c.txt","'",", True), (","'","A/D","'",", False)]"),(0,o.kt)("h2",{id:"parameters-5"},"Parameters"),(0,o.kt)("p",null,"paths : List","[string]","\nDirectories to list"),(0,o.kt)("h2",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,"List","[list_content_result]","\nContent of the directory"),(0,o.kt)("h4",{id:"save_bytes"},"save","_","bytes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | save_bytes(path_and_bytes_iter, overwrite=False, len_hint=0)\n")),(0,o.kt)("p",null,"Creates objects and stores them in the datastore."),(0,o.kt)("p",null,"If overwrite is False, any existing object will not be overwritten and\nan error will be returned."),(0,o.kt)("p",null,"The objects are specified in an iterator over (path, obj) tuples where\nthe path is the path to store the object and the value is a file-like\nobject from which bytes can be read."),(0,o.kt)("h2",{id:"parameters-6"},"Parameters"),(0,o.kt)("p",null,"path_and_bytes_iter : Iterator","[(string, (RawIOBase|BufferedIOBase, metadata))]","\nIterator over objects to store; the first element in the outermost\ntuple is the path to store the bytes at. The second element in the\noutermost tuple is either a RawIOBase or BufferedIOBase or a tuple\nwhere the first element is a RawIOBase or BufferedIOBase and the\nsecond element is a dictionary of metadata to associate with the\nobject.\nKeys for the metadata must be ascii only string and elements\ncan be anything that can be converted to a string using json.dumps.\nIf you have no metadata, you can simply pass a RawIOBase or\nBufferedIOBase.\noverwrite : bool\nTrue if the objects can be overwritten. Defaults to False.\nlen_hint : int\nEstimated number of items produced by the iterator"),(0,o.kt)("h2",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,"None"),(0,o.kt)("h4",{id:"load_bytes"},"load","_","bytes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"}," | load_bytes(keys)\n")),(0,o.kt)("p",null,"Gets objects from the datastore"),(0,o.kt)("p",null,"Note that objects may be fetched in parallel so if order is important\nfor your consistency model, the caller is responsible for calling this\nmultiple times in the proper order."),(0,o.kt)("h2",{id:"parameters-7"},"Parameters"),(0,o.kt)("p",null,"keys : List","[string]","\nKeys to fetch"),(0,o.kt)("h2",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,"CloseAfterUse :\nA CloseAfterUse which should be used in a with statement. The data\nin the CloseAfterUse will be an iterator over (key, file_path, metadata)\ntuples. File_path and metadata will be None if the key was missing.\nMetadata will be None if no metadata is present; otherwise it is\na dictionary of metadata associated with the object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Note that the file at `file_path` may no longer be accessible outside of\nthe scope of the returned object.\n\nThe order of items in the list is not to be relied on (ie: rely on the key\nin the returned tuple and not on the order of the list). This function will,\nhowever, return as many elements as passed in even in the presence of\nduplicate keys.\n")))}h.isMDXComponent=!0}}]);