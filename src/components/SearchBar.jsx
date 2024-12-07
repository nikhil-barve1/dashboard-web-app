import { Search } from "lucide-react";
import React from "react";

export default function SearchBar({ placeholdeText, setQuery }) {
  return (
    <div
      title={placeholdeText}
      className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-400 bg-white px-1 py-1 focus-within:outline focus-within:outline-1 focus-within:outline-[#4b69ff] media425:px-3"
      tabIndex={-1}
    >
      <Search size={20} className="text-gray-400" />
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        className="w-80 placeholder:text-pretty focus:outline-none"
        type="search"
        placeholder={placeholdeText}
      />
    </div>
  );
}
