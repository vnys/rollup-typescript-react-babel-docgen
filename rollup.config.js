import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/Foo.tsx',
  output: {
    dir: './dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: './dist',
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.tsx'],
      plugins: ['babel-plugin-react-docgen-typescript'],
    }),
    commonjs(), // must be present
  ],
}
