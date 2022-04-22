import { name } from '../package.json'
import css from 'rollup-plugin-css-only'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const file = (type) => `dist/${name}.${type}.js`

const override = {
  compilerOptions: { declaration: true },
  exclude: ['src/main.ts', 'src/App.vue', 'src/main.ts']
}

export default {
  input: './src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    typescript({ tsconfigOverride: override }),
    vue(),
    css({ output: 'bundle.css' }),
    nodeResolve()
  ],
  external: ['vue', 'lodash-es'] // 哪些是外部依赖
}

export { name, file }
