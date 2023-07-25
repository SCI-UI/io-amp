import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProjectWhereInput = {
  collaborators?: UserListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  workflows?: WorkflowWhereUniqueInput;
};
