"use strict";

const {ESLint} = require("eslint");
const eslint = new ESLint({"fix": true});
const formatter = eslint.loadFormatter("stylish");

eslint.lintFiles(process.argv.slice(2)).then((lintResults) => {
  return formatter.then((resultFormatter) => {
    console.log(resultFormatter.format(lintResults));
    return ESLint.outputFixes(lintResults);
  });
}).catch((error) => {
  console.error(error.message);
  process.exit(1);
});
