import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProcessUpdateInput = {
  externalApi?: string | null;
  outputSchema?: string | null;
  ui?: string | null;
  workflow?: WorkflowWhereUniqueInput | null;
};
