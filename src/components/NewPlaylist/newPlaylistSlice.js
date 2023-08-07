import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Spotify } from "../../util/Spotify";

export const createPlaylist = createAsyncThunk(
  'newPlaylist/createPlaylist',
  async ({name, uris}) => {
    return await Spotify.createPlaylist(name, uris);
  }
);

const options = {
  name: 'newPlaylist',
  initialState: {
    playlistName: '',
    selectedTracks: [],
    isCreating: false,
    failedtoCreate: false
  },
  reducers: {
    setName: (state, action) => {
      return {
        ...state,
        playlistName: action.payload
      }
    },
    addToList: (state, action) => {
      const ids = state.selectedTracks?.map(item => item.id);
      if(!ids.includes(action.payload.id)) {
        return {
          ...state, 
          selectedTracks: [action.payload, ...state.selectedTracks]
        };
      }
    },
    removeFromList: (state, action) => {
      return {
        ...state,
        selectedTracks: state.selectedTracks.filter(track => track.id !== action.payload)
      };
    }
  },
  extraReducers: {
    [createPlaylist.pending]: (state, action) => {
      state.isCreating = true;
      state.failedtoCreate = false;
    },
    [createPlaylist.fulfilled]: (state, action) => {
      state.playlistName = '';
      state.selectedTracks = [];
      state.isCreating = false;
      state.failedtoCreate = false;
    },
    [createPlaylist.rejected]: (state, action) => {
      state.isCreating = false;
      state.failedtoCreate = true;
    },
  }
}

const newPlaylistSlice = createSlice(options);

export const selectPlaylistName = (state) => state.newPlaylist.playlistName;
export const selectTracks = (state) => state.newPlaylist.selectedTracks;
export const { setName, addToList, removeFromList } = newPlaylistSlice.actions;
export default newPlaylistSlice.reducer;