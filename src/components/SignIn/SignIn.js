import styles from './SignIn.module.css'

function SignIn() {
  return (
    <div className={styles.SignIn}>
      <img className={styles.logo} src="img/Spotify_Logo_RGB_White.png" alt="log in to spotify" />
      <button className={styles.button}>LOG IN</button>
    </div>

  );
}

export default SignIn;