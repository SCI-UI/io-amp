import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const LibraryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="is_remote" source="isRemote" />
        <TextInput label="name" source="name" />
        <TextInput label="Process" source="process" />
        <TextInput label="runtime" source="runtime" />
        <TextInput label="runtime_version" source="runtimeVersion" />
        <TextInput label="uri" source="uri" />
      </SimpleForm>
    </Create>
  );
};
