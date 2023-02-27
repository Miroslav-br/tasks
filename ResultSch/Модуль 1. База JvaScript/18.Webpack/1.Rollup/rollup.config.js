import { babel } from '@rollup/plugin-babel';
import image from 'rollup-plugin-img';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';


export default {
    input: './index.js',
    output: {
      file: './bundle/bundle.js',
      format: 'cjs',
    },
    plugins: [
        image({
            limit: 100000,
        }),
        styles(),
        serve({
            open: true,
            contentBase: './',
            port: 8000,
        }),
        babel({ babelHelpers: 'bundled' }),
        livereload()
    ],
  };