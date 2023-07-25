import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProjectCreateInput = {
  collaborators?: UserCreateNestedManyWithoutProjectsInput;
  name: string;
  workflows?: WorkflowWhereUniqueInput | null;
};
