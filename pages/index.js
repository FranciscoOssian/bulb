import Head from 'next/head'
import styles from '../styles/Home.module.css';

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

        <div className={styles.grid}>

          <div className={styles.lamp}>
            <div className={styles.bulb}>
              <input type="checkbox" className={styles.turnBulb}/>
            </div>
          </div>

          
          <div className={styles.twitterTweet}>
            <blockquote class="twitter-tweet">

            <p lang="pt" dir="ltr">
              Sempre quis fazer esse experimento social de criatividade com os amigos desenvolvedores pra ver o que sai mas nunca rolou:
              <br/>
              - Faz uma lâmpada com javascript, html e css
              <br/>
              Quem fizer a coisa mais criativa ganha R$100,00 no PayPal 🌝
              <br/>
              (envia por reply aqui, pode ser no jsfiddle etc)
            </p>
              &mdash; Metflix / Metró (@MetflixBrasil)
              <a href="https://twitter.com/MetflixBrasil/status/1329273240385171456?ref_src=twsrc%5Etfw">
                November 19, 2020
              </a>
            </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

        </div>


      </main>
    </div>
  )
}
