import { SortOrder } from "../../util/SortOrder";

export type LibraryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isRemote?: SortOrder;
  name?: SortOrder;
  process?: SortOrder;
  runtime?: SortOrder;
  runtimeVersion?: SortOrder;
  updatedAt?: SortOrder;
  uri?: SortOrder;
};
