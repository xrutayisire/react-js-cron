import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'es2020',
  dts: true,
  clean: true,
  minify: true,
  deps: {
    neverBundle: ['react', 'react-dom', 'antd'],
  },
  outputOptions: {
    exports: 'named',
  },
})
