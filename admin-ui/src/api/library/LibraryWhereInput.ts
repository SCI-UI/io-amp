import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LibraryWhereInput = {
  id?: StringFilter;
  isRemote?: BooleanFilter;
  name?: StringFilter;
  process?: StringNullableFilter;
  runtime?: StringFilter;
  runtimeVersion?: StringFilter;
  uri?: StringFilter;
};
