import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import Loader from "../components/Loader";
import { MovieContext } from "../context/Moviecontext";

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
    <div style={{ padding: "16px" }}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
        width="200"
      />
      <h1>{movie.Title}</h1>
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>

      <button onClick={handleFavourite}>
        {favorite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default MovieDetails;
