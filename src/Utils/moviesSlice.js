import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({

    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        PopularMovies:null,
        UpcomingMovies:null,
        TopRatedMovies:null,
    },
    reducers:{
          addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
          },
          addPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload;
          },
          addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies = action.payload;
          },
          addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies = action.payload;
          },
          addTrailerMovies:(state,action)=>{
         state.nowPlayingTrailer= action.payload;
          }
         
    }
})
export const {addNowPlayingMovies,addTrailerMovies,addPopularMovies,addUpcomingMovies,addTopRatedMovies} =moviesSlice.actions;
export default moviesSlice.reducer;