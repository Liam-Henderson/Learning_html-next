import styles from '../styles/About.module.css'

const About = () => (
  <div className={styles.body}>
    <h1 className={styles.title}>About the Author</h1>
    <img
      src="liam_about.JPG"
      alt="Photo of me at the top of the Squamish Cheif"
      className={styles.image}
    />
    <h2 className={styles.name}>Liam Henderson</h2>
    <p>I have lived in the sea to sky sky for the last five years. Originally from Ontario I was quicky captivated by the mountains. I've spent my time enjoying the Skiing, biking, climbing, hiking and camping the area has to offer.</p>
    
  
    <table>
      <tr>
        <th> </th>
        <th>Whistler</th>
        <th>Squamish</th>
        <th>Pembertion</th>
      </tr>
      <tr>
        <td>Skiing</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Biking</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Climbing</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
      </tr>
    </table>
    <p>Perks of a ordered list:</p>
    <ol>
      <li className={styles.firstelement}>Numbers are Nice</li>
      <li className={styles.secondelement}>Good to have order</li>
      <li className={styles.thirdelement}>Lets you prioritize</li>
      <li className={styles.forthelement}>Good for sports events</li>
    </ol>
    <p>Perks of unordered lists</p>
    <ul>
      <li className={styles.firstelement}>Bullet points are the best</li>
      <li className={styles.secondelement}>Interchangable</li>
      <li className={styles.thirdelement}>Dont need to consider the order</li>
      <li className={styles.forthelement}>Good for grocrey lists</li>
    </ul>
  </div>
);

export default About;
