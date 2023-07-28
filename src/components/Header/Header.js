import styles from './Header.module.css'
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.Header}>
      <h1><span>Fam</span>sic</h1>
      <h2>KEEP TRACK OF YOUR <span>FAVORITE MUSIC</span></h2>
      {/* <Outlet/> */}
  </div>
  );
}

export default Header;