"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4873],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_label:"card_client",title:"plugins.cards.card_client"},c=void 0,s={unversionedId:"api/metaflow/plugins/cards/card_client",id:"api/metaflow/plugins/cards/card_client",title:"plugins.cards.card_client",description:"Card Objects",source:"@site/docs/api/metaflow/plugins/cards/card_client.md",sourceDirName:"api/metaflow/plugins/cards",slug:"/api/metaflow/plugins/cards/card_client",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_client",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/plugins/cards/card_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"card_client",title:"plugins.cards.card_client"},sidebar:"apiMetaflow",previous:{title:"card_cli",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_cli"},next:{title:"card_datastore",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_datastore"}},d=[{value:"Card Objects",id:"card-objects",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"CardContainer Objects",id:"cardcontainer-objects",children:[{value:"Usage:",id:"usage-1",children:[{value:"get_cards",id:"get_cards",children:[],level:4}],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"card-objects"},"Card Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Card()\n")),(0,l.kt)("p",null,"The object which holds the html of a Metaflow card."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"card_container = get_cards(task)\n# This retrieves a `Card` instance\ncard = card_container[0]\n# View the HTML in browser\ncard.view()\n# Get the HTML of the card\nhtml = card.get()\n# calling the instance of `Card` inside a notebook cell will render the card as the output of a cell\ncard\n")),(0,l.kt)("h2",{id:"cardcontainer-objects"},"CardContainer Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class CardContainer()\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," like object that helps iterate through all the stored ",(0,l.kt)("inlineCode",{parentName:"p"},"Card"),"s."),(0,l.kt)("h3",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"card_container = get_cards(task)\n# Get all stored cards\ncards = list(card_container)\n# calling the instance of `CardContainer` inside a notebook will render all cards as the output of a cell\ncard_container\n")),(0,l.kt)("h4",{id:"get_cards"},"get","_","cards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"get_cards(task, id=None, type=None, follow_resumed=True)\n")),(0,l.kt)("p",null,"Get cards related to a Metaflow ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"task")," ",(0,l.kt)("em",{parentName:"li"},"str or ",(0,l.kt)("inlineCode",{parentName:"em"},"Task"))," - A metaflow ",(0,l.kt)("inlineCode",{parentName:"li"},"Task")," object or pathspec (flowname/runid/stepname/taskid)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," ",(0,l.kt)("em",{parentName:"li"},"str, optional")," - The type of card to retrieve. Defaults to None."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"follow_resumed")," ",(0,l.kt)("em",{parentName:"li"},"bool, optional")," - If a Task has been resumed and cloned, then setting this flag will resolve the card for the origin task. Defaults to True.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  ",(0,l.kt)("inlineCode",{parentName:"p"},"CardContainer")," : A ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," like object that holds ",(0,l.kt)("inlineCode",{parentName:"p"},"Card")," objects."))}p.isMDXComponent=!0}}]);