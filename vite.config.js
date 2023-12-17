
import { resolve } from 'path'

export default ({
        assetsInclude: ['**/*.glb'],
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    koprivnica: resolve(__dirname, 'koprivnica.html')
                }
            }
        }
    })

