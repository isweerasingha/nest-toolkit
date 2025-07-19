#!/usr/bin/env node

import { Command } from "commander";
import { initUniformResponseAction } from "./commands/init/uniform-respone/action";
// Initialize the main command
const program = new Command();

program
  .name("next-toolkit")
  .description(
    "A CLI toolkit for accelerating Next.js development. Developed by I S Weerasingha"
  )
  .version("1.0.0");

program
  .command("init:uniform-response")
  .alias("ir")
  .description("Initializes a robust NestJS Uniform Response setup.")
  .option(
    "-p, --path <string>",
    "The base directory for generated files (e.g., 'src', 'lib', or '/')",
    "src"
  )
  .action((options) => {
    initUniformResponseAction(options);
  });

program.parse(process.argv);
