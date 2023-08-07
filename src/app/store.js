import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "../components/SearchResults/searchResultsSlice";
import newPlaylistReducer from "../components/NewPlaylist/newPlaylistSlice";
import searchBarReducer from "../components/SearchBar/searchBarSlice";
import playlistsReducer from "../components/Playlists/playlistsSlice"

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    newPlaylist: newPlaylistReducer,
    searchTerm: searchBarReducer,
    playlists: playlistsReducer
  }
});