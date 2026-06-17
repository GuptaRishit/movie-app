import { useState } from "react";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e?.preventDefault?.();
    onSearch(search.trim());
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-3">
      <input
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20"
      />
      <button
        type="submit"
        className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-300"
      >
        Search
      </button>
    </form>
  );
}

export default Searchbar;
