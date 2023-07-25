import { UI as TUI } from "../api/ui/UI";

export const UI_TITLE_FIELD = "id";

export const UITitle = (record: TUI): string => {
  return record.id || String(record.id);
};
