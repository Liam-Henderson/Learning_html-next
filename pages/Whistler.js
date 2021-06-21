import styles from '../styles/whistler.module.css'

const Whistler = () => (
    <div className={styles.content_bg}>
        <head>
            <title>Sea to Sky-Whistler</title>
        </head>
        <main>
            <h1 className={styles.title}>
              Whistler
            </h1>
            <h2 className={styles.description}>World class resort town, ready to welcome you year round</h2>
        </main>
        <footer className={styles.footer}>
            <a href='/Squamish'><button type="button" className={styles.button}>Squamish</button></a>
            <a href='Pembertion'><button type="button" className={styles.button}>Pemberton</button></a>
            <a href='about'><button type="button" className={styles.button}>About</button></a>
        </footer>
    </div>
)
export default Whistler