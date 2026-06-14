import { useState } from "react";
import Searchbar from "../components/Seacrhbar";
import useFetch from "../hooks/usefetch";
import MovieCard from "../components/Moviecard";
import Loader from "../components/Loader";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Search() {
  const [query, setQuery] = useState("");

  const url = query
    ? `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
    : null;

  const { data: movies, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Search Movies</h1>
      <Searchbar onSearch={setQuery} />

      {loading && <Loader />}
      {error && <p>{error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Search;
