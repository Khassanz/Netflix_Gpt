import { Movie_Api } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    if (!movieid) return;

    try {
      const response = await fetch(
       `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,

        Movie_Api
      );

      const json = await response.json();
    //   console.log(json);

      const trailerdata = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      const fallbackTeaser = json.results?.find(
        (video) => video.type === "Teaser"
      );

      // Select the first Trailer, or fallback to the first Teaser, or null
      const trailer = trailerdata?.[4] || fallbackTeaser || null;

      if (trailer) {
        dispatch(addTrailerMovies(trailer));
      } else {
        console.warn("No suitable video found for movie ID:", movieid);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
