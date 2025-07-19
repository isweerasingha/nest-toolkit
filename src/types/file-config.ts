export type CommandFileConfig = {
  files: FileConfig[];
};

export type FileConfig = {
  templateName: string;
  templatePath?: string;
  destinationPath: string;
  outputName: string;
};
