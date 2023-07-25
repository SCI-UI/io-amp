export type LibraryCreateInput = {
  isRemote: boolean;
  name: string;
  process?: string | null;
  runtime: string;
  runtimeVersion: string;
  uri: string;
};
