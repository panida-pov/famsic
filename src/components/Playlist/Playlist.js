import styles from "./Playlist.module.css";

function Playlist({playlist}) {
  return (
    <div className={styles.Playlist}>
      <div className={styles.imgContainer}>
        <img src={playlist.image} />
      </div>
      <p>{playlist.name}</p>
    </div>

  );
}

export default Playlist;