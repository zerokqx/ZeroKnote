import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    ignores: [
      "*.config.*",
      "sandbox.*",
      "skott.js",
      "src-tauri",
      "dist",
      "build",
      "node_modules",
      "coverage",
      "*.min.js",
      "public",
      ".next",
      ".nuxt",
      ".vite",
      ".cache",
      "temp",
      "vite.config.ts",
      "postcss.config.cjs",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // === СТРОГИЕ ПРАВИЛА TYPESCRIPT ===
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

      // === ИМЕНОВАНИЕ ===
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
      ],

      // === ЦИКЛИЧЕСКИЕ ИМПОРТЫ ===
      "import/no-cycle": ["error", { maxDepth: 2, ignoreExternal: true }],
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // === НЕИСПОЛЬЗУЕМЫЕ ИМПОРТЫ ===
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // === REACT ПРАВИЛА ===
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-pascal-case": "error",
      "react/no-array-index-key": "error",
      "react/no-unstable-nested-components": "error",
      "react/jsx-no-constructed-context-values": "error",

      // === REACT HOOKS ===
      ...reactHooks.configs.recommended.rules,

      // === ДОСТУПНОСТЬ ===
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "error",

      // === ОБЩИЕ СТРОГИЕ ПРАВИЛА ===
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "prefer-destructuring": [
        "error",
        {
          array: true,
          object: true,
        },
      ],
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "no-duplicate-imports": "error",
      "no-useless-rename": "error",
      "object-shorthand": "error",

      // === СТИЛЬ КОДА ===
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],
      "max-len": [
        "error",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "max-lines": ["error", { max: 300, skipBlankLines: true }],
      complexity: ["error", 10],

      // === БЕЗОПАСНОСТЬ ===
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-proto": "error",
      "no-iterator": "error",
      "no-with": "error",
    },
  },
  // Конфигурация для TypeScript файлов
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Дополнительные правила только для TS
      "@typescript-eslint/strict-boolean-expressions": "error",
      "no-undef": "off", // TypeScript проверяет это сам
    },
  },
  // Послабления для конфигурационных файлов
  {
    files: ["*.config.js", "*.config.ts", "vite.config.*"],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "import/no-default-export": "off",
      "import/no-cycle": "off", // Отключаем для конфигурационных файлов
    },
  },
  // Послабления для файлов типов
  {
    files: ["*.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "import/no-cycle": "off", // Отключаем для файлов типов
    },
  },
  // Послабления для тестов
  {
    files: ["**/*.test.*", "**/*.spec.*", "**/__tests__/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "max-lines": "off",
      "import/no-cycle": "off", // Отключаем для тестов
    },
  },
];
