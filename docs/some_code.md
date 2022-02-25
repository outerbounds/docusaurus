# Code Documentation example

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
