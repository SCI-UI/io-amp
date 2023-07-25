import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  project?: ProjectListRelationFilter;
  username?: StringFilter;
};
