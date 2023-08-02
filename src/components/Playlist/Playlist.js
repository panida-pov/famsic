import styles from "./Playlist.module.css";

// ------ Sample album ------
const album = {
  image: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd",
  name: "X (Deluxe Edition)"
}
// -------------------------

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <div className={styles.imgContainer}>
        <img src={album.image} />
      </div>
      <p>{album.name}</p>
    </div>

  );
}

export default Playlist;