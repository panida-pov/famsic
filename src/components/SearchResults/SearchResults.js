import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css'
function SearchResults() {
  return (
    <div className={styles.SearchResults}>
      <SearchBar />
      <div className={styles.Tracklist}>
        <Tracklist />
      </div>
    </div>
  );
}

export default SearchResults;