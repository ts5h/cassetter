import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import terser from "@rollup/plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/App.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('bundle.css');
      },
      onwarn: (warning, handler) => {
        const { code, frame } = warning;

        // Ignore some warnings temporarily
        if (code === 'css-unused-selector') return;
        if (code === 'a11y-mouse-events-have-key-events') return;
        if (code === 'a11y-label-has-associated-control') return;

        handler(warning);
      }
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
