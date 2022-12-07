import style from './out.module.css'

export default function NotFound(){
    return(
        <div className={style.container}>
            <h1>Ooooppp..</h1>
            <h2>That page cannot be found</h2>
            <p>Please go back to the <a href='/'>Homepage</a></p>
        </div>
    )
}