import Playlist from "../Playlist/Playlist";
import CreatePlaylistStyles from "../CreatePlaylist/CreatePlaylist.module.css";
import styles from "./Playlists.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoadingPlaylists, selectPlaylists, loadPlaylists } from "./playlistsSlice";
import { selectSearchPlaylist } from "../SearchBar/searchBarSlice";

function Playlists() {
  const playlists = useSelector(selectPlaylists);
  const searchPlaylist = useSelector(selectSearchPlaylist);
  const isLoading = useSelector(isLoadingPlaylists);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadPlaylists());
  }, [dispatch])

  return (
    <div className={CreatePlaylistStyles.box}>
      <div className={styles.Playlists}>         
        <div className={styles.top}>
          <h3>Your Playlists</h3>
          <SearchBar type='searchPlaylist' />
        </div>
        <div className={styles.contents}>
          {isLoading ? <h3>Loading...</h3> :
            <>
              {getFilteredItems(playlists, searchPlaylist).map((playlist, index) => {
                return <Playlist key={index} playlist={playlist} />
              })}
              <Link to="create-playlist" style={{textDecoration: 'none'}}>
                <button className={styles.addPlaylist}>
                  <FaCirclePlus className={styles.FaCirclePlus}/>
                  ADD MORE
                </button>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
}

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default Playlists;