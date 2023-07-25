import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const LibraryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Libraries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_remote" source="isRemote" />
        <TextField label="name" source="name" />
        <TextField label="Process" source="process" />
        <TextField label="runtime" source="runtime" />
        <TextField label="runtime_version" source="runtimeVersion" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uri" source="uri" />
      </Datagrid>
    </List>
  );
};
