import styles from "../styles/about.module.css";
import Navbar from "./components/Navbar";
import Aboutf1 from "./components/about/aboutf1";
import Div from "./components/div";
import Frame4 from "./components/frame4";

export default function About() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Aboutf1/>
            <Div/>
            <Frame4/>
            <Div/>


        </div>
    );
}