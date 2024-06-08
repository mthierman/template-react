// @ts-check

import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        ignores: ["**/dist/**"],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                project: ["tsconfig.vite.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.config.ts"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                project: ["tsconfig.node.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.config.mjs"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        ...tseslint.configs.disableTypeChecked,
    },
);
