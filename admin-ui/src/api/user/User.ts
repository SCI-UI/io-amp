import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  project?: Array<Project>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
