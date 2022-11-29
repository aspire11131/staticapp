import styles from "../styles/legal.module.css";
import Navbar from "./components/Navbar";
import Div from "./components/div";
import Legalf1 from "./components/legalf1";

export default function Legal() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Legalf1/>
            <Div/>

        </div>
    )
}

