import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const ProcessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
