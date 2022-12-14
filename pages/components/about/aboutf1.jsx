import styles from "./aboutf1.module.css";


export default function Aboutf1() {
    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <div className={styles.desc}>
                <p> We are a group of individuals who will help you achieve your needs in developing your dream project. We have a team of developers who will help you in any of our certain fields that we offer. 
                    We also have a group of designers who can help you achieve that embellishing project you are wanting to build. 
                </p>
                <img src="tupc.jpg"/>
            </div>
            <h2>The Team</h2>

            <h3> Project Manager: </h3>
            <div className={styles.flex}>
                <h4> RODNIE JOHNPAUL SEVILLA</h4> 
                <img src="rod.jpg" alt="avatar"/> 
            </div>
            <p> Currently a Third year Computer Engineering Technology student from Technological University of the Philippines. Currently the Project Manager.
            </p>


            <h3> Developers: </h3>
            <div className={styles.flex}>
                <h4> BRYAN PEREZ</h4>
                <img src="bryan.jpg" alt="avatar"/>
            </div>
            <p> Currently a Third year Computer Engineering Technology student at Technological University of the Philippines - Cavite Campus. Hobbies are mostly about computers and other technological stuffs. Also one of the developers of team.
            </p>
            <div className={styles.flex}>
                <h4> HANNAH FAITH ESPIEL</h4> 
                <img src="faith.jpg" alt="avatar"/>
            </div>
            <p> After gaining valuable experience in her college level, Faith decided to be part of Wonder Developets. She has developed a passion for working collaboratively to help teams and individuals succeed. In her spare time she play guitar and enjoy exploring nature and discovering new adventure with her closed friends
            </p>


            <h3> Designers: </h3>
            <div className={styles.flex}>
                <h4> KARL EMMANUEL JARILLA</h4>
                <img src="karl.jpg" alt="avatar"/>
            </div>
            <p> Currently a Third year Computer Engineering Technology student at Technological University of the Philippines - Cavite Campus. Also one of the Designers of team.
            </p>
            <div className={styles.flex}>
                <h4> DOMINIQUE FETALBO</h4> 
                <img src="dominique.jpg" alt="avatar"/>
            </div>
            <p> Currently a Fourth year Computer Engineering Technology student at Technological University of the Philippines - Cavite Campus. Also one of the Designers of team.
            </p>



        </div>
    );
}