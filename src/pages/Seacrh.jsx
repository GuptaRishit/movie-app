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
    <div className="min-h-[calc(100svh-72px)] bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Search Movies
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Type a movie name and press Search.
          </p>
        </div>

        <Searchbar onSearch={setQuery} />

        {loading && <Loader />}
        {error && <p className="mt-3 text-red-400">{error}</p>}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
