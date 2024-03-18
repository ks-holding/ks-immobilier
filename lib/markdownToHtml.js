import remark from "remark";
import html from "remark-html";
import remarkToc from "remark-toc";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  console.log(result);
  return result.toString();
}
