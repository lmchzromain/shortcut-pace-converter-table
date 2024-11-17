import babelParser from "@babel/eslint-parser";
import jsPlugin from "@eslint/js";
import eslintConfigPrettierPlugin from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  jsPlugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
  eslintConfigPrettierPlugin,
  {
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,

        babelOptions: {
          parserOpts: {
            plugins: ["importAssertions"],
          },

          presets: ["@babel/preset-react"],
        },
      },
    },
    settings: {
      react: {
        version: "18",
      },
    },
    rules: {
      "import/first": "error",
      "import/exports-last": "error",
      "import/group-exports": "error",
      "import/no-useless-path-segments": [
        "error",
        {
          noUselessIndex: true,
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["*/**/index"],
              message:
                "Do not import index files directly, import the parent folder instead.",
            },
          ],
        },
      ],
      "no-case-declarations": "off",
      "no-unused-vars": "off",
      "no-var": "error",
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          variables: false,
          allowNamedExports: false,
        },
      ],
      "no-console": [
        "error",
        {
          allow: ["info", "warn", "error"],
        },
      ],
      "no-duplicate-imports": "error",
      "prefer-const": "error",
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
];
