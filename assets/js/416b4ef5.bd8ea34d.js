"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9138],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9074:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_label:"util",title:"util"},u=void 0,c={unversionedId:"api/metaflow/util",id:"api/metaflow/util",title:"util",description:"all\\_equal",source:"@site/docs/api/metaflow/util.md",sourceDirName:"api/metaflow",slug:"/api/metaflow/util",permalink:"/docs/api/metaflow/util",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/util.md",tags:[],version:"current",frontMatter:{sidebar_label:"util",title:"util"},sidebar:"apiMetaflow",previous:{title:"unbounded_foreach",permalink:"/docs/api/metaflow/unbounded_foreach"},next:{title:"vendor",permalink:"/docs/api/metaflow/vendor"}},s=[{value:"all_equal",id:"all_equal",children:[],level:4},{value:"url_quote",id:"url_quote",children:[],level:4},{value:"url_unquote",id:"url_unquote",children:[],level:4},{value:"is_stringish",id:"is_stringish",children:[],level:4},{value:"to_fileobj",id:"to_fileobj",children:[],level:4},{value:"to_unicode",id:"to_unicode",children:[],level:4},{value:"to_bytes",id:"to_bytes",children:[],level:4},{value:"get_username",id:"get_username",children:[],level:4},{value:"get_object_package_version",id:"get_object_package_version",children:[],level:4},{value:"which",id:"which",children:[],level:4},{value:"to_pascalcase",id:"to_pascalcase",children:[],level:4}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"all_equal"},"all","_","equal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"all_equal(it)\n")),(0,o.kt)("p",null,"Return True if all elements of the given iterator are equal."),(0,o.kt)("h4",{id:"url_quote"},"url","_","quote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"url_quote(url)\n")),(0,o.kt)("p",null,"Encode a unicode URL to a safe byte string"),(0,o.kt)("h4",{id:"url_unquote"},"url","_","unquote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"url_unquote(url_bytes)\n")),(0,o.kt)("p",null,"Decode a byte string encoded with url_quote to a unicode URL"),(0,o.kt)("h4",{id:"is_stringish"},"is","_","stringish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"is_stringish(x)\n")),(0,o.kt)("p",null,"Returns true if the object is a unicode or a bytes object"),(0,o.kt)("h4",{id:"to_fileobj"},"to","_","fileobj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"to_fileobj(x)\n")),(0,o.kt)("p",null,"Convert any string-line object to a byte-returning fileobj"),(0,o.kt)("h4",{id:"to_unicode"},"to","_","unicode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"to_unicode(x)\n")),(0,o.kt)("p",null,"Convert any object to a unicode object"),(0,o.kt)("h4",{id:"to_bytes"},"to","_","bytes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"to_bytes(x)\n")),(0,o.kt)("p",null,"Convert any object to a byte string"),(0,o.kt)("h4",{id:"get_username"},"get","_","username"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"get_username()\n")),(0,o.kt)("p",null,"Return the name of the current user, or None if the current user\ncould not be determined."),(0,o.kt)("h4",{id:"get_object_package_version"},"get","_","object","_","package","_","version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"get_object_package_version(obj)\n")),(0,o.kt)("p",null,"Return the top level package name and package version that defines the\nclass of the given object."),(0,o.kt)("h4",{id:"which"},"which"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"which(cmd, mode=os.F_OK | os.X_OK, path=None)\n")),(0,o.kt)("p",null,"Given a command, mode, and a PATH string, return the path which\nconforms to the given mode on the PATH, or None if there is no such\nfile.\n",(0,o.kt)("inlineCode",{parentName:"p"},"mode")," defaults to os.F_OK | os.X_OK. ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," defaults to the result\nof os.environ.get(",'"',"PATH",'"',"), or can be overridden with a custom search\npath.\nNote: This function was backported from the Python 3 source code."),(0,o.kt)("h4",{id:"to_pascalcase"},"to","_","pascalcase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"to_pascalcase(obj)\n")),(0,o.kt)("p",null,"Convert all keys of a json to pascal case."))}d.isMDXComponent=!0}}]);