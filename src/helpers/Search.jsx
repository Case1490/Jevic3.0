import { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (product) => {
    console.log("Producto seleccionado:", product);
    setSearchTerm("");
    setIsFocused(false);
  };

  return (
    <div className="relative w-[400px]">
      {isFocused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFocused(false)}
        ></div>
      )}

      <div className="relative z-50">
        <div className="flex rounded-lg border-2 border-BlueMain w-full text-black">
          <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute w-5 fill-gray-500 transition"
            >
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
          </div>

          <input
            type="text"
            className="flex-grow bg-white pl-2 text-base outline-0 text-black"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
          />

          <button className="bg-BlueMain p-2 rounded-tr-md rounded-br-md text-white font-semibold hover:bg-blue-800 transition-colors">
            Buscar
          </button>
        </div>

        <SearchSuggestions
          searchTerm={searchTerm}
          onSelect={handleSelect}
          isFocused={isFocused}
        />
      </div>
    </div>
  );
};

export default Search;
