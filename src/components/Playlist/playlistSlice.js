import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Spotify } from "../../util/Spotify";

export const loadPlaylistDetails = createAsyncThunk(
  'currentPlaylist/loadPlaylistDetails',
  async (id) => {
    return await Spotify.getPlaylistDetails(id);
  }
);

const options = {
  name: 'currentPlaylist',
  initialState: {
    info : {
      name: '',
      image: '',
      id: ''
    },
    tracks: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {
    setCurrentInfo: (state, action) => {
      return {
        ...state,
        info: action.payload
      };
    }
  },
  extraReducers: {
    [loadPlaylistDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [loadPlaylistDetails.fulfilled]: (state, action) => {
      state.tracks = action.payload;
      state.isLoading = false;
      state.failedToLoad = false;
    },
    [loadPlaylistDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
  }
}

const playlistSlice = createSlice(options);

export const selectPlaylistInfo = (state) => state.currentPlaylist.info;
export const selectCurrentTracks = (state) => state.currentPlaylist.tracks;
export const { setCurrentInfo } = playlistSlice.actions;
export default playlistSlice.reducer;