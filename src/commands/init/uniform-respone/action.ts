import * as fs from "fs";
import * as path from "path";
import { uniformResponseConfig } from "./config";

export function initUniformResponseAction(options: { path: string }) {
  console.log(`🚀 Initializing NestJS Uniform Response...`);

  const basePath = options.path === "/" ? "" : options.path;

  const projectRoot = process.cwd();

  uniformResponseConfig.files.forEach((fileConfig) => {
    const templatePath = path.join(
      __dirname,
      fileConfig.templatePath || "templates",
      `${fileConfig.templateName}.ts.txt`
    );
    if (!fs.existsSync(templatePath)) {
      console.warn(`[Warning] Template file not found: ${templatePath}`);
      return;
    }

    const templateContent = fs.readFileSync(templatePath, "utf-8");

    const destinationPathWithBase = fileConfig.destinationPath.replace(
      /^src/,
      basePath
    );

    const destinationDir = path.join(projectRoot, destinationPathWithBase);
    const destinationFile = path.join(destinationDir, fileConfig.outputName);

    fs.mkdirSync(destinationDir, { recursive: true });
    fs.writeFileSync(destinationFile, templateContent);
  });

  console.log(
    `✅ NestJS Uniform Response initialized successfully in '${basePath || "./"}'!`
  );
  console.log("📍 Files created:");
  const finalPaths = uniformResponseConfig.files.map(
    (f) =>
      `   - ${path
        .join(basePath, f.destinationPath.replace(/^src/, ""), f.outputName)
        .replace(/\\/g, "/")}`
  );
  finalPaths.forEach((p) => console.log(p));
  console.log(
    "\nNext step: Import the module in your app module"
  );
}
