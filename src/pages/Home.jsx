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
    <div>
      <h1>Batman Movies</h1>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="game">Game</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;