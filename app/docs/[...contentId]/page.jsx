import ContentDisplay from "@/components/ContentDisplay";

export default function ContentPage({ params }) {
  const { contentId } = params;

  const currentContentID = contentId[contentId.length - 1];

  return <ContentDisplay id={currentContentID} />;
}
