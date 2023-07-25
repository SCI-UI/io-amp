import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const ProcessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="External_API" source="externalApi" />
        <TextInput label="Output_Schema" source="outputSchema" />
        <TextInput label="UI" source="ui" />
        <ReferenceInput
          source="workflow.id"
          reference="Workflow"
          label="Workflow"
        >
          <SelectInput optionText={WorkflowTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
