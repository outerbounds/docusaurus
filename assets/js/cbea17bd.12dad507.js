"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5104],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5100:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_label:"tokenizer",title:"plugins.cards.card_modules.chevron.tokenizer"},c=void 0,p={unversionedId:"api/metaflow/plugins/cards/card_modules/chevron/tokenizer",id:"api/metaflow/plugins/cards/card_modules/chevron/tokenizer",title:"plugins.cards.card_modules.chevron.tokenizer",description:"grab\\_literal",source:"@site/docs/api/metaflow/plugins/cards/card_modules/chevron/tokenizer.md",sourceDirName:"api/metaflow/plugins/cards/card_modules/chevron",slug:"/api/metaflow/plugins/cards/card_modules/chevron/tokenizer",permalink:"/docs/api/metaflow/plugins/cards/card_modules/chevron/tokenizer",editUrl:"https://github.dev/outerbounds/docusaurus/blob/main/docs/api/metaflow/plugins/cards/card_modules/chevron/tokenizer.md",tags:[],version:"current",frontMatter:{sidebar_label:"tokenizer",title:"plugins.cards.card_modules.chevron.tokenizer"},sidebar:"apiMetaflow",previous:{title:"renderer",permalink:"/docs/api/metaflow/plugins/cards/card_modules/chevron/renderer"},next:{title:"basic",permalink:"/docs/api/metaflow/plugins/cards/card_modules/basic"}},u=[{value:"grab_literal",id:"grab_literal",children:[],level:4},{value:"l_sa_check",id:"l_sa_check",children:[],level:4},{value:"r_sa_check",id:"r_sa_check",children:[],level:4},{value:"parse_tag",id:"parse_tag",children:[],level:4},{value:"tokenize",id:"tokenize",children:[],level:4}],s={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"grab_literal"},"grab","_","literal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"grab_literal(template, l_del)\n")),(0,l.kt)("p",null,"Parse a literal from the template"),(0,l.kt)("h4",{id:"l_sa_check"},"l","_","sa","_","check"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"l_sa_check(template, literal, is_standalone)\n")),(0,l.kt)("p",null,"Do a preliminary check to see if a tag could be a standalone"),(0,l.kt)("h4",{id:"r_sa_check"},"r","_","sa","_","check"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"r_sa_check(template, tag_type, is_standalone)\n")),(0,l.kt)("p",null,"Do a final checkto see if a tag could be a standalone"),(0,l.kt)("h4",{id:"parse_tag"},"parse","_","tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"parse_tag(template, l_del, r_del)\n")),(0,l.kt)("p",null,"Parse a tag from a template"),(0,l.kt)("h4",{id:"tokenize"},"tokenize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'tokenize(template, def_ldel="{{", def_rdel="}}")\n')),(0,l.kt)("p",null,"Tokenize a mustache template"),(0,l.kt)("p",null,"Tokenizes a mustache template in a generator fashion,\nusing file-like objects. It also accepts a string containing\nthe template."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"template")," - a file-like object, or a string of a mustache template"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"def_ldel")," - The default left delimiter\n(",'"',"{{",'"'," by default, as in spec compliant mustache)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"def_rdel")," - The default right delimiter\n(",'"',"}}",'"'," by default, as in spec compliant mustache)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  A generator of mustache tags in the form of a tuple"),(0,l.kt)("p",null,"  -- (tag_type, tag_key)"),(0,l.kt)("p",null,"  Where tag_type is one of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"literal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"section")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"inverted section")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"end")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"partial")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"no escape"),(0,l.kt)("p",{parentName:"li"},"And tag_key is either the key or in the case of a literal tag,\nthe literal itself."))))}d.isMDXComponent=!0}}]);