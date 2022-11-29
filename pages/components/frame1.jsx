import styles from './frame1.module.css';

export default function Frame1() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2> Who are we?</h2>
                <p>We are a group of individuals who will help you achieve your needs in developing your dream project. We have a team of developers who will help you in any of our certain fields that we offer. We also have a group of designers who can help you achieve that embellishing project you are wanting to build.</p>
            </div>
            <div className={styles.image}>
                <img src='f1p.png'/>
            </div>
        </div>
    );
}