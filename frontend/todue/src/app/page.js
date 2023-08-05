import styles from "./css/page.module.css";
import Oauth from "./components/SignAndFile/Oauth";
import Profile from "./components/SignAndFile/Profile";

export default function page() {
  return (
    <>
    <header>
      <Profile />
    </header>
      <main className={styles.main}>
        <h1>To Due</h1>
        <Oauth />
      </main>
    </>
  );
}
