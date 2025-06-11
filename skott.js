import skott from "skott";

const { getStructure, getWorkspace, useGraph, findUnusedDependencies } =
  await skott({
    /**
     * (Optional) Entrypoint of the project. If not provided, `skott` will search for all
     * supported files starting from the current working directory.
     * Defaults to `""`
     */
    entrypoint: "src/App.tsx",
    /**
     * (Optional) Ignore patterns that applies during file traversal and module
     * resolution. Each module matching one of the patterns will be discarded from the
     * graph.
     * Defaults to `[]`;
     */
    // ignorePatterns: ["src/examples/**/*"],
    /**
     * (Optional) Whether to run Skott using the incremental pattern. By setting "true",
     * Skott will create a `.skott/cache.json` file to only detect and re-process what
     * changed since the last analysis.
     * Defaults to `true`;
     */
    incremental: true,
    /**
     * (Optional) restricts file discovering when building the graph.
     * Defaults to `[".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"]`
     */
    fileExtensions: [".ts", ".tsx"],
    /**
     * (Optional) Max depth search for circular dependencies. This can be useful for
     * performance purposes.
     * Defaults to `POSITIVE_INFINITY`.
     */
    circularMaxDepth: 20,
    /**
     * (Optional) Sets the base directory to start the analysis from. It's useful
     * when you want to run skott from a parent directory targetting a specific sub
     * directory (in the context of monorepo for instance). Using `cwd=some-path`
     * is equivalent to `cd some-path && skott`.
     * Defaults to `process.cwd()`.
     */
    /**
     * (Optional) Whether the base directory of the entrypoint should be included in relative
     * file paths. For the specified `src/index.ts` above, it would consider the
     * root path to be `./` consequently `src/` would never appear in any file paths.
     * Note: `includeBaseDir` can only be set to "true" when there is an `entrypoint`
     * provided.
     * Defaults to `false`.
     */
    includeBaseDir: false,
    /**
     * (Optional) Whether third-party dependencies (npm) and/or builtin (Node.js core modules)
     * should be added in the graph and/or TypeScript type-only import should be followed.
     * Defaults to `thirdParty=false`, `builtin=false`, and `typeOnly=true`.
     */
    dependencyTracking: {
      thirdParty: true,
      builtin: true,
      typeOnly: true,
    },
    /**
     * (Optional) Provide a custom tsconfig file to help skott resolve path aliases.
     * When extending some other tsconfig files, skott will be able to parse
     * all the way up all the path aliases referenced.
     * Defaults to `tsconfig.json`.
     */
    tsConfigPath: "./tsconfig.json",
    /**
     * (Optional) Provide a path to the package.json that should be used to detect
     * unused third-party dependencies.
     * Defaults to `package.json`.
     */
    manifestPath: "./package.json",
    /**
     * (Optional) Provide custom dependency resolvers to take full control over the
     * content that will be added to the graph nodes.
     * Defaults to `EcmaScriptModuleResolver` which is used a standard dependency
     * resolver for ECMAScript projects.
     */
    /**
     * (Optional) Enable verbose internal logging.
     * Defaults to `false`
     */
    verbose: true,
    /**
     *
     * (Optional) If this function is provided, Skott will build a separate graph of links
     * between entire groups of modules, which can be later accessed as `groupedGraph` in the
     * result of `getStructure` call.
     *
     */
    groupBy: (path) => {
      if (path.includes("core")) return "core";
      if (path.includes("feature-a")) return "feature-a";
      return undefined;
    },
  });
