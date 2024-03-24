import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchResults({ results, term, onSearchClose }) {
  const router = useRouter();

  const closeSearchResults = (event) => {
    event.preventDefault();
    router.push(event.target.href);
    onSearchClose("");
  };

  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="!text-lg">
        Showing results for
        <span className="font-semibold">&quot;{term}&quot;:</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results?.map((item) => (
          <li key={item.id}>
            <Link
              onClick={closeSearchResults}
              className="transition-all hover:text-emerald-600"
              href={`/docs/${item.id}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
