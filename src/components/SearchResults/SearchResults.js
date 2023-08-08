import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track';
import styles from './SearchResults.module.css';
import { useSelector } from 'react-redux';
import { isLoadingSearchResults, selectSearchResults } from './searchResultsSlice'

function SearchResults() {
  const searchResults = useSelector(selectSearchResults);
  const isLoading = useSelector(isLoadingSearchResults);

  return (
    <div className={styles.SearchResults}>
      <SearchBar 
        type="searchMusic"
      />
      <div className={styles.Tracklist}>
        {isLoading ? <h3>Searching...</h3> :
          searchResults.map((result, index) => {
            return (
              <Track key={index} track={result} action='add' />
            );
          })
        }
      </div>
    </div>
  );
}

export default SearchResults;