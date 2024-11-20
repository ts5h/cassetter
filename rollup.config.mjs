import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";

const production = !process.env.ROLLUP_WATCH;

// Reference: https://github.com/sveltejs/rollup-plugin-svelte?tab=readme-ov-file

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
      compilerOptions: {
        dev: !production
      },
      emitCss: true,
      onwarn: (warning, handler) => {
        const { code, frame } = warning;

        // NOTE: Ignore some warnings temporarily
        if (code === 'a11y-mouse-events-have-key-events') return;
        if (code === 'a11y-label-has-associated-control') return;
        if (code === 'a11y-no-static-element-interactions') return;

        handler(warning);
      }
    }),
    css({
      output: 'bundle.css'
    }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
    commonjs(),
    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
