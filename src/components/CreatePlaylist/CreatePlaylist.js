import styles from "./CreatePlaylist.module.css";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import SearchResults from "../SearchResults/SearchResults";
import { FaCircle, FaCircleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CreatePlaylist() {
  return (
    <div className={styles.box}>
      <div className={styles.newPlaylistField}>
        <div className={styles.title}>
          <Link to="/">
            <button>
                <FaCircle className={styles.FaCircle}/>
                <FaCircleLeft className={styles.FaCircleLeft}/>
            </button>
          </Link>
          <h3>CREATE NEW PLAYLIST</h3>
        </div>
        <NewPlaylist />
      </div>
      
      <div className={styles.searchField}>
        <SearchResults />
      </div>
    </div>
  );
}    

export default CreatePlaylist;