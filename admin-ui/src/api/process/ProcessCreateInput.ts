import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProcessCreateInput = {
  externalApi?: string | null;
  outputSchema?: string | null;
  ui?: string | null;
  workflow?: WorkflowWhereUniqueInput | null;
};
