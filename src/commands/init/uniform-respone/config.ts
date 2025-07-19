import { CommandFileConfig } from "@/types/file-config";

export const uniformResponseConfig: CommandFileConfig = {
  files: [
    {
      templateName: "index",
      destinationPath: "libs/nest-uniform-response/src",
      outputName: "index.ts",
    },
    {
      templateName: "nest-uniform-response.module",
      destinationPath: "libs/nest-uniform-response/src",
      outputName: "nest-uniform-response.module.ts",
    },
    {
      templateName: "nest-uniform-response.service",
      destinationPath: "libs/nest-uniform-response/src",
      outputName: "nest-uniform-response.service.ts",
    },
    {
      templateName: "error",
      templatePath: "templates/lib/config",
      destinationPath: "libs/nest-uniform-response/src/lib/config",
      outputName: "error.ts",
    },
    {
      templateName: "providers.constant",
      templatePath: "templates/lib/constants",
      destinationPath: "libs/nest-uniform-response/src/lib/constants",
      outputName: "providers.constant.ts",
    },
    {
      templateName: "json-response-config.decorator",
      templatePath: "templates/lib/decorators",
      destinationPath: "libs/nest-uniform-response/src/lib/decorators",
      outputName: "json-response-config.decorator.ts",
    },
    {
      templateName: "json-response.decorator",
      templatePath: "templates/lib/decorators",
      destinationPath: "libs/nest-uniform-response/src/lib/decorators",
      outputName: "json-response.decorator.ts",
    },
    {
      templateName: "raw-response.decorator",
      templatePath: "templates/lib/decorators",
      destinationPath: "libs/nest-uniform-response/src/lib/decorators",
      outputName: "raw-response.decorator.ts",
    },
    {
      templateName: "base.error",
      templatePath: "templates/lib/errors",
      destinationPath: "libs/nest-uniform-response/src/lib/errors",
      outputName: "base.error.ts",
    },
    {
      templateName: "exception.filter",
      templatePath: "templates/lib/filters",
      destinationPath: "libs/nest-uniform-response/src/lib/filters",
      outputName: "exception.filter.ts",
    },
    {
      templateName: "response.interceptor",
      templatePath: "templates/lib/interceptors",
      destinationPath: "libs/nest-uniform-response/src/lib/interceptors",
      outputName: "response.interceptor.ts",
    },
    {
      templateName: "config.provider",
      templatePath: "templates/lib/providers",
      destinationPath: "libs/nest-uniform-response/src/lib/providers",
      outputName: "config.provider.ts",
    },
    {
      templateName: "error-page.type",
      templatePath: "templates/lib/types",
      destinationPath: "libs/nest-uniform-response/src/lib/types",
      outputName: "error-page.type.ts",
    },
    {
      templateName: "exception.types",
      templatePath: "templates/lib/types",
      destinationPath: "libs/nest-uniform-response/src/lib/types",
      outputName: "exception.types.ts",
    },
    {
      templateName: "json.response.types",
      templatePath: "templates/lib/types",
      destinationPath: "libs/nest-uniform-response/src/lib/types",
      outputName: "json.response.types.ts",
    },
    {
      templateName: "module-options.type",
      templatePath: "templates/lib/types",
      destinationPath: "libs/nest-uniform-response/src/lib/types",
      outputName: "module-options.type.ts",
    },
    {
      templateName: "providers.types",
      templatePath: "templates/lib/types",
      destinationPath: "libs/nest-uniform-response/src/lib/types",
      outputName: "providers.types.ts",
    },
    {
      templateName: "define-errors",
      templatePath: "templates/lib/utils",
      destinationPath: "libs/nest-uniform-response/src/lib/utils",
      outputName: "define-errors.ts",
    },
    {
      templateName: "send-json",
      templatePath: "templates/lib/utils",
      destinationPath: "libs/nest-uniform-response/src/lib/utils",
      outputName: "send-json.ts",
    },
  ],
};
