import styles from './frame4.module.css';

export default function Frame4() {
    return (
        <div className={styles.container}>
            <div>
            <div className={styles.image}>
                <img src='f4p1.png'/>
            </div>
            <div>
                <ul className={styles.ul}>About Us</ul>
            </div>
            <div className={styles.content}>
                <div>
                    <a href='/customercare'>
                    <li className={styles.item}>Customer Care</li>
                    </a>
                    <a href='/legal'>
                    <li className={styles.item}>Legal Information</li>
                    </a>
                    <a href='/achievement'>
                    <li className={styles.item}>Achievements</li>
                    </a>
                </div>
                <div>
                    <a href='/career'>
                    <li className={styles.item}>Careers</li>
                    </a>
                    <a href='team'>
                    <li className={styles.item}>Team Information</li>
                    </a>
                    <a href='news'>
                    <li className={styles.item}>News</li>
                    </a>
                </div>
                <div>
                    <li>Follow Us</li>
                    <a href="https://www.instagram.com/">
                    <img src='f4p4.png'/>
                    </a>
                    <a href="https://www.facebook.com/">
                    <img src='f4p5.png'/>
                 </a>
                    <a href="https://twitter.com/home">
                    <img src='f4p6.png'/>
                    </a>
                    <a href="https://www.pinterest.ph/">
                    <img src='f4p7.png'/>
                    </a>
                </div>    
            </div>

            <div className={styles.center}>
            <img src='f4p8.png'/> 
            </div>
            <div className={styles.image}>
                <img src='f4p2.png'/>
            </div>

            </div>
            
        </div>
    );
}