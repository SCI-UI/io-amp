import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  project?: ProjectUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
