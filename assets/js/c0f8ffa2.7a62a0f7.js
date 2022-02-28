"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4755],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={sidebar_label:"card_cli",title:"plugins.cards.card_cli"},c=void 0,i={unversionedId:"api/metaflow/plugins/cards/card_cli",id:"api/metaflow/plugins/cards/card_cli",title:"plugins.cards.card_cli",description:"resolve\\task\\from\\_pathspec",source:"@site/docs/api/metaflow/plugins/cards/card_cli.md",sourceDirName:"api/metaflow/plugins/cards",slug:"/api/metaflow/plugins/cards/card_cli",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_cli",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/cards/card_cli.md",tags:[],version:"current",frontMatter:{sidebar_label:"card_cli",title:"plugins.cards.card_cli"},sidebar:"apiMetaflow",previous:{title:"renderer_tools",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_modules/renderer_tools"},next:{title:"card_client",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_client"}},s=[{value:"resolve_task_from_pathspec",id:"resolve_task_from_pathspec",children:[],level:4},{value:"resolve_card",id:"resolve_card",children:[],level:4},{value:"view",id:"view",children:[],level:4},{value:"get",id:"get",children:[],level:4}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"resolve_task_from_pathspec"},"resolve","_","task","_","from","_","pathspec"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"resolve_task_from_pathspec(flow_name, pathspec)\n")),(0,l.kt)("p",null,"resolves a task object for the pathspec query on the CLI."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("p",null,"  flow_name : (str) : name of flow\npathspec (str) : can be ",(0,l.kt)("inlineCode",{parentName:"p"},"stepname")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"runid/stepname")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"runid/stepname/taskid")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  metaflow.Task | None"),(0,l.kt)("h4",{id:"resolve_card"},"resolve","_","card"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"resolve_card(ctx, pathspec, follow_resumed=True, hash=None, type=None, card_id=None, no_echo=False)\n")),(0,l.kt)("p",null,"Resolves the card path for a query."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctx")," - click context object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pathspec")," - pathspec can be ",(0,l.kt)("inlineCode",{parentName:"li"},"stepname")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"runid/stepname")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"runid/stepname/taskid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hash")," ",(0,l.kt)("em",{parentName:"li"},"optional")," - This is to specifically resolve the card via the hash. This is useful when there may be many card with same id or type for a pathspec.\ntype : type of card\ncard_id : ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," given to card\nno_echo : if set to ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," then supress logs about pathspec resolution.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Raises"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CardNotPresentException")," - No card could be found for the pathspec")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  (card_paths, card_datastore, taskpathspec) : Tuple[List","[str]",", CardDatastore, str]"),(0,l.kt)("h4",{id:"view"},"view"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@card.command()\n@click.argument("pathspec")\n@card_read_options_and_arguments\n@click.pass_context\nview(ctx, pathspec, hash=None, type=None, id=None, follow_resumed=False)\n')),(0,l.kt)("p",null,"View the HTML card in browser based on the pathspec.\\n\nThe pathspec can be of the form:\\n"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- &lt;stepname&gt;\\n\n- &lt;runid&gt;/&lt;stepname&gt;\\n\n- &lt;runid&gt;/&lt;stepname&gt;/&lt;taskid&gt;\\n\n")),(0,l.kt)("h4",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@card.command()\n@click.argument("pathspec")\n@click.argument("path", required=False)\n@card_read_options_and_arguments\n@click.pass_context\nget(ctx, pathspec, path, hash=None, type=None, id=None, follow_resumed=False)\n')),(0,l.kt)("p",null,"Get the HTML string of the card based on pathspec.\\n\nThe pathspec can be of the form:\\n"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- &lt;stepname&gt;\\n\n- &lt;runid&gt;/&lt;stepname&gt;\\n\n- &lt;runid&gt;/&lt;stepname&gt;/&lt;taskid&gt;\\n\n")),(0,l.kt)("p",null,"Save the card by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python myflow.py card get start a.html --type default\n")))}d.isMDXComponent=!0}}]);