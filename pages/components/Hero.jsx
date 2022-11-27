import styles from "./Hero.module.css";

export default function Hero() {
    return (
      <div className={styles.container}>
        <h1>Where Innovation Meets Fun</h1>
        
        <div className={styles.message}>
        <h3>We are Wonder Developets from Technological University of the Philippines - Cavite Campus.We are here to spice up your projects because we believe that “Tech is better when its fun”.</h3>
            <div className={styles.image}>
            <img src="moon.png"/>
            </div>
        </div>
        <div className={styles.buttonarea}>
        <a href="/projects">
        <button className={styles.button}>View Our Projects</button>
        </a>
            <div className={styles.image}>
            <img src="astronaut.png"/>
            </div>
        </div>
      </div>
    );
  }