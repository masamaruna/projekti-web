import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
        assetsInclude: ['**/*.glb'],
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    koprivnica: resolve(__dirname, 'koprivnica.html'),
                    zagreb: resolve(__dirname, 'zagreb.html'),
                    petrinja: resolve(__dirname, 'petrinja.html'),
                    berlin: resolve(__dirname, 'berlin.html'),
                    cologne01: resolve(__dirname, 'cologne-01.html'),
                    cologne02: resolve(__dirname, 'cologne-02.html'),
                    references: resolve(__dirname, 'references.html'),
                }
            }
        }
    })

