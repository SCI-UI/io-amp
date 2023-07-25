import { Workflow as TWorkflow } from "../api/workflow/Workflow";

export const WORKFLOW_TITLE_FIELD = "outputSchema";

export const WorkflowTitle = (record: TWorkflow): string => {
  return record.outputSchema || String(record.id);
};
