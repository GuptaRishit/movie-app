import { useState } from "react";

function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search.trim());
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default Searchbar;
