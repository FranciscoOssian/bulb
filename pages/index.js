import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>francisco light</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>

        <div className={styles.tutorial}>
          <h1 className={styles.title}>
            Welcome to my bulb
          </h1>

          <p className={styles.description}>
            Get started clicking on light
          </p>
        </div>

        

        <div class="bulb">
          <input type="checkbox" class="turn-bulb"/>
        </div>

      </main>
    </div>
  )
}
