import { ProcessUpdateManyWithoutWorkflowsInput } from "./ProcessUpdateManyWithoutWorkflowsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type WorkflowUpdateInput = {
  outputSchema?: string | null;
  processes?: ProcessUpdateManyWithoutWorkflowsInput;
  project?: ProjectWhereUniqueInput | null;
};
