import styles from './Track.module.css'
import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../NewPlaylist/newPlaylistSlice';

function Track({track, action}) {
  const dispatch = useDispatch();

  const renderButton = (action) => {
    if (action === 'add') {
      return <button className={styles.TrackAction} onClick={() => dispatch(addToList(track))}>+</button>;
    } else {
      return <button className={styles.TrackAction} onClick={() => dispatch(removeFromList(track.id))}>-</button>;
    };
  }

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderButton(action)}
    </div>
  )
}

export default Track;