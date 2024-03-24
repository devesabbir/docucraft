export function getDocumentsByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentsByTag(docs, tag) {
  return docs.filter((doc) => doc.tags.includes(tag));
}

export function getDocumentsByAuthor(docs, author) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}
