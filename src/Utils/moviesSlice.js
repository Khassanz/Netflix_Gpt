import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({

    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
          addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
          },
          addTrailerMovies:(state,action)=>{
         state.nowPlayingTrailer= action.payload;
          }
         
    }
})
export const {addNowPlayingMovies,addTrailerMovies} =moviesSlice.actions;
export default moviesSlice.reducer;