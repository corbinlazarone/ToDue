import styles from "./css/page.module.css";
import Oauth from "./components/SignAndFile/Oauth";
import Profile from "./components/SignAndFile/Profile";

export default function page() {
  return (
    <>
      <main className={styles.main}>
          <Oauth />
      </main>
    </>
  );
}
