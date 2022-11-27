import styles from "../styles/customercare.module.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Div from "./components/div";

export default function Customercare() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
      });
      const { name, email, message } = values;
    
      const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/custcare", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      };
    return(
        <div className={styles.container}>
            <Navbar/>
            <h1> Customer Support Form</h1>
        
        <form onSubmit={handleSubmit}>
          <h3>Contact Form</h3>
          <div className={styles.inputc}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="input"
            />
          </div>
          <div className={styles.inputc}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your Email Here..."
              className="input"
            />
          </div>
          <div className={styles.inputc}>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter your Concern..."
              className="input"
            />
          </div>
          <div className={styles.btn}>
            <button>Send</button>
          </div>
        </form>
        <Div/>
        </div>
    )
}