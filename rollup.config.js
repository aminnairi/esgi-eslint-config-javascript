import {terser} from "rollup-plugin-terser";

export default [
  {
    "input": "sources/index.js",
    "plugins": [
      terser()
    ],
    "output": {
      "file": "build/index.js",
      "format": "cjs"
    }
  },
  {
    "input": "sources/binary/index.js",
    "plugins": [
      terser()
    ],
    "output": {
      "file": "build/binary/index.js",
      "banner": "#!/usr/bin/env node",
      "format": "cjs"
    }
  }
];
