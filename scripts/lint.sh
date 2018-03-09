#!/bin/bash
eslint './**/*.js' --parser-options=ecmaVersion:7 --format=html -o 'lint-result.html' --cache --cache-location '/tmp/.eslintcache/'
