import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content.jsx"),
      },
      output: {
        entryFileNames: "content.js",
      },
    },
    outDir: "build",
    emptyOutDir: true,
    manifest: false,
    target: "esnext",
  },
});
