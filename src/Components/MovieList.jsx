import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black w-screen">
      <h1 className="text-3xl py-6 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
  <div className="flex gap-4">
    {movies && movies.length > 0 ? (
      movies.map((movie) => (
        <MovieCard key={movie.id} poster_path={movie.poster_path} />
      ))
    ) : (
      <p>No movies available</p>
    )}
  </div>
</div>

    </div>
  );
};

export default MovieList;
