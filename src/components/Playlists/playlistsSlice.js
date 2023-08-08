import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Spotify } from "../../util/Spotify";

export const loadPlaylists = createAsyncThunk(
  'playlists/loadPlaylists',
  async () => {
    return await Spotify.getPlaylists();
  }
);

const options = {
  name: 'playlists',
  initialState: {
    playlists: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {
  },
  extraReducers: {
    [loadPlaylists.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [loadPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload;
      state.isLoading = false;
      state.failedToLoad = false;
    },
    [loadPlaylists.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    }
  }
}

const playlistsSlice = createSlice(options);

export const selectPlaylists = (state) => state.playlists.playlists;
export const isLoadingPlaylists = (state) => state.playlists.isLoading;
export default playlistsSlice.reducer;