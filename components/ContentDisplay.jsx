import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

export default async function ContentDisplay({ id }) {
  const content = await getDocumentContent(id);

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
      <div>
        {content.data.tags &&
          content.data.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </article>
  );
}
