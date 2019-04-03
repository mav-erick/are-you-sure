const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/ays/runtime.js",
    "./dist/ays/polyfills.js",
    "./dist/ays/scripts.js",
    "./dist/ays/main.js"
  ];
  await fs.ensureDir("ays");
  await concat(files, "ays/elements.js");
})();
