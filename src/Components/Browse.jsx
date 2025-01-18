import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularmovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovie from '../hooks/useTopRatedMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovie()
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
