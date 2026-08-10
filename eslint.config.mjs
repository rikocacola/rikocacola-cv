import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      /**
       * Absolute imports only. Reaching upward with `../` couples a component
       * to where it happens to sit in the tree, which is exactly what breaks
       * when these components get reused elsewhere. Same-directory `./` is
       * still fine.
       */
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*"],
              message:
                "Use the '@/' alias instead of a relative parent import (e.g. '@/components/common/panel').",
            },
          ],
        },
      ],
    },
  },
  {
    // shadcn/ui primitives are vendored code we re-generate; don't lint-gate them.
    files: ["src/components/ui/**"],
    rules: { "no-restricted-imports": "off" },
  },
]);

export default eslintConfig;
