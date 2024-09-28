import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

import packageJson from './package.json' with { type: 'json' };

export default [
  {
    input: 'index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: 'inline',
      },
    ],
    plugins: [
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/node_modules/**', '**/dist/**'],
      }),
      json(),
      replace({
        preventAssignment: true,
        delimiters: ['', ''],
        include: [
          'node_modules/**/d3/d3.js',
          'node_modules/util/util.js',
          'src/redux/epics/Analytics.jsx',
        ],
        values: {
          'process.env': 'import.meta.env',
          'var d3_document = this.document;': 'var d3_document = window.document;',
          'this.navigator': 'window.navigator',
          'if (name in object) return name;': 'if (object && name in object) return name;',
          'if (prefixName in object) return prefixName;': 'if (object && prefixName in object) return prefixName;',
          'this[d3_vendorSymbol(this, "requestAnimationFrame")]': 'window[d3_vendorSymbol(window, "requestAnimationFrame")]',
        }
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      resolve({
        preferBuiltins: false,
        moduleResolution: "Node",
        mainFields: ['browser', 'module', 'main'],
        dedupe: ['d3', 'util', 'lodash', 'react', 'react-dom'], // <-- This could be improved...not sure if it is needed
      }),
      nodePolyfills(),
      image(),
    ],
  },
  {
    input: 'index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];