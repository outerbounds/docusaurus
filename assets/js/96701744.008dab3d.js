"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2750],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1621:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_label:"components",title:"plugins.cards.card_modules.components"},s=void 0,p={unversionedId:"api/metaflow/plugins/cards/card_modules/components",id:"api/metaflow/plugins/cards/card_modules/components",title:"plugins.cards.card_modules.components",description:"Artifact Objects",source:"@site/docs/api/metaflow/plugins/cards/card_modules/components.md",sourceDirName:"api/metaflow/plugins/cards/card_modules",slug:"/api/metaflow/plugins/cards/card_modules/components",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_modules/components",editUrl:"https://github.com/outerbounds/docusaurus/tree/main/docs/api/metaflow/plugins/cards/card_modules/components.md",tags:[],version:"current",frontMatter:{sidebar_label:"components",title:"plugins.cards.card_modules.components"},sidebar:"apiMetaflow",previous:{title:"card",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_modules/card"},next:{title:"renderer_tools",permalink:"/docusaurus/docs/api/metaflow/plugins/cards/card_modules/renderer_tools"}},m=[{value:"Artifact Objects",id:"artifact-objects",children:[{value:"Usage :",id:"usage-",children:[],level:3}],level:2},{value:"Table Objects",id:"table-objects",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Usage with other components:",id:"usage-with-other-components",children:[],level:3},{value:"Usage with dataframes:",id:"usage-with-dataframes",children:[],level:3}],level:2},{value:"Image Objects",id:"image-objects",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"<code>Image.from_matplotlib</code> :",id:"imagefrom_matplotlib-",children:[],level:4},{value:"<code>Image.from_pil_image</code> :",id:"imagefrom_pil_image-",children:[],level:4}],level:3}],level:2},{value:"Error Objects",id:"error-objects",children:[{value:"Parameters",id:"parameters-2",children:[],level:3},{value:"Usage",id:"usage-1",children:[],level:3}],level:2},{value:"Markdown Objects",id:"markdown-objects",children:[{value:"Parameters",id:"parameters-3",children:[],level:3},{value:"Usage",id:"usage-2",children:[],level:3}],level:2}],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"artifact-objects"},"Artifact Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Artifact(UserComponent)\n")),(0,o.kt)("p",null,"This class helps visualize any variable on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCard"),".\nThe variable will be truncated using ",(0,o.kt)("inlineCode",{parentName:"p"},"reprlib.Repr.repr()"),"."),(0,o.kt)("h3",{id:"usage-"},"Usage :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Artifact\n    from metaflow import current\n    x = dict(a=2,b=2..)\n    current.card.append(Artifact(x)) # Adds a name to the artifact\n    current.card.append(Artifact(x,&#x27;my artifact name&#x27;))\n")),(0,o.kt)("h2",{id:"table-objects"},"Table Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Table(UserComponent)\n")),(0,o.kt)("p",null,"This class helps visualize information in the form of a table in a ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCard"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," can take other ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCardComponent"),"s like ",(0,o.kt)("inlineCode",{parentName:"p"},"Artifact"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Image"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Markdown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," as sub elements."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," (List[List","[Any]","]) : The data to see in the table. Input is a 2d list that contains native types or ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowCardComponent"),"s like ",(0,o.kt)("inlineCode",{parentName:"li"},"Artifact"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Image"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Markdown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Error"),". Doesn","'","t play friendly with ",(0,o.kt)("inlineCode",{parentName:"li"},"dict")," as a sub-element. If passing a ",(0,o.kt)("inlineCode",{parentName:"li"},"dict"),", pass it via ",(0,o.kt)("inlineCode",{parentName:"li"},"Artifact"),". Example : ",(0,o.kt)("inlineCode",{parentName:"li"},"Table([[Artifact(my_dictionary)]])"),". If a non serializable object is passed as a sub-element then the table cell on the ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowCard")," will show up as ",(0,o.kt)("inlineCode",{parentName:"li"},"&lt;object&gt;"),". columns.  Defaults to [[]]."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")," (List","[str]",") : The names of the columns.  Defaults to [].")),(0,o.kt)("h3",{id:"usage-with-other-components"},"Usage with other components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Table, Artifact\n    from metaflow import current\n    x = dict(a=2,b=2..)\n    y = dict(b=3,c=2..)\n    # Can take other components as arguments\n    current.card.append(\n        Table([[\n            Artifact(x), # Adds a name to the artifact\n            Artifact(y), # Adds a name to the artifact\n        ]])\n    current.card.append(Artifact(x,&#x27;my artifact name&#x27;))\n")),(0,o.kt)("h3",{id:"usage-with-dataframes"},"Usage with dataframes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Table\n    from metaflow import current\n    # Can be created from a dataframe\n    import pandas as pd\n    import numpy as np\n    current.card.append(\n        Table.from_dataframe(\n            pandas.DataFrame(\n                np.random.randint(0, 100, size=(15, 4)),\n                columns=list(&quot;ABCD&quot;),\n            )\n        )\n    )\n")),(0,o.kt)("h2",{id:"image-objects"},"Image Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Image(UserComponent)\n")),(0,o.kt)("p",null,"This class helps visualize an image in a ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCard"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Image"),"s can be created direcly from ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PIL.Image"),"s or Matplotib figures."),(0,o.kt)("h3",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src")," (bytes) : The image source in ",(0,o.kt)("inlineCode",{parentName:"li"},"bytes"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label")," (str) : Label to the image show on the ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowCard"),".")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Image\n    from metaflow import current\n    import requests\n    current.card.append(\n        Image(\n            requests.get(&quot;https://www.gif-vif.com/hacker-cat.gif&quot;).content,\n            &quot;Image From Bytes&quot;,\n        ),\n    )\n")),(0,o.kt)("h4",{id:"imagefrom_matplotlib-"},(0,o.kt)("inlineCode",{parentName:"h4"},"Image.from_matplotlib")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Image\n    from metaflow import current\n    import pandas as pd\n    import numpy as np\n    current.card.append(\n        Image.from_matplotlib(\n            pandas.DataFrame(\n                np.random.randint(0, 100, size=(15, 4)),\n                columns=list(&quot;ABCD&quot;),\n            ).plot()\n        )\n    )\n")),(0,o.kt)("h4",{id:"imagefrom_pil_image-"},(0,o.kt)("inlineCode",{parentName:"h4"},"Image.from_pil_image")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Image\n    from metaflow import current\n    from PIL import Image as PILImage\n    current.card.append(\n        Image.from_pil_image(\n            PILImage.fromarray(np.random.randn(1024, 768), &quot;RGB&quot;),\n            &quot;From PIL Image&quot;,\n        ),\n    )\n")),(0,o.kt)("h2",{id:"error-objects"},"Error Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Error(UserComponent)\n")),(0,o.kt)("p",null,"This class helps visualize Error","'","s on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCard"),". It can help catch and print stack traces to errors that happen in ",(0,o.kt)("inlineCode",{parentName:"p"},"@step")," code."),(0,o.kt)("h3",{id:"parameters-2"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"exception")," (Exception) : The ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception")," to visualize. This value will be ",(0,o.kt)("inlineCode",{parentName:"li"},"repr"),"'","d before passed down to ",(0,o.kt)("inlineCode",{parentName:"li"},"MetaflowCard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title")," (str) : The title that will appear over the visualized  ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception"),".")),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Error\n    from metaflow import current\n    try:\n        ...\n        ...\n    except Exception as e:\n        current.card.append(\n            Error(e,&quot;Something misbehaved&quot;)\n        )\n    ...\n")),(0,o.kt)("h2",{id:"markdown-objects"},"Markdown Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Markdown(UserComponent)\n")),(0,o.kt)("p",null,"This class helps visualize Markdown on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetaflowCard")),(0,o.kt)("h3",{id:"parameters-3"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," (str) : A markdown string")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@card\n@step\ndef my_step(self):\n    from metaflow.cards import Markdown\n    from metaflow import current\n    current.card.append(\n        Markdown(&quot;# This is a header appended from @step code&quot;)\n    )\n    ...\n")))}d.isMDXComponent=!0}}]);