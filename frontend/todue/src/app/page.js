import styles from "./css/page.module.css";
import Oauth from "./components/Oauth";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1>To Due</h1>
        <Oauth />
      </main>
  );
}
