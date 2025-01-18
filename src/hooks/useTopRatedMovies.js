import { Movie_Api } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'
const useTopRatedMovie = ()=>{
   
        const dispatch = useDispatch()
        const nowTopRatedMovie = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', Movie_Api);
          // console.log(data)
          const json = await data.json();
          // console.log(json.results)
          dispatch(addTopRatedMovies(json.results))
        }
        useEffect(()=>{
            nowTopRatedMovie()
        },[]);
    
}

export default useTopRatedMovie