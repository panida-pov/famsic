import styles from './Root.module.css'
import { Outlet } from 'react-router-dom';
import { BsFillSuitHeartFill } from "react-icons/bs";

function Root() {
  return (
    <>
      <div className={styles.Header}>
        <h1><span>Fam</span>sic</h1>
        <h2>KEEP TRACK OF YOUR <span>FAVORITE MUSIC</span></h2>
        <Outlet/>
      </div>
      <footer>
        Made with <BsFillSuitHeartFill className={styles.icon} /> by panida-pov &#9400;2023
      </footer>
    </>
  );
}

export default Root;