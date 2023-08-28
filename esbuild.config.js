import { polyfillNode } from 'esbuild-plugin-polyfill-node'

export const config = {
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'public',
  plugins: [polyfillNode()],
  format: 'esm',
  loader: { '.js': 'jsx' },
}
