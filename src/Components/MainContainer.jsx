import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 6) {
    return <p>Loading movies...</p>;
  }

  const mainMovie = movies[6]; // Use the first movie as the main one
  const { original_title, overview, id } = mainMovie;

  return (
    <div >
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
