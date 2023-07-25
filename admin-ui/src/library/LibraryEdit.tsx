import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const LibraryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="is_remote" source="isRemote" />
        <TextInput label="name" source="name" />
        <TextInput label="Process" source="process" />
        <TextInput label="runtime" source="runtime" />
        <TextInput label="runtime_version" source="runtimeVersion" />
        <TextInput label="uri" source="uri" />
      </SimpleForm>
    </Edit>
  );
};
