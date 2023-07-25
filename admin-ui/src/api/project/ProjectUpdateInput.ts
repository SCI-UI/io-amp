import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProjectUpdateInput = {
  collaborators?: UserUpdateManyWithoutProjectsInput;
  name?: string;
  workflows?: WorkflowWhereUniqueInput | null;
};
