import styles from './frame2.module.css';

export default function Frame2() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2> Services We Offer: </h2>
                <ul>
                    <li>Web Design</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div>
                <img src='f2p.png'/>
            </div>

        </div>
    );
}