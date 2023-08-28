import * as esbuild from 'esbuild'
import { config } from './esbuild.config.js'

const context = await esbuild.context(config)

context.watch()
