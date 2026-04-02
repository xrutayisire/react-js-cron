import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    deps: {
      optimizer: {
        web: {
          include: [
            'antd',
            '@ant-design/**',
            '@rc-component/**',
            'rc-*',
          ],
        },
      },
    },
    coverage: {
      include: ['src/**'],
      exclude: ['src/types.ts', 'src/index.ts', 'src/stories/**'],
      reporter: ['lcov', 'json-summary'],
    },
  },
})
