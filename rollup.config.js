import fs from 'fs';
// import path from 'path';
// import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';
// import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';

// const env = process.env.NODE_ENV || 'development';
const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = Object.keys(pkg.peerDependencies || {})
  .concat(Object.keys(pkg.dependencies || {}));
const now = new Date();


const banner = `/*!
* ${pkg.name} v${pkg.version}
* https://github.com/${pkg.repository.url}
*
* Copyright (c) ${now.getFullYear()} Sönke Kluth
* Released under the ${pkg.license} license
*
* Date: ${now.toISOString()}
*/
`;

const resolver = {
  jsnext: true,
  main: true,
  browser: false,
};

// const common = {
//   input: 'src/emitter.js',
// };

const config = [{
  input: 'src/index.js',
  external,
  output: [
    {
      file: `lib/${pkg.module}`,
      format: 'cjs',
      exports: 'named',
      banner,
      sourcemap: true,
    },
    {
      file: `lib/${pkg['jsnext:main']}`,
      exports: 'named',
      banner,
      format: 'es',
      sourcemap: true,
    },
    {
      file: `lib/${pkg.browser}`,
      format: 'umd',
      banner,
      exports: 'named',
      name: pkg.name,
    },
  ],
  plugins: [
    commonjs(),
    resolve(resolver),
    buble({ transform: { module: false } }),
  ],
},
];


export default config;

