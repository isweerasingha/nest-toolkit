# Nest.js Toolkit CLI

A powerful CLI tool to accelerate Nest.js development by scaffolding features, components, and more with a single command.

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
[![NPM Version](https://img.shields.io/npm/v/nextjs-app-toolkit.svg)](https://www.npmjs.com/package/nextjs-app-toolkit)

Nest.js Toolkit CLI is a command-line interface (CLI) built to accelerate your Nest.js development workflow. It removes repetitive boilerplate and lets you generate powerful modules and components instantly, so you can focus on building your application's core features.

## Features

- **Rapid Scaffolding:** Instantly generate robust NestJS modules and supporting files with a single command.
- **Best Practices Included:** All generated code follows modern NestJS conventions and project structure.
- **Type-Safe by Default:** Every file is written in TypeScript to ensure maximum type safety.
- **Developer-Friendly:** Simple, memorable commands make scaffolding features fast and intuitive.
- **Extensible Architecture:** Easily add new generators for modules, services, decorators, and more as your project grows.

---

## Installation

To use the toolkit, install it globally on your system via NPM.

```bash
npm install -g nest-toolkit
```

_(Note: The package name `nest-toolkit` is a placeholder until the package is published on NPM.)_

---

## Usage

Navigate to the root directory of any Next.js project in your terminal and run the toolkit's commands.

### Example: Init Uniform Response

```bash
nest-toolkit init:uniform-response
```

or

```bash
nest-toolkit ir
```

Generate as `init:uniform-response`

### Generated Module Structure

The command above creates the following directory and files at `libs/nest-uniform-response/`:

```
libs/nest-uniform-response/
├── src/
│   ├── index.ts
│   ├── nest-uniform-response.module.ts
│   ├── nest-uniform-response.service.ts
│   └── lib/
│       ├── config/
│       │   └── error.ts
│       ├── constants/
│       │   └── providers.constant.ts
│       └── decorators/
│           ├── json-response-config.decorator.ts
│           ├── json-response.decorator.ts
│           └── raw-response.decorator.ts
```

---

## Commands API

| Command                 | Alias | Description                                                                          |
| :---------------------- | :---- | :----------------------------------------------------------------------------------- |
| `init:uniform-response` | `ir`  | Initializes a robust NestJS Uniform Response setup in `libs/nest-uniform-response/`. |

---

## For Developers (Contributing)

Contributions are welcome\! If you'd like to help improve the toolkit, please follow these steps to set up a local development environment.

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/isweerasingha/nest-toolkit.git
    cd nextjs-app-toolkit
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Build the Project:**
    The build command compiles all TypeScript source files to JavaScript in the `dist/` folder and copies the necessary template files.

    ```bash
    npm run build
    ```

4.  **Link for Local Testing:**
    This command makes your local version of the toolkit available as a global command on your system.

    ```bash
    npm link
    ```

    After linking, any changes you make to the source code will be active after you run `npm run build` again.

---

## Author

This project is maintained by **Isuru Weerasingha**.

- **GitHub:** [@isweerasingha](https://github.com/isweerasingha)
- **LinkedIn:** [linkedin.com/in/isweerasingha](https://www.linkedin.com/in/isweerasingha/)

## License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for the full license text.
