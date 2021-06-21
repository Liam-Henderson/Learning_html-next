import styles from '../styles/pemberton.module.css'

const pemberton = () => (
    <div className = {styles.content_bg}>
        <head>
            <title>Sea to Sky-Pemberton</title>
        </head>
        <main>
        <h1 className={styles.title}>
            Pemberton
        </h1>
        <h2 className={styles.description}>
        Adventure begins here! Your gateway to unlimited wildness
        </h2>
        </main>
        <footer className={styles.footer}>
            <a href='/Whistler'><button type="button" className={styles.button}>Whistler</button></a>
            <a href='Squamish'><button type="button" className={styles.button}>Squamish</button></a>
            <a href='about'><button type="button" className={styles.button}>About</button></a>
        </footer>
    </div>
)
export default pemberton