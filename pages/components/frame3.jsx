import styles from './frame3.module.css';

export default function Frame3() {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <h2> Meet The Developets:</h2>
                <dl>
                    <dt> Project Manager: </dt>
                        <dd className={styles.dd}>RODNIE JOHNPAUL SEVILLA</dd>
                    <dt> Developers: </dt>
                        <dd className={styles.dd}>BRYAN PEREZ</dd>
                        <dd className={styles.dd}>HANNAH FAITH ESPIEL</dd>
                    <dt> Designers: </dt>
                        <dd className={styles.dd}>KARL EMMANUEL JARILLA</dd>
                        <dd className={styles.dd}>DOMINIQUE FETALBO</dd>
                </dl>              
            </div>
            <div className={styles.image}>
                <img src='f3p.png'/>
            </div>
        </div>
    );
}