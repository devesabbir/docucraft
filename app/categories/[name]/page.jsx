import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";

export default function CategoryPage({ params: { name } }) {
  const docs = getDocuments();
  const matchDocs = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchDocs[0].id} />;
}
