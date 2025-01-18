
import { Movie_Api } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'
const usePopularMovies = ()=>{
   
        const dispatch = useDispatch()
        const nowGetPopularMovie = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', Movie_Api);
          // console.log(data)
          const json = await data.json();
          // console.log(json.results)
          dispatch(addPopularMovies(json.results))
        }
        useEffect(()=>{
            nowGetPopularMovie()
        },[]);
    
}

export default usePopularMovies
