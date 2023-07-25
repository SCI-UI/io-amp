export type Library = {
  createdAt: Date;
  id: string;
  isRemote: boolean;
  name: string;
  process: string | null;
  runtime: string;
  runtimeVersion: string;
  updatedAt: Date;
  uri: string;
};
