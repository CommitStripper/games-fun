import styles from './Main.module.css'


const Main = () => {
    return(
        <div className={styles.main}>
            <h1>Главная</h1>
            <a href='/index2.html'>1 Уровень (Возраст: 3-4 года)</a>
            <a href='/levelTwo'>2 Уровень (Возраст: 5-10 лет)</a>
            <a href='/levelThird'>3 Уровень (Возраст: 10+ лет)</a>
        </div>
    )
}

export default Main