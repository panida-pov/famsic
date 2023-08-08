import Track from "../Track/Track";
import CreatePlaylistStyles from "../CreatePlaylist/CreatePlaylist.module.css"
import { FaCircle, FaCircleLeft } from "react-icons/fa6";
import styles from "./PlaylistDetails.module.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectPlaylistInfo, selectCurrentTracks, loadPlaylistDetails, isLoadingTracks } from "../Playlist/playlistSlice";
import { useDispatch, useSelector } from "react-redux";

function PlaylistDetails() {
  const dispatch = useDispatch();
  const playlistInfo = useSelector(selectPlaylistInfo);
  const currentTracks = useSelector(selectCurrentTracks);
  const isLoading = useSelector(isLoadingTracks);

  useEffect(() => {
    dispatch(loadPlaylistDetails(playlistInfo.id));
  }, [dispatch, playlistInfo])

  return (
    <div className={CreatePlaylistStyles.box}>
      <div className={styles.PlaylistDetails}>
        <div className={styles.title}>
          <Link to="/">
            <button>
              <FaCircle className={styles.FaCircle}/>
              <FaCircleLeft className={styles.FaCircleLeft}/>
            </button>
          </Link>
          <h3>{playlistInfo.name}</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={playlistInfo.image} alt={playlistInfo.name}></img>
          </div>
          <div className={styles.Tracklist}>
            {isLoading ? <h3>Loading...</h3> :
              currentTracks.map((track, index) => {
              return <Track key={index} track={track} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetails;