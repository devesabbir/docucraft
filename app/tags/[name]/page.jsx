import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";

export default function TagPage({ params: { name } }) {
  const docs = getDocuments();
  const matchDocs = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchDocs[0].id} />;
}
