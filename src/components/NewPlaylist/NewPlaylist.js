import Tracklist from "../Tracklist/Tracklist";
import styles from "./NewPlaylist.module.css"

function NewPlaylist() {
  return (
    <div className={styles.NewPlaylist}>
      <input placeholder="ENTER PLAYLIST NAME"/>
      <div className={styles.Tracklist}>
        <Tracklist />
      </div>
      <button className={styles.create}>CREATE</button>
    </div>
  );
}

export default NewPlaylist;