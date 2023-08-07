import styles from "./css/page.module.css";
import Oauth from "./components/SignAndFile/Oauth";

export default function page() {
  return (
    <>
      <main className={styles.main}>
          <Oauth />
      </main>
    </>
  );
}
