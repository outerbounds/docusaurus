---
sidebar_label: renderer
title: plugins.cards.card_modules.chevron.renderer
---

#### render

```python
render(template="", data={}, partials_path=".", partials_ext="mustache", partials_dict={}, padding="", def_ldel="{{", def_rdel="}}", scopes=None, warn=False, keep=False)
```

Render a mustache template.

Renders a mustache template with a data scope and partial capability.
Given the file structure...
╷
├─╼ main.py
├─╼ main.ms
└─┮ partials
└── part.ms

then main.py would make the following call:

render(open(&#x27;main.ms&#x27;, &#x27;r&#x27;), {...}, &#x27;partials&#x27;, &#x27;ms&#x27;)


**Arguments**:

  
- `template` - A file-like object or a string containing the template
  
- `data` - A python dictionary with your data scope
  
- `partials_path` - The path to where your partials are stored
  If set to None, then partials won&#x27;t be loaded from the file system
  (defaults to &#x27;.&#x27;)
  
- `partials_ext` - The extension that you want the parser to look for
  (defaults to &#x27;mustache&#x27;)
  
- `partials_dict` - A python dictionary which will be search for partials
  before the filesystem is. {&#x27;include&#x27;: &#x27;foo&#x27;} is the same
  as a file called include.mustache
  (defaults to {})
  
- `padding` - This is for padding partials, and shouldn&#x27;t be used
  (but can be if you really want to)
  
- `def_ldel` - The default left delimiter
  (&quot;{{&quot; by default, as in spec compliant mustache)
  
- `def_rdel` - The default right delimiter
  (&quot;}}&quot; by default, as in spec compliant mustache)
  
- `scopes` - The list of scopes that get_key will look through
  
- `warn` - Issue a warning to stderr when a template substitution isn&#x27;t found in the data
  
- `keep` - Keep unreplaced tags when a template substitution isn&#x27;t found in the data
  
  

**Returns**:

  
  A string containing the rendered template.

