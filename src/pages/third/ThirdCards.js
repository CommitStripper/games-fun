import { useEffect, useState } from 'react';

import './ThirdCards.css';
import pathIcon1 from '../../img/1.png'
import pathIcon2 from '../../img/2.png'
import pathIcon3 from '../../img/3.png'
import pathIcon4 from '../../img/4.png'
import pathIcon5 from '../../img/5.png'
import pathIcon6 from '../../img/6.png'
import pathIcon7 from '../../img/7.png'
import pathIcon8 from '../../img/8.png'
import pathIcon9 from '../../img/9.png'


import pathIconQuestion from '../../img/what.jpg'

const initialArrayCards = [
    { id: 1, img: pathIcon1 },
    { id: 2, img: pathIcon2 },
    { id: 3, img: pathIcon3 },
    { id: 4, img: pathIcon4 },
    { id: 5, img: pathIcon5 },
    { id: 6, img: pathIcon6 },
    { id: 7, img: pathIcon7 },
    { id: 8, img: pathIcon8 },
    { id: 9, img: pathIcon9 },
]
const paitOfArrayCards = [...initialArrayCards, ...initialArrayCards]

const ThirdCards = () => {

    const [arrayCards, setArrayCards] = useState([])
    const [openedCards, setOpenedCards] = useState([])
    const [matched, setMatched] = useState([])
    const [moves, setMoves] = useState(0)
    let elem = document.querySelector('.win')
    if (matched.length == 9) {
        elem.style.display = 'flex'
    }


    const shuffle = (array) => {
        let currentIndex = array.length,
            templaryValue,
            randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            templaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = templaryValue
        }

        return array
    }

    useEffect(() => {
        setArrayCards(shuffle(paitOfArrayCards))
    }, [])


    const flipCard = (index) => () => {
        setOpenedCards(opened => [...opened, index])
        setMoves(prevMove => prevMove + 1)
    }

    useEffect(() => {
        if (openedCards < 2) return
        const firstMatched = arrayCards[openedCards[0]]
        const secondMatched = arrayCards[openedCards[1]]

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id])
        }

        if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 500)
    }, [openedCards])

    const handleGameRestart = () => {
        elem.style.display = 'none'
        setOpenedCards([])
        setMatched([])
        setMoves([])
        setArrayCards(shuffle(paitOfArrayCards))
    }


    return (
        <div className="container">
            <p className='numer-of-strokes'>Сделано ходов: {moves}</p>
            <div className='cards'>
                {arrayCards.map((item, index) => {
                    let isFlipped = false

                    if (openedCards.includes(index)) isFlipped = true
                    if (matched.includes(item.id)) isFlipped = true

                    return (
                        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard(index)} key={index}>
                            <div className='inner'>
                                <div className='front'>
                                    <img src={item.img} width='100' alt='front-card' />
                                </div>
                                <div className='back'>
                                    <img src={pathIconQuestion} width='100' alt='question mark' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='win'>
                <h1>Ты выйграл!</h1>
            </div>
            <button className='button-restart' onClick={handleGameRestart}>Начать завново</button>
            <a href='/' className='button-restart'>Меню</a>
        </div>
    );
}

export default ThirdCards;
