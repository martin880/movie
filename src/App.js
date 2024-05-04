import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// API Key = 8e726b4e 8e726b4e

const API_URL = "http://www.omdbapi.com?apikey=8e726b4e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Martin Movie</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchFilm}
          onChange={(e) => setSearchFilm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchFilm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
