import styles from './SearchBar.module.css'
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusic } from '../SearchResults/searchResultsSlice';
import { 
  selectSearchMusic, 
  selectSearchPlaylist, 
  setSearchMusic, 
  setSearchPlaylist, 
  clearSearch
} from './searchBarSlice'

function SearchBar({type}) {
  const dispatch = useDispatch();
  const music = useSelector(selectSearchMusic);
  const playlist = useSelector(selectSearchPlaylist);
  
  const searchBarType = {
    searchMusic: {
      searchTerm: music,
      placeholder: 'Search for music',
      handleSubmit(event) {
        event.preventDefault();
        dispatch(fetchMusic(music));
      },
      handleChange({target}) {
        dispatch(setSearchMusic(target.value));
      }
    },
    searchPlaylist: {
      searchTerm: playlist,
      placeholder: 'Search your playlist',
      handleSubmit(event) {
        event.preventDefault();
      },
      handleChange({target}) {
        dispatch(setSearchPlaylist(target.value));
      }
    }
  }

  return (
    <form className={styles.SearchBar} onSubmit={searchBarType[type].handleSubmit}>
      <button type="submit">
        <FaMagnifyingGlass />
      </button>
      <input 
        placeholder={searchBarType[type].placeholder || "SEARCH"} 
        onChange={searchBarType[type].handleChange} 
        value={searchBarType[type].searchTerm}>
      </input>
      <button 
        className={styles.clearButton} 
        type="button" 
        onClick={() => dispatch(clearSearch())}
      >
        <FaXmark />
      </button>
    </form>
  );
}

export default SearchBar;