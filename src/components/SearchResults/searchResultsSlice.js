import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Spotify } from "../../util/Spotify";

export const fetchMusic = createAsyncThunk(
  'searchResults/fetchMusic',
  async (word) => {
    return await Spotify.search(word);
  }
);

const options = {
  name: 'searchResults',
  initialState: {
    tracks: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {
    addSearchResults: (state, action) => {
      return action.payload;
    }
  },
  extraReducers: {
    [fetchMusic.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [fetchMusic.fulfilled]: (state, action) => {
      state.tracks = action.payload;
      state.isLoading = false;
      state.failedToLoad = false;
    },
    [fetchMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    }
  }
}

const searchResultsSlice = createSlice(options);

export const selectSearchResults = (state) => state.searchResults.tracks;
export const isLoadingSearchResults = (state) => state.searchResults.isLoading;
export const { addSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;