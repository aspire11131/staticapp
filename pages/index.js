import Hero from "./components/Hero";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Div from "./components/div";
import Frame1 from "./components/frame1";
import Frame2 from "./components/frame2";
import Frame3 from "./components/frame3";
import Frame4 from "./components/frame4";


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero />
      <Div/>
      <Frame1/>
      <Div/>
      <Frame2/>
      <Div/>
      <Frame3/>
      <Div/>
      <Frame4/>
    </div>
  );
}