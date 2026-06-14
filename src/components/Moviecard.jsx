import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Moviecontext";

function MovieCard({ movie, showRemoveButton = false }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(MovieContext);

  const favorite = isFavorite(movie.imdbID);

  return (
    <div>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
        width="150"
      />

      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      {showRemoveButton ? (
        <button onClick={() => removeFromFavorites(movie.imdbID)}>
          Remove from Favourites
        </button>
      ) : (
        !favorite && (
          <button onClick={() => addToFavorites(movie)}>
            Add to Favourites
          </button>
        )
      )}

      <br />
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
