"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2275],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6270:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_label:"component_serializer",title:"plugins.cards.component_serializer"},c=void 0,s={unversionedId:"api/metaflow/plugins/cards/component_serializer",id:"api/metaflow/plugins/cards/component_serializer",title:"plugins.cards.component_serializer",description:"CardComponentCollector Objects",source:"@site/docs/api/metaflow/plugins/cards/component_serializer.md",sourceDirName:"api/metaflow/plugins/cards",slug:"/api/metaflow/plugins/cards/component_serializer",permalink:"/docs/api/metaflow/plugins/cards/component_serializer",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/cards/component_serializer.md",tags:[],version:"current",frontMatter:{sidebar_label:"component_serializer",title:"plugins.cards.component_serializer"},sidebar:"apiMetaflow",previous:{title:"card_datastore",permalink:"/docs/api/metaflow/plugins/cards/card_datastore"},next:{title:"exception",permalink:"/docs/api/metaflow/plugins/cards/exception"}},p=[{value:"CardComponentCollector Objects",id:"cardcomponentcollector-objects",children:[{value:"Usage with <code>current</code>",id:"usage-with-current",children:[],level:3},{value:"Main Usage TLDR",id:"main-usage-tldr",children:[{value:"get",id:"get",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cardcomponentcollector-objects"},"CardComponentCollector Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class CardComponentCollector()\n")),(0,i.kt)("p",null,"This class helps collect ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaflowCardComponent"),"s during runtime execution"),(0,i.kt)("h3",{id:"usage-with-current"},"Usage with ",(0,i.kt)("inlineCode",{parentName:"h3"},"current")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"current.card")," is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"CardComponentCollector")),(0,i.kt)("h3",{id:"main-usage-tldr"},"Main Usage TLDR"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"current.card.append")," customizes the default editable card."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Only one card can be default editable in a step."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","The card class must have ",(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW_USER_COMPONENTS=True")," to be considered default editable.",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Classes with ",(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW_USER_COMPONENTS=False")," are never default editable."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","The user can specify an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," argument to a card, in which case the card is editable through ",(0,i.kt)("inlineCode",{parentName:"li"},"current.card[id].append"),".",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A card with an id can be also default editable, if there are no other cards that are eligible to be default editable."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","If multiple default-editable cards exist but only one card doesn\u2019t have an id, the card without an id is considered to be default editable."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","If we can\u2019t resolve a single default editable card through the above rules, ",(0,i.kt)("inlineCode",{parentName:"li"},"current.card"),".append calls show a warning but the call doesn\u2019t fail."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A card that is not default editable can be still edited through:",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","its ",(0,i.kt)("inlineCode",{parentName:"li"},"current.card[&#x27;myid&#x27;]")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","by looking it up by its type, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"current.card.get(type=\u2019pytorch\u2019)"),".")))),(0,i.kt)("h4",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | get(type=None)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\ngets all the components arrays for a card ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),".\nSince one ",(0,i.kt)("inlineCode",{parentName:"p"},"@step")," can have many ",(0,i.kt)("inlineCode",{parentName:"p"},"@card")," decorators, many decorators can have the same type. That is why this function returns a list of lists."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," ",(0,i.kt)("em",{parentName:"li"},"[str]",", optional")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," of MetaflowCard. Defaults to None."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Returns")," - will return empty ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is None or not found\nList[List","[MetaflowCardComponent]","]")))}u.isMDXComponent=!0}}]);