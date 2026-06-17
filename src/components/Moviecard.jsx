import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

function MovieCard({ movie, showRemoveButton = false }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(MovieContext);

  const favorite = isFavorite(movie.imdbID);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/40">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
        className="h-64 w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 line-clamp-2 text-base font-semibold text-white">
        {movie.Title}
      </h3>
      <p className="text-sm text-white/70">{movie.Year}</p>

      {showRemoveButton ? (
        <button
          onClick={() => removeFromFavorites(movie.imdbID)}
          className="mt-3 w-full rounded-md bg-red-500/90 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Remove from Favourites
        </button>
      ) : (
        !favorite && (
          <button
            onClick={() => addToFavorites(movie)}
            className="mt-3 w-full rounded-md bg-yellow-400 py-2 text-sm font-semibold text-gray-900 transition hover:bg-yellow-300"
          >
            Add to Favourites
          </button>
        )
      )}

      <div className="mt-3">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-sm font-medium text-yellow-200 hover:text-yellow-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
