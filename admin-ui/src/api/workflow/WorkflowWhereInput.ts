import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProcessListRelationFilter } from "../process/ProcessListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type WorkflowWhereInput = {
  id?: StringFilter;
  outputSchema?: StringNullableFilter;
  processes?: ProcessListRelationFilter;
  project?: ProjectWhereUniqueInput;
};
