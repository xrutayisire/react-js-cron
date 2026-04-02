import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  deps: {
    neverBundle: ['react', 'react-dom', 'antd'],
  },
})
