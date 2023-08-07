import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track';
import styles from './SearchResults.module.css';
import { useSelector } from 'react-redux';
import { selectSearchResults } from './searchResultsSlice'

function SearchResults() {
  const searchResults = useSelector(selectSearchResults);

  return (
    <div className={styles.SearchResults}>
      <SearchBar 
        type="searchMusic"
      />
      <div className={styles.Tracklist}>
        {searchResults.map((result, index) => {
          return (
            <Track key={index} track={result} action='add' />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;