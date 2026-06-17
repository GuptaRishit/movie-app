import { useState } from "react";
import useFetch from "../hooks/usefetch";
import MovieCard from "../components/Moviecard";
import Loader from "../components/Loader";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const [type, setType] = useState("");

  const url = `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`;
  const { data: movies, loading, error } = useFetch(url);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const filteredMovies = movies.filter(
    (movie) => type === "" || movie.Type === type
  );

  return (
    <div className="min-h-[calc(100svh-72px)] bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Batman Movies
          </h1>

          <div className="flex items-center gap-3">
            <label className="text-sm text-white/70" htmlFor="type">
              Filter:
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400/60"
            >
              <option value="" className="text-black">All</option>
              <option value="movie" className="text-black">Movie</option>
              <option value="series"className="text-black">Series</option>
              <option value="game"className="text-black">Game</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;