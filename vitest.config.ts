import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig({
    ...viteConfig,
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
})