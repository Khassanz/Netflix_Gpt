import { Movie_Api } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'
const useUpcomingMovies = ()=>{
   
        const dispatch = useDispatch()
        const nowGetUpcomingMovie = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', Movie_Api);
          // console.log(data)
          const json = await data.json();
          // console.log(json.results)
          dispatch(addUpcomingMovies(json.results))
        }
        useEffect(()=>{
            nowGetUpcomingMovie()
        },[]);
    
}

export default useUpcomingMovies