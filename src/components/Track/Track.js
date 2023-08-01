import styles from './Track.module.css'

// ------ Sample track ------
const tracks = {
  name: 'Photograph',
  artist: 'Ed Sheeran',
  album: 'X (Deluxe Edition)'
}
// --------------------------

function Track() {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{tracks.name}</h3>
        <p>
          {tracks.artist} | {tracks.album}
        </p>
      </div>
      <button>+</button>
    </div>
  )
}

export default Track;