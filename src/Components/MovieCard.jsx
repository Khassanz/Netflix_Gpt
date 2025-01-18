import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default MovieCard;
