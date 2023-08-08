import styles from "./Playlist.module.css";
import { useDispatch } from "react-redux";
import { setCurrentInfo } from "./playlistSlice";
import { useNavigate } from "react-router-dom";

function Playlist({playlist}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentInfo({
      name: playlist.name,
      image: playlist.image,
      id: playlist.id
    }));
    navigate('/playlist');
  };

  return (
    <div className={styles.Playlist}>
      <div className={styles.imgContainer}>
        <img src={playlist.image} alt={playlist.name} onClick={handleClick}/>
      </div>
      <p>{playlist.name}</p>
    </div>

  );
}

export default Playlist;