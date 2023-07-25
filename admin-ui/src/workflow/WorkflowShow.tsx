import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKFLOW_TITLE_FIELD } from "./WorkflowTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const WorkflowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Output_Schema" source="outputSchema" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Process"
          target="workflowId"
          label="Processes"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
