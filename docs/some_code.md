import TerminalWindow from "/src/components/TerminalWindow";
import Output from "/src/components/Output/Output";
import Output2 from "/src/components/Output2/Output2";
import OutputCollapse from "/src/components/OutputCollapse";
import Output3 from "/src/components/Output3/Output3";
import Output4 from "/src/components/Output4/Output4";

# Code Documentation example (stripe)

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

import {DocSection2, SigArgSection2, SigArg2, Description2, ParamSection2, Parameter2} from "/src/components/DocSection2"

# Code Documentation example (numpy)

## Example 1

<DocSection2 type="class" name="Run" module="metaflow.client.core" link="metaflow/client/core.py#L1512">
    <SigArgSection2>
        <SigArg2 name="pathspec" default="None" />
        <SigArg2 name="attempt" default="None" />
        <SigArg2 name="_object" default="None" />
        <SigArg2 name="_parent" default="None" />
        <SigArg2 name="_namespace_check" default="True" />
    </SigArgSection2>
    <Description2 summary="A Run represents an execution of a Flow"
        extended_summary="As such, it contains all Steps associated with the flow." />
    <ParamSection2 name="Attributes">
        <Parameter2 name="data" type="MetaflowData" desc="Container of all data artifacts produced by this run" />
        <Parameter2 name="successful" type="boolean" desc="True if the run successfully completed" />
        <Parameter2 name="finished" type="boolean" desc="True if the run completed" />
        <Parameter2 name="finished_at" type="datetime" desc="Time this run finished" />
        <Parameter2 name="code" type="MetaflowCode" desc="Code package for this run (if present)" />
        <Parameter2 name="end_task" type="Task" desc="Task for the end step (if it is present already)" />
    </ParamSection2>
</DocSection2>

## Example 2

<DocSection2 type="class" name="FlowSpec" module="metaflow.flowspec" link="metaflow/flowspec.py#L48">
<SigArgSection2>
<SigArg2 name="use_cli" default="True" />
</SigArgSection2>
<Description2 summary="Main class from which all Flows should inherit." />
<ParamSection2 name="Attributes">
	<Parameter2 name="script_name" />
	<Parameter2 name="index" />
	<Parameter2 name="input" />
</ParamSection2>
</DocSection2>

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

## HTML Output

<Output3 html='<div>

<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>time_in_hospital</th>
      <th>num_lab_procedures</th>
      <th>num_procedures</th>
      <th>num_medications</th>
      <th>number_outpatient</th>
      <th>number_emergency</th>
      <th>number_inpatient</th>
      <th>number_diagnoses</th>
      <th>race_Caucasian</th>
      <th>race_AfricanAmerican</th>
      <th>...</th>
      <th>citoglipton_No</th>
      <th>insulin_No</th>
      <th>glyburide-metformin_No</th>
      <th>glipizide-metformin_No</th>
      <th>glimepiride-pioglitazone_No</th>
      <th>metformin-rosiglitazone_No</th>
      <th>metformin-pioglitazone_No</th>
      <th>change_No</th>
      <th>diabetesMed_Yes</th>
      <th>readmitted</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>14</td>
      <td>41</td>
      <td>0</td>
      <td>11</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>6</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>30</td>
      <td>0</td>
      <td>12</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>66</td>
      <td>0</td>
      <td>22</td>
      <td>1</td>
      <td>0</td>
      <td>2</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>63</td>
      <td>0</td>
      <td>8</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>8</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>40</td>
      <td>0</td>
      <td>6</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>24995</th>
      <td>2</td>
      <td>85</td>
      <td>0</td>
      <td>12</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>0</td>
    </tr>
    <tr>
      <th>24996</th>
      <td>5</td>
      <td>35</td>
      <td>2</td>
      <td>15</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24997</th>
      <td>3</td>
      <td>10</td>
      <td>1</td>
      <td>23</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>4</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24998</th>
      <td>8</td>
      <td>69</td>
      <td>3</td>
      <td>41</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24999</th>
      <td>3</td>
      <td>48</td>
      <td>1</td>
      <td>17</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
<p>25000 rows × 65 columns</p>
</div>
'/>

## HTML Output from children

<Output4>

```html
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>time_in_hospital</th>
      <th>num_lab_procedures</th>
      <th>num_procedures</th>
      <th>num_medications</th>
      <th>number_outpatient</th>
      <th>number_emergency</th>
      <th>number_inpatient</th>
      <th>number_diagnoses</th>
      <th>race_Caucasian</th>
      <th>race_AfricanAmerican</th>
      <th>...</th>
      <th>citoglipton_No</th>
      <th>insulin_No</th>
      <th>glyburide-metformin_No</th>
      <th>glipizide-metformin_No</th>
      <th>glimepiride-pioglitazone_No</th>
      <th>metformin-rosiglitazone_No</th>
      <th>metformin-pioglitazone_No</th>
      <th>change_No</th>
      <th>diabetesMed_Yes</th>
      <th>readmitted</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>14</td>
      <td>41</td>
      <td>0</td>
      <td>11</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>6</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>30</td>
      <td>0</td>
      <td>12</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>66</td>
      <td>0</td>
      <td>22</td>
      <td>1</td>
      <td>0</td>
      <td>2</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>63</td>
      <td>0</td>
      <td>8</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>8</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>40</td>
      <td>0</td>
      <td>6</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>24995</th>
      <td>2</td>
      <td>85</td>
      <td>0</td>
      <td>12</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>0</td>
    </tr>
    <tr>
      <th>24996</th>
      <td>5</td>
      <td>35</td>
      <td>2</td>
      <td>15</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>False</td>
      <td>True</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24997</th>
      <td>3</td>
      <td>10</td>
      <td>1</td>
      <td>23</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>4</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24998</th>
      <td>8</td>
      <td>69</td>
      <td>3</td>
      <td>41</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>True</td>
      <td>1</td>
    </tr>
    <tr>
      <th>24999</th>
      <td>3</td>
      <td>48</td>
      <td>1</td>
      <td>17</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>9</td>
      <td>True</td>
      <td>False</td>
      <td>...</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>True</td>
      <td>False</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
<p>25000 rows × 65 columns</p>
</div>
```

</Output4>

## HTML Output in iframe

<iframe>

<strong class="bob">bad</strong>

</iframe>