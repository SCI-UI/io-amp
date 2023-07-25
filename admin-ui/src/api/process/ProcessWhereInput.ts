import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type ProcessWhereInput = {
  externalApi?: StringNullableFilter;
  id?: StringFilter;
  outputSchema?: StringNullableFilter;
  ui?: StringNullableFilter;
  workflow?: WorkflowWhereUniqueInput;
};
