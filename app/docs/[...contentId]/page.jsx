import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";

export default async function ContentPage({ params }) {
  const { contentId } = params;

  const lastId = contentId[contentId.length - 1];
  const content = await getDocumentContent(lastId);

  console.log(content);

  return (
    <article className="prose dark:prose-invert">
      <h1>{content.data.title}</h1>
      <div>
        <span>Published On: {content.data.date}</span> by{" "}
        <Link href={`/author/${content.data.author}`}>
          {content.data.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${content.data.category}`}>
          {content.data.category}
        </Link>{" "}
        category.
      </div>
      <div>tags...</div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </article>
  );
}
