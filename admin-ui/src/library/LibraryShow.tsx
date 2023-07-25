import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const LibraryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_remote" source="isRemote" />
        <TextField label="name" source="name" />
        <TextField label="Process" source="process" />
        <TextField label="runtime" source="runtime" />
        <TextField label="runtime_version" source="runtimeVersion" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uri" source="uri" />
      </SimpleShowLayout>
    </Show>
  );
};
