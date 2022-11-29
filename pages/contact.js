import styles from "../styles/contact.module.css";
import Navbar from "./components/Navbar"; 
import Div from "./components/div";
import Contactf1 from "./components/contact/contactf1";
import Frame4 from "./components/frame4";

export default function Contact() {
    return (
        <div className={styles.container}>
            <Navbar/>
            <Contactf1/>
            <Div/>
            <Frame4/>
            <Div/>

        </div>
    );
}