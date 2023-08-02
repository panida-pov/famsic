import Playlist from "../Playlist/Playlist";
import CreatePlaylistStyles from "../CreatePlaylist/CreatePlaylist.module.css";
import styles from "./Playlists.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Playlists() {
  return (
    <div className={CreatePlaylistStyles.box}>
      <div className={styles.Playlists}>
        <div className={styles.top}>
          <h3>Your Playlists</h3>
          <SearchBar />
        </div>
        <div className={styles.contents}>
          <Playlist />
          <Link to="create-playlist" style={{textDecoration: 'none'}}>
            <button className={styles.addPlaylist}>
              <FaCirclePlus className={styles.FaCirclePlus}/>
              ADD MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Playlists;