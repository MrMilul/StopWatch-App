import React, {useState, useEffect} from 'react'
import './main.css'
import CalculateTimer from '../../helper/CalculateTimer'
import Controler from '../controles/control'

function Main(){
    const [timeInSecond, setTimeInSecond] = useState<number>(0)
    
    const [timerArray, setTimerArray] = useState<Array<number | string>>([])

    useEffect(()=>{
        let timeArray: Array<number|string> = CalculateTimer(timeInSecond)
        setTimerArray(timeArray)
    } , [timeInSecond])
    return(
        <>
            <section className="time-container">
                <p className='timer-text'>{timerArray[0]}</p>
                <span>:</span>
                <p className='timer-text'>{timerArray[1]}</p>
                <span>:</span>
                <p className='timer-text'>{timerArray[2]}</p>       
            </section>
             < Controler setTimeInSecond = {setTimeInSecond}/>
        </>
    )
}

export default Main; 