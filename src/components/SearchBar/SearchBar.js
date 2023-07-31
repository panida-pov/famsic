import styles from './SearchBar.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
  return (
    <form className={styles.SearchBar}>
      <input placeholder="SEARCH"></input>
      <button><FaMagnifyingGlass /></button>
    </form>
  );

}

export default SearchBar;