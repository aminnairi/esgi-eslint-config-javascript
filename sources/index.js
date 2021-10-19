"use strict";

module.exports = {
  "rules": {
    // ERRORS
    "array-callback-return": [
      "error",
      {
        "allowImplicit": false,
        "checkForEach": true
      }
    ],
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": [
      "error",
      {"allowImplicit": false}
    ],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": [
      "error",
      {"checkLoops": true}
    ],
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": [
      "error",
      {"includeExports": true}
    ],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {
        "skipStrings": true,
        "skipComments": true,
        "skipRegExps": true,
        "skipTemplates": true
      }
    ],
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": [
      "error",
      {"props": true}
    ],
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": [
      "error",
      {"typeof": true}
    ],
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": [
      "error",
      {"enforceForOrderingRelations": true}
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {"disallowArithmeticOperators": true}
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "caughtErrors": "all"
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": [
      "error",
      {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
      }
    ],
    "valid-typeof": [
      "error",
      {"requireStringLiterals": true}
    ],
    // SUGGESTIONS
    "accessor-pairs": [
      "off",
      "always"
    ],
    "arrow-body-style": [
      "off",
      "always"
    ],
    "block-scoped-var": "error",
    "camelcase": [
      "error",
      {
        "properties": "always",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "capitalized-comments": "off",
    "class-methods-use-this": [
      "error",
      {"enforceForClassFields": true}
    ],
    "complexity": "off",
    "consistent-return": [
      "error",
      {"treatUndefinedAsUnspecified": true}
    ],
    "consistent-this": [
      "error",
      "that"
    ],
    "curly": [
      "error",
      "all"
    ],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": [
      "error",
      {"allowKeywords": true}
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "func-name-matching": [
      "error",
      "always"
    ],
    "func-names": [
      "error",
      "always"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],
    "guard-for-in": "error",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": [
      "error",
      "always"
    ],
    "max-classes-per-file": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "multiline-comment-style": [
      "error",
      "starred-block"
    ],
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-continue": "off",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-else-return": [
      "error",
      {"allowElseIf": true}
    ],
    "no-empty": [
      "error",
      {"allowEmptyCatch": false}
    ],
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": [
      "error",
      {"enforceForLogicalOperands": true}
    ],
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": [
      "error",
      {
        "boolean": true,
        "number": true,
        "string": true,
        "disallowTemplateShorthand": true
      }
    ],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          [
            "+",
            "-",
            "*",
            "/",
            "%",
            "**"
          ],
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": true
      }
    ],
    "no-multi-assign": [
      "error",
      {"ignoreNonDeclaration": false}
    ],
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-sequences": [
      "error",
      {"allowInParentheses": false}
    ],
    "no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "hoist": "functions"
      }
    ],
    "no-shadow-restricted-names": "error",
    "no-ternary": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false,
        "enforceForJSX": true
      }
    ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": [
      "error",
      {"enforceForClassMembers": true}
    ],
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": [
      "error",
      {
        "ignoreImport": false,
        "ignoreExport": false,
        "ignoreDestructuring": false
      }
    ],
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": [
      "error",
      {"allowAsStatement": false}
    ],
    "no-warning-comments": [
      "error",
      {
        "terms": [
          "todo",
          "fixme"
        ],
        "location": "anywhere"
      }
    ],
    "no-with": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "operator-assignment": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": [
      "error",
      {"allowEmptyReject": true}
    ],
    "prefer-regex-literals": [
      "error",
      {"disallowRedundantWrapping": true}
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": [
      "error",
      "always"
    ],
    "radix": [
      "error",
      "always"
    ],
    "require-await": "error",
    "require-unicode-regexp": "error",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "off",
    "strict": [
      "error",
      "global"
    ],
    "symbol-description": "error",
    "vars-on-top": "error",
    "yoda": "off",
    // LAYOUT & FORMATTING
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-element-newline": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {"allowSingleLine": false}
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "function-call-argument-newline": [
      "error",
      "never"
    ],
    "function-paren-newline": [
      "error",
      "never"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true,
        "anonymous": {
          "before": false,
          "after": false
        },
        "method": {
          "before": true,
          "after": true
        }
      }
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "indent": [
      "error",
      2
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "off",
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "max-len": "off",
    "max-statements-per-line": [
      "error",
      {"max": 1}
    ],
    "multiline-ternary": [
      "error",
      "never"
    ],
    "new-parens": [
      "error",
      "always"
    ],
    "newline-per-chained-call": "off",
    "no-extra-parens": [
      "error",
      "all"
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "no-tabs": [
      "error",
      {"allowIndentationTabs": false}
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": false,
        "ignoreComments": false
      }
    ],
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": "never",
        "ImportDeclaration": "never",
        "ExportDeclaration": "never"
      }
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "object-property-newline": "error",
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "padding-line-between-statements": "off",
    "quotes": [
      "error",
      "double"
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "wrap-iife": [
      "error",
      "inside"
    ],
    "wrap-regex": "error",
    "yield-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ]
  }
};
