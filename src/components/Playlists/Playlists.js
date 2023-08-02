import Playlist from "../Playlist/Playlist";
import CreatePlaylistStyles from "../CreatePlaylist/CreatePlaylist.module.css";
import styles from "./Playlists.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { FaCirclePlus } from "react-icons/fa6";

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
          <div className={styles.addPlaylist}>
            <FaCirclePlus className={styles.FaCirclePlus}/>
            ADD MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlists;