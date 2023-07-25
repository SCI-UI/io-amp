import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  createdAt?: SortOrder;
  externalApi?: SortOrder;
  id?: SortOrder;
  outputSchema?: SortOrder;
  ui?: SortOrder;
  updatedAt?: SortOrder;
  workflowId?: SortOrder;
};
