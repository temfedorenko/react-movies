import "./App.css";
import { MoviesList } from "./components/moviesList/MoviesList";
import moviesFromServer from "./api/movies.json";
import { NewMovie } from "./components/newMovie/NewMovie";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  useEffect(() => {
    setVisibleMovies(
      [...moviesFromServer].filter((item) => {
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }, [query]);

  const addNewMovie = (newMovie) => {
    setVisibleMovies((movies) => [...movies, newMovie]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
