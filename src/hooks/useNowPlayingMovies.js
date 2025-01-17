
import { Movie_Api } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'
const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowGetPlayingMovie = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Movie_Api);
      // console.log(data)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      nowGetPlayingMovie()
    },[]);
}

export default useNowPlayingMovies
