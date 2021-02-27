import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.ts', '.tsx'],
    rootMode: 'upward',
  }),
  postcss({ modules: true, extract: true }),
];

export default [
  {
    preserveModules: true,
    input: 'src/index.ts',
    plugins,
    output: {
      dir: `dist`,
      format: 'esm',
    },
  },
];
