import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  useMovieTrailer(movieid);

  const trailervideo = useSelector((store) => store.movies.nowPlayingTrailer);

    // console.log("Trailer video:", trailervideo);

  return (
    <div className="w-screen">
      {trailervideo ? (
        <iframe
        className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailervideo.key + "?&autoplay=1&mute=1"}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
