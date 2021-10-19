"use strict";

module.exports = {
  "env": {
    "node": true,
    "es2021": true
  },
  "overrides": [
    {
      "files": "rollup.config.js",
      "parserOptions": {
        "sourceType": "module"
      },
      "extends": "./sources/index.js"
    },
    {
      "files": "*.js",
      "extends": "./sources/index.js"
    },
    {
      "files": "*.json",
      "extends": "plugin:json/recommended",
      "rules": {
        "json/undefined": "error",
        "json/enum-value-mismatch": "error",
        "json/unexpected-end-of-comment": "error",
        "json/unexpected-end-of-string": "error",
        "json/unexpected-end-of-number": "error",
        "json/invalid-unicode": "error",
        "json/invalid-escape-character": "error",
        "json/invalid-character": "error",
        "json/property-expected": "error",
        "json/comma-expected": "error",
        "json/colon-expected": "error",
        "json/value-expected": "error",
        "json/comma-or-close-backet-expected": "error",
        "json/comma-or-close-brace-expected": "error",
        "json/trailing-comma": "error",
        "json/duplicate-key": "error",
        "json/comment-not-permitted": "error",
        "json/schema-resolve-error": "error",
        "json/unknown": "error"
      }
    }
  ]
};
