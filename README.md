# configs

config files for projects

## Extras

collection of npm / package scripts & configs of babel webpack rollup

### Editor themes

* <https://colorsublime.github.io/>

### typescript

* <https://www.typescriptlang.org/samples/index.html>

### babel

* <https://github.com/fengyuanchen/cropperjs/blob/master/.babelrc>
* <https://github.com/aikar/create-flow-pkg/blob/master/skel/.babelrc.js>
* <https://github.com/heroku/cli-engine/blob/master/.babelrc>

### rollup

* <https://github.com/jaredpalmer/react-fns/blob/master/rollup.config.js>
* <https://github.com/fengyuanchen/cropperjs/blob/master/rollup.config.js>
* <https://github.com/ThrivingKings/animo/blob/master/build.js>
* <https://github.com/concretesolutions/redux-zero/blob/master/rollup.config.js>
* <https://github.com/jaredpalmer/react-fns/blob/master/rollup.config.js>
* <https://github.com/Rich-Harris/degit/blob/master/rollup.config.js>

### webpack

* <https://github.com/Shopify/draggable/blob/master/webpack.config.js>

### flow

* <https://github.com/aikar/create-flow-pkg/blob/master/skel/.flowconfig>
* <https://github.com/cssinjs/jss/blob/master/.flowconfig>
* <https://github.com/heroku/cli-engine/blob/master/.eslintrc>

### lerna

* <https://github.com/lingui/js-lingui/blob/master/lerna.json>

### circle ci

* <https://github.com/lingui/js-lingui/blob/master/circle.yml>

### eslint
* <https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99>
* <https://github.com/amilajack/eslint-plugin-compat>
* <https://github.com/synacor/eslint-config-synacor>
* <https://github.com/aikar/create-flow-pkg/blob/master/skel/.eslintrc.json>
* <https://github.com/lingui/js-lingui/blob/master/.eslintrc>
* <https://github.com/lingui/js-lingui/blob/master/.eslintignore>
* <https://github.com/heroku/cli-engine/blob/master/.eslintrc>

### browserconfig
* <https://github.com/ai/browserslist-example>
* <https://github.com/amilajack/eslint-plugin-compat>

### postcss

* <https://github.com/fengyuanchen/cropperjs/blob/master/postcss.config.js>
* <https://github.com/jonathantneal/postcss-preset-env>

### tsconfig

* <https://github.com/concretesolutions/redux-zero/blob/master/tsconfig.json>
* <https://github.com/concretesolutions/redux-zero/blob/master/src/preact/tsconfig.json>
* <https://github.com/jaredpalmer/react-fns/blob/master/tsconfig.json>

### tslint

* <https://github.com/pnpm/pnpm/blob/master/tslint.json>
* <https://github.com/concretesolutions/redux-zero/blob/master/tslint.json>

### jest

* <https://github.com/aikar/create-flow-pkg/blob/master/skel/jest.config.js>

  ```json
  "jest": {
      "preset": "react-native",
      "moduleFileExtensions": [
          "ts",
          "tsx",
          "js"
      ],
      "transform": {
          "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
          "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
      },
      "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
      "testPathIgnorePatterns": [
          "\\.snap$",
          "<rootDir>/node_modules/",
          "<rootDir>/lib/"
      ],
      "cacheDirectory": ".jest/cache"
  }
  ```

### package.json

* <https://github.com/milligram/milligram/blob/master/package.json>

  ```json
  "scripts": {
          "start": "run-p build watch serve",
          "build": "run-s clean sass autoprefixer banner",
          "clean": "rimraf dist",
          "sass": "node-sass --output-style expanded src/milligram.sass dist/milligram.css && node-sass --output-style compressed src/milligram.sass dist/milligram.min.css",
          "autoprefixer": "postcss -u autoprefixer --no-map.inline --autoprefixer.browsers \"last 1 versions\" -r dist/*.css",
          "banner": "banner-cli dist/*.css",
          "watch": "onchange src -- run-p build",
          "serve": "browser-sync start --no-notify -s test --ss dist -f dist",
          "backstop": "run-s build && run-p serve compare",
          "reference": "backstop reference --configPath=backstop.conf.js",
          "compare": "backstop test --configPath=backstop.conf.js",
          "lint": "sass-lint -c .sasslintrc src --verbose --no-exit && eslint test -c styled && editorconfig-tools check .",
          "ava": "nyc ava",
          "test": "run-s build lint ava",
          "precommit": "run-p test"
      }
  ```

* <https://github.com/fengyuanchen/cropperjs/blob/master/package.json>

  ```json
  "scripts": {
      "build:css": "postcss src/css/cropper.css --no-map -o dist/cropper.css",
      "build:js": "rollup -c",
      "build": "npm run build:css && npm run build:js",
      "compress:css": "postcss dist/cropper.css -u cssnano --no-map -o dist/cropper.min.css",
      "compress:js": "uglifyjs dist/cropper.js -o dist/cropper.min.js -c -m --comments /^!/",
      "compress": "npm run compress:css && npm run compress:js",
      "watch:css": "postcss src/css/cropper.css -o docs/css/cropper.css -w",
      "watch:js": "rollup -c -w -m",
      "lint": "eslint src/js --fix",
      "postbuild": "npm test && npm run compress && node build",
      "prebuild": "npm run lint",
      "start": "npm-run-all --parallel watch:*",
      "test": "node-qunit-phantomjs test/index.html --timeout 10"
    },
  ```

* <https://github.com/lodash/lodash-webpack-plugin/blob/master/package.json>

  ```json
  "scripts": {
      "build": "babel src --out-dir lib || true",
      "style": "eslint src",
      "prepublish": "npm run build",
      "test": "mocha --check-leaks --slow 1e3 --compilers js:babel-core/register"
    }
  ```

* <https://github.com/okwolf/hyperapp-effects/blob/master/package.json>

```json
  "name": "hyperapp-effects",
  "version": "0.5.2",
  "description": "Effects as data for Hyperapp",
  "main": "dist/effects.js",
  "jsnext:main": "src/index.js",
  "module": "src/index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/okwolf/hyperapp-effects.git"
  },
  "peerDependencies": {
    "hyperapp": "^1.1.1"
  },
  "devDependencies": {
    "babel-preset-env": "^1.6.1",
    "hyperapp": "^1.1.1",
    "jest": "^21.2.1",
    "prettier": "^1.8.2",
    "rollup": "^0.55.5"
  },
  "scripts": {
    "test": "jest --coverage --no-cache",
    "bundle": "rollup -i src/index.js -o dist/effects.js -f umd -n effects",
    "prepare": "npm run bundle",
    "format": "prettier --semi false --write '{src,test}/**/*.js'"
  },
  "babel": {
    "presets": "env"
  },
  "author": "Wolfgang Wedemeyer <wolf@okwolf.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/okwolf/hyperapp-effects/issues"
  },
  "homepage": "https://github.com/okwolf/hyperapp-effects"
}
```

### Projects with nice configs
* <https://github.com/buehler/typescript-hero/>
* <https://github.com/lingui/js-lingui>
* <https://github.com/thejameskyle/unstated>
* <https://github.com/okwolf/hyperapp-effects/blob/master/package.json>
* <https://github.com/google/boardgame.io>
