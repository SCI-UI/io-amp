import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  outputSchema?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
