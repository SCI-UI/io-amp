import { UIWhereInput } from "./UIWhereInput";
import { UIOrderByInput } from "./UIOrderByInput";

export type UIFindManyArgs = {
  where?: UIWhereInput;
  orderBy?: Array<UIOrderByInput>;
  skip?: number;
  take?: number;
};
