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
        <h1 className={styles.title}>
          Welcome to my bulb
        </h1>

        <p className={styles.description}>
          Get started clicking on light
        </p>

        <div class="bulb">
          <input type="checkbox" class="turn-bulb"/>
        </div>
      </main>



      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
