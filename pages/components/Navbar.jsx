import styles from './Navbar.module.css';
import Button from './Buttons';


export default function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
        <a href='/'>
          <img src="logo.png" />
        </a>
        </div>
        <div className={styles.actions}>
          <a href='/'>
          <Button variant="secondary" >Home</Button>
          </a>
          <a href='/projects'>
          <Button variant="secondary">Projects</Button>
          </a>
          <a href='/about'>
          <Button variant="secondary">About</Button>
          </a>
          <a href='/contact'>
          <Button variant="secondary">Contact us</Button>
          </a>
          <div className={styles.login}>
          <a href='/contact'>
          <Button variant="primary">Subscribe</Button>
          </a>
        </div>
        </div>
        
      </div>
    );
  }