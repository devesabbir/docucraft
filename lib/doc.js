import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

const docsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const files = fs.readdirSync(docsDirectory);
  const allDocs = files.map((file) => {
    const id = file.replace(".md", "");
    const fullPath = path.join(docsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocs.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(docsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  return {
    id,
    data: matterResult.data,
    html: processContent.value,
  };
}
