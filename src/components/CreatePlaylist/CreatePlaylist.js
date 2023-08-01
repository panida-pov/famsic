import styles from "./CreatePlaylist.module.css";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import SearchResults from "../SearchResults/SearchResults";
import { FaCircle, FaCircleLeft } from "react-icons/fa6";

function CreatePlaylist() {
  return (
    <div className={styles.box}>
      <div className={styles.newPlaylistField}>
        <div className={styles.title}>
          <button>
              <FaCircle className={styles.FaCircle}/>
              <FaCircleLeft className={styles.FaCircleLeft}/>
          </button>
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