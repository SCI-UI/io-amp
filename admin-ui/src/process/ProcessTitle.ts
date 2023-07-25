import { Process as TProcess } from "../api/process/Process";

export const PROCESS_TITLE_FIELD = "externalApi";

export const ProcessTitle = (record: TProcess): string => {
  return record.externalApi || String(record.id);
};
