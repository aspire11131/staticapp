import styles from "./projectf1.module.css";

export default function Projectf1() {
    return(
        <div className={styles.container}>
            <h1> Possible problems that we aim to solve through our projects: </h1>
            <h3>Project 1:</h3>
            <p>Problem:  Less supply of fuel and increased fuel prices in our country </p>
            <p>Solution:  Web app that provides updated fuel prices uploaded by users for the other users</p>
            <h3>Project 2: </h3>
            <p> Problem:  Increasing number of cyclist and the grow of demand for bike repair services</p>
            <p>Solution:  Web app that provides the contact information of nearby or local bike shops and stating shops that are available on call</p>
            <div className={styles.center}>
                <img src='f4p8.png'/> 
            </div>
        </div>
    );
}