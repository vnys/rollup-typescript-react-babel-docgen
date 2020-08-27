import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'Foo.tsx',
  output: {
    file: 'bundle.es.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        // '@babel/preset-typescript',
      ],
      extensions: ['.tsx'],
      plugins: ['babel-plugin-react-docgen-typescript'],
    }),
    commonjs(),
  ],
};
