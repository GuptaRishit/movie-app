import { createContext, useState } from "react";

export const MovieContext = createContext();

function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.imdbID === movie.imdbID)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (imdbID) => {
    setFavorites((prev) => prev.filter((item) => item.imdbID !== imdbID));
  };

  const isFavorite = (imdbID) => {
    return favorites.some((item) => item.imdbID === imdbID);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
