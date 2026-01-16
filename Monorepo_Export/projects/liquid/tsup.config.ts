import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['cjs', 'esm'],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom'],
})
