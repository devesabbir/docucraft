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
}
