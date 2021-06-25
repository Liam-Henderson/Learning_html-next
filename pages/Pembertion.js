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
        <div className={styles.content}>
       
        <p className={styles.paragraph}>The area was developed at the turn of the century as a result of forestry and agriculture. The Pemberton Valley lies northwest of the Village and is famous for its seed potatoes. Pemberton and district hosts world-class activities and recreation including snowmobiling, horseback riding, skiing, golfing, hiking, rafting, jet boating and gliding. The district also provides a variety of shopping, dining, accommodations and a thriving service and light industrial sector!</p>
        
        <div id='list'className={styles.list}>
            <p><strong>Best Things to do in Pemberton Include:</strong></p>
            <ul>
                <li>Vist Narin Falls</li>
                <li>Check out the local bike trails</li>
                <li>Head to the meadows for some berry picking</li>
                <li>Check out the local bike trails</li>
                <li>Hike mount Currie</li>
            </ul>
        </div>
        <div className={styles.table_section}>
            <h2 className={styles.description}>Best Places to Eat</h2>
            <table className={styles.table}>
                <tr>
                    <th className={styles.td}>Name and Link</th>
                    <th className={styles.td}>What they serve</th>
                    <th className={styles.td}>Price</th>
                </tr>
                <tr>
                    <td className={styles.td}><a href="http://www.mileoneeatinghouse.com/"><strong>Mile One</strong></a></td>
                    <td className={styles.td}>Great Burgers and Salad. All local produce.</td>
                    <td className={styles.td}>$$</td>
                </tr>
                <tr>
                    <td className={styles.td}><a href="http://theponyrestaurant.com/"><strong>The Pony</strong></a></td>
                    <td className={styles.td}>Good quality pizza and pub food.</td>
                    <td className={styles.td}>$$</td>
                </tr>
                <tr>
                    <td className={styles.td}><a href="http://www.barnnork.com/"><strong>Barn Nork</strong></a></td>
                    <td className={styles.td}>World Class Thai Food</td>
                    <td className={styles.td}>$$$</td>
                </tr>
                <tr>
                    <td className={styles.td}><a href="https://www.thebeerfarmers.com/"><strong>The Beer Farmers</strong></a></td>
                    <td className={styles.td}>Locally produced craft brewing. Occaccionaly food trucks.</td>
                    <td className={styles.td}>$</td>
                </tr>
        </table>
        </div>
        </div>
        </main>
        <footer className={styles.footer}>
            <a href='/'><button type="button" className={styles.button}>Home</button></a>
            <a href='/Whistler'><button type="button" className={styles.button}>Whistler</button></a>
            <a href='Squamish'><button type="button" className={styles.button}>Squamish</button></a>
            <a href='about'><button type="button" className={styles.button}>About</button></a>
    
        </footer>
    </div>
)
export default pemberton
