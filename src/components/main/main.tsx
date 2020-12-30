import React, {useState} from 'react'
import './main.css'

function Main(){
    const [timeInSecond, setTimeInSecond] = useState<number>(0)
    
    return(
        <section className="time-container">
            <p className='timer-text'>0</p>
            <span>:</span>
            <p className='timer-text'>0</p>
            <span>:</span>
            <p className='timer-text'>0</p>   
        </section>
    )
}

export default Main; 