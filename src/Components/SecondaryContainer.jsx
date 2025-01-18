import React from 'react'

import {useSelector}from "react-redux"
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const movies =useSelector(store => store.movies)
  // console.log(movies)
  return (

    <div className='bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList title={"Funny"} movies={movies.nowPlayingMovies} />
      </div>
     {/* MovieList - 
      MovieList -  Now Playig
      MovieList - trending 
      MovieList - Horor
     
     */}
    </div>
  )
}

export default SecondaryContainer
