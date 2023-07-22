import styles from './css/page.module.css'
import FileInput from './components/FileInput'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>To Due</h1>
      <FileInput />
    </main>
  )
}
