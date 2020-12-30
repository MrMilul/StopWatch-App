
function CalculateTimer(timeInsec:number):Array<number | string> {
    let hours:number = Math.floor(timeInsec/3600);
    let minutes:number = Math.floor((timeInsec - (hours * 3600)) / 60);
    let seconds: number = timeInsec - (hours * 3600) - (minutes * 60);

    let hourFormat = hours < 10 ? `0${hours}` : hours;
    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
    return [
        hourFormat,
        minutesFormat,
        secondsFormat
    ]
}

export default CalculateTimer