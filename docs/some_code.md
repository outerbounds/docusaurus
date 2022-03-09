import TerminalWindow from "/src/components/TerminalWindow";
import Output from "/src/components/Output/Output";
import Output2 from "/src/components/Output2/Output2";
import OutputCollapse from "/src/components/OutputCollapse";
import Output3 from "/src/components/Output3/Output3";

# Code Documentation example CD

## Example 1

<DocSection type="class" name="Run" module="metaflow.client.core" link="metaflow/client/core.py#L1512">
    <SigArgSection>
        <SigArg name="pathspec" default="None" />
        <SigArg name="attempt" default="None" />
        <SigArg name="_object" default="None" />
        <SigArg name="_parent" default="None" />
        <SigArg name="_namespace_check" default="True" />
    </SigArgSection>
    <Description summary="A Run represents an execution of a Flow"
        extended_summary="As such, it contains all Steps associated with the flow." />
    <ParamSection name="Attributes">
        <Parameter name="data" type="MetaflowData" desc="Container of all data artifacts produced by this run" />
        <Parameter name="successful" type="boolean" desc="True if the run successfully completed" />
        <Parameter name="finished" type="boolean" desc="True if the run completed" />
        <Parameter name="finished_at" type="datetime" desc="Time this run finished" />
        <Parameter name="code" type="MetaflowCode" desc="Code package for this run (if present)" />
        <Parameter name="end_task" type="Task" desc="Task for the end step (if it is present already)" />
    </ParamSection>
</DocSection>

## Example 2

<DocSection type="class" name="FlowSpec" module="metaflow.flowspec" link="metaflow/flowspec.py#L48">
<SigArgSection>
<SigArg name="use_cli" default="True" />
</SigArgSection>
<Description summary="Main class from which all Flows should inherit." />
<ParamSection name="Attributes">
	<Parameter name="script_name" />
	<Parameter name="index" />
	<Parameter name="input" />
</ParamSection>
</DocSection>

## Output

```bash
    cuba
```

```
    4
```

## Output with TerminalWindow

```bash
    cuba
```

<TerminalWindow>

```
    4
```

</TerminalWindow>

```bash
    ls -lart
```

<TerminalWindow>

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</TerminalWindow>

## Output with Indent

```bash
    cuba
```

<Output>

```
    4
```

</Output>

```bash
    ls -lart
```

<Output>

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</Output>

## Output with Label

```bash
    cuba
```

<Output2>

```
    4
```

</Output2>

```bash
    ls -lart
```

<Output2>

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</Output2>

## Output with collapse

```bash
    cuba
```

<details>
<summary>Output</summary>

```
    4
```

</details>

```bash
    ls -lart
```

<details>
<summary>Output</summary>

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</details>

## Styled output with collapse

```bash
    cuba
```

<OutputCollapse summary="Output">

```
    4
```

</OutputCollapse>

---

```bash
    ls -lart
```

<OutputCollapse summary="Output">

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</OutputCollapse>

## Output with Indent and no styling

```bash
cuba
```

<Output3>

```
4
```

</Output3>

```bash
ls -lart
```

<Output3>

```bash
total 800
-rw-r--r--    1 brendan  staff     770 Feb 15 12:51 README.md
-rw-r--r--    1 brendan  staff      89 Feb 15 12:51 babel.config.js
drwxr-xr-x  743 brendan  staff   23776 Feb 16 12:09 node_modules
-rw-r--r--    1 brendan  staff  372382 Feb 16 12:09 yarn.lock
-rw-r--r--    1 brendan  staff    1048 Feb 16 12:09 package.json
drwxr-xr-x   35 brendan  staff    1120 Feb 17 09:13 ..
drwxr-xr-x    7 brendan  staff     224 Feb 23 08:43 static
-rw-r--r--    1 brendan  staff    2396 Feb 23 08:57 docusaurus.config.js
-rw-r--r--@   1 brendan  staff    6148 Feb 24 06:45 .DS_Store
-rw-r--r--    1 brendan  staff    7174 Feb 24 06:53 sidebars.js
-rw-r--r--    1 brendan  staff      44 Feb 24 07:40 .gitignore
drwxr-xr-x   17 brendan  staff     544 Feb 24 07:40 .
drwxr-xr-x   15 brendan  staff     480 Feb 24 12:10 docs
drwxr-xr-x    6 brendan  staff     192 Feb 24 16:28 src
drwxr-xr-x   17 brendan  staff     544 Feb 25 11:08 .docusaurus
drwxr-xr-x   13 brendan  staff     416 Feb 25 11:08 build
drwxr-xr-x   13 brendan  staff     416 Feb 27 09:30 .git
```

</Output3>
