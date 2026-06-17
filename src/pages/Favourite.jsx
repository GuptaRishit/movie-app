import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/Moviecard";

function Favourites() {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="min-h-[calc(100svh-72px)] bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Favourite Movies
        </h1>

        {favorites.length === 0 ? (
          <p className="mt-3 text-sm text-white/70">
            No favourite movies yet. Add some from Home or Search!
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                showRemoveButton
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;
