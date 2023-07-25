import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const ProcessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="External_API" source="externalApi" />
        <TextField label="ID" source="id" />
        <TextField label="Output_Schema" source="outputSchema" />
        <TextField label="UI" source="ui" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Workflow"
          source="workflow.id"
          reference="Workflow"
        >
          <TextField source={WORKFLOW_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
