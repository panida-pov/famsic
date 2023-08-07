import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: 'searchTerm',
  initialState: {
    searchMusic: '',
    searchPlaylist: ''
  },

  reducers: {
    setSearchMusic: (state, action) => {
      return {
        ...state, 
        searchMusic: action.payload
      };
    },
    setSearchPlaylist: (state, action) => {
      return {
        ...state, 
        searchPlaylist: action.payload
      };
    },
    clearSearch: (state, action) => {
      return {
        searchMusic: '',
        searchPlaylist: ''
      };
    }
  }
}

const searchBarSlice = createSlice(options);

export const selectSearchPlaylist = (state) => state.searchTerm.searchPlaylist;
export const selectSearchMusic = (state) => state.searchTerm.searchMusic;
export const { setSearchMusic, setSearchPlaylist, clearSearch} = searchBarSlice.actions;
export default searchBarSlice.reducer;