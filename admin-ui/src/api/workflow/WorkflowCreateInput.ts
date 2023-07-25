import { ProcessCreateNestedManyWithoutWorkflowsInput } from "./ProcessCreateNestedManyWithoutWorkflowsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type WorkflowCreateInput = {
  outputSchema?: string | null;
  processes?: ProcessCreateNestedManyWithoutWorkflowsInput;
  project?: ProjectWhereUniqueInput | null;
};
