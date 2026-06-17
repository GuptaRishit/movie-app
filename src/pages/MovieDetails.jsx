import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import Loader from "../components/Loader";
import { MovieContext } from "../context/MovieContext";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(MovieContext);

  const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  const { data, loading, error } = useFetch(url);

  const movie = Array.isArray(data) ? null : data;
  const favorite = movie ? isFavorite(movie.imdbID) : false;

  const handleFavourite = () => {
    if (favorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="min-h-[calc(100svh-72px)] bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Poster"
            }
            alt={movie.Title}
            className="h-auto w-full max-w-md rounded-xl border border-white/10 object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {movie.Title}
            </h1>

            <div className="mt-3 space-y-2 text-sm text-white/80">
              <p>
                <span className="font-semibold text-yellow-200">Year:</span>{" "}
                {movie.Year}
              </p>
              <p>
                <span className="font-semibold text-yellow-200">Genre:</span>{" "}
                {movie.Genre}
              </p>
              <p>
                <span className="font-semibold text-yellow-200">Director:</span>{" "}
                {movie.Director}
              </p>
              <p>
                <span className="font-semibold text-yellow-200">Plot:</span>{" "}
                {movie.Plot}
              </p>
            </div>

            <button
              onClick={handleFavourite}
              className={`mt-6 w-full rounded-md py-2 text-sm font-semibold transition ${
                favorite
                  ? "bg-red-500/90 text-white hover:bg-red-500"
                  : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
              }`}
            >
              {favorite
                ? "Remove from Favourites"
                : "Add to Favourites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
