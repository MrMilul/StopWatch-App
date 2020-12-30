import React, {useState} from 'react'
import './control.css'


type Props = {
    setTimeInSecond: Function 
}


function Controler(props:Props){
    const { setTimeInSecond } = props;
    const [intervalId, setIntervalId] = useState<number>(0)

    const handlePlayBut = () =>{
            let interval:any = setInterval(()=>{
                setTimeInSecond((previousState:number)=> 
                    previousState + 1)
            }, 1000)
        setIntervalId(interval)
    }

    const handleStopBut = () =>{
        clearInterval(intervalId)   
    }

    const handleResetBut = () => {
        clearInterval(intervalId)
        setTimeInSecond(0)

    }
    return(
        <section className="controles-container">
            <button onClick={handlePlayBut}>Play</button>
            <button onClick={handleStopBut}>Stop</button>
            <button onClick={handleResetBut}>Reset</button>
        </section>
    )
}

export default Controler