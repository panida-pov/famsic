import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "../components/SearchResults/searchResultsSlice";
import newPlaylistReducer from "../components/NewPlaylist/newPlaylistSlice";

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    newPlaylist: newPlaylistReducer,
  }
});