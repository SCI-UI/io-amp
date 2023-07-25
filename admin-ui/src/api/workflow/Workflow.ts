import { Process } from "../process/Process";
import { Project } from "../project/Project";

export type Workflow = {
  createdAt: Date;
  id: string;
  outputSchema: string | null;
  processes?: Array<Process>;
  project?: Project | null;
  updatedAt: Date;
};
