import { User } from "../user/User";
import { Workflow } from "../workflow/Workflow";

export type Project = {
  collaborators?: Array<User>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  workflows?: Workflow | null;
};
