import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ['./index.ts'],
  outDir: "dist",
  unbundle: false,
  format: "esm",
  clean: true,
  minify: false,
  external: []
})
