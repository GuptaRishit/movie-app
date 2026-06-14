import useFetch from "../hooks/usefetch";
import MovieCard from "../components/Moviecard";
import Loader from "../components/Loader";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const url = `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`;
  const { data: movies, loading, error } = useFetch(url);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Batman Movies</h1>
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

export default Home;
