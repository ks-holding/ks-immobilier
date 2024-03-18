var toc = require("markdown-toc");

export default async function markdownToToc(markdown) {
  const test = toc(markdown).json;
  console.log(test);
  return test;
}
