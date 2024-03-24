"use client";

import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import SearchResults from "./SearchResults";

export default function Search({ docs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounce = useDebounce((value) => {
    const found = docs.filter((doc) =>
      doc.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(found);
  }, 1000);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    if (!value) {
      setSearchTerm("");
      debounce("");
    }
    setSearchTerm(value);
    debounce(value);
  };

  return (
    <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="focus:[&:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
      >
        <Image
          width={20}
          height={20}
          alt="search"
          src="/icons/search.svg"
          className="h-5 w-5"
        />
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search..."
          className="flex-1 focus:border-none focus:outline-none"
        />
        <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>

      {searchTerm && (
        <SearchResults
          results={searchResults}
          term={searchTerm}
          onSearchClose={setSearchTerm}
        />
      )}
    </div>
  );
}
