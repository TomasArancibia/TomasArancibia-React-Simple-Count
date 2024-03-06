import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const [aux, setAux] = useState(0)
    const increment = (num) => {
        let number = num;
        number == 999999 ? number : number++
        return number
    }
    const decrement = (num) => {
        let number = num;
        number == 0 ? number : number--
        return number
    }
    const addZeros = (list) => {
        while (list.length < 6) {list.unshift(0) }
        return list
    }

    const generateClock = (num) => {
        let digits = num.toString().split('');
        let realDigits = digits.map(Number);
        realDigits.length < 6 ? addZeros(realDigits) : realDigits;
        return (
            <>
                <div className='inside display-1'>{realDigits[0]}</div>
                <div className='inside display-1'>{realDigits[1]}</div>
                <div className='inside display-1'>{realDigits[2]}</div>
                <div className='inside display-1'>{realDigits[3]}</div>
                <div className='inside display-1'>{realDigits[4]}</div>
                <div className='inside display-1'>{realDigits[5]}</div>
            </>
        )
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (props.seconds) { 
                setCount(Number(props.seconds) - aux)
                setAux(increment(aux))
                }
            else {
                setCount(increment(count));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);
    return (
        <>
            <div className='bg-dark deck'>
                <div className='inside display-1'><FontAwesomeIcon icon={faClock} style={{ color: "#ffffff", }} /></div>
                {generateClock(count)}
            </div>
        </>
    )
}

export default Counter