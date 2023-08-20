import styles from "../../styles/page.module.css";
import Oauth from "../../components/SignInAndMainActions/Oauth";

export default function Login() {
  return (
    <>
      <main className={styles.main}>
          <Oauth />
      </main>
    </>
  );
}
