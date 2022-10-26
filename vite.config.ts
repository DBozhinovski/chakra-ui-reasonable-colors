import path from "path";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.iife.js`,
};

module.exports = defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/theme/index.ts"),
      name: getPackageNameCamelCase(),
      formats: ["es", "cjs"],
      fileName: (format) => fileName[format],
    },
  },
});
