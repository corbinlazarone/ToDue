import styles from "../../styles/page.module.css";
import Oauth from "../../components/SignInAndMainActions/Oauth";

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <Oauth />
        {/* <div style={{textAlign: 'center'}}>
          <h1>We Are still in Development! To Due will be ready soon.</h1>
          <p style={{paddingTop: 20}}>Thanks for stopping by!</p>
        </div> */}
      </main>
    </>
  );
}
