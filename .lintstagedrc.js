const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx,css}": [buildEslintCommand],
  "*.{js,jsx,ts,tsx,css,json,md}": ["prettier --write"],
};
