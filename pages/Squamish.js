import styles from '../styles/squamish.module.css'

const Squamish = () => (
    <div className={styles.content_bg}>
        <head>
            <title>Sea 2 Sky-Squamish</title>
        </head>
        <main>
        <h1 className={styles.title}>
            Squamish
        </h1>
        <h2 className={styles.description}>Canadas best spot for biking, climbing and windsurfing</h2>
        </main>
        <footer className={styles.footer}>
            <a href='/Whistler'><button type="button" className={styles.button}>Whistler</button></a>
            <a href='Pembertion'><button type="button" className={styles.button}>Pemberton</button></a>
            <a href='about'><button type="button" className={styles.button}>About</button></a>
        </footer>
    </div>
)
export default Squamish