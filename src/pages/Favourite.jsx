import { useContext } from "react";
import { MovieContext } from "../context/Moviecontext";
import MovieCard from "../components/Moviecard";

function Favourites() {
  const { favorites } = useContext(MovieContext);

  return (
    <div>
      <h1>Favourite Movies</h1>

      {favorites.length === 0 ? (
        <p>No favourite movies yet. Add some from Home or Search!</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
