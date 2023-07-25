import { Workflow } from "../workflow/Workflow";

export type Process = {
  createdAt: Date;
  externalApi: string | null;
  id: string;
  outputSchema: string | null;
  ui: string | null;
  updatedAt: Date;
  workflow?: Workflow | null;
};
