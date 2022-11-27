import styles from "../styles/projects.module.css";
import Navbar from "./components/Navbar";
import Projectf1 from "./components/projects/projectf1";
import Div from "./components/div";
import Frame4 from "./components/frame4";


export default function Projects() {
    return (
      <div className={styles.container}>
        <Navbar/>
        <Projectf1/>
        <Div/>
        <Frame4/>
        <Div/>
        
      </div>
    );
  }