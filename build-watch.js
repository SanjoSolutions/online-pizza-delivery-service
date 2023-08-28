import * as esbuild from 'esbuild'
import { config } from './esbuild.config.js'

const context = await esbuild.context(config)

await context.watch()
console.log('Watching for file changes...')
