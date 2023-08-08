import Track from "../Track/Track";
import styles from "./NewPlaylist.module.css";
import { isCreatingPlaylist, setName, selectPlaylistName, selectTracks, createPlaylist } from "./newPlaylistSlice";
import { useDispatch, useSelector } from "react-redux";

function NewPlaylist() {
  const playlistName = useSelector(selectPlaylistName);
  const tracks = useSelector(selectTracks);
  const isCreating = useSelector(isCreatingPlaylist);
  const dispatch = useDispatch();
  
  const handleCreatePlaylist = () => {
    dispatch(createPlaylist({
      name: playlistName,
      uris: tracks.map(track => track.uri)
    }));
  };

  return (
    <div className={styles.NewPlaylist}>
      {isCreating ? <h3>Creating...</h3> :
        <>
          <input 
            placeholder="ENTER PLAYLIST NAME" 
            onChange={({target}) => dispatch(setName(target.value))} 
            value={playlistName}
          />
          <div className={styles.Tracklist}>
            {tracks.map((track, index) => {
              return (
                <Track key={index} track={track} action='remove' />
              );
            })}
          </div>
        </>
      }
      <button onClick={handleCreatePlaylist} className={styles.create} disabled={isCreating}>
        CREATE
      </button>
    </div>
  );
}

export default NewPlaylist;