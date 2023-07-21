import styles from './css/page.module.css'
import FileInput from './components/FileInput'
import FileInputTst from './components/FileInputTst'
import FileDisplay from './components/FileDisplay'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>To Due</h1>
      <FileInput />
      <FileDisplay />
    </main>
  )
}
