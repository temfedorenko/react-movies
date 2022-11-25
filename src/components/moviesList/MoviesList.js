import "./MoviesList.css";
import React from "react";
import { MovieCard } from "../movieCard/MovieCard";

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
