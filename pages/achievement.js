import styles from "../styles/achievement.module.css";
import Navbar from "./components/Navbar";
import Div from "./components/div";

export default function Achievement() {
    return (
        <div className={styles.container}>
            <Navbar/>
            
            <h1> Site is still under Construction </h1>
            <video width="320" height="240" autoPlay muted controls>
                <source src="vid.mp4" type="video/mp4"/>
            </video>
            <Div/>
        </div>
    );
}