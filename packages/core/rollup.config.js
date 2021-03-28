import postcss from 'rollup-plugin-postcss';
import esbuild from 'rollup-plugin-esbuild';

const plugins = [
  esbuild({
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    tsconfig: './tsconfig.json',
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
    external: ['react'],
  },
];
