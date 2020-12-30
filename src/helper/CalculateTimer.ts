
function CalculateTimer(timeInsec:number):Array<number> {
    let hours:number = Math.floor(timeInsec/3600);
    let minutes:number = Math.floor((timeInsec - (hours * 3600)) / 60);
    let seconds: number = timeInsec - (hours * 3600) - (minutes * 60);

    return [
        hours,
        minutes,
        seconds
    ]
}

export default CalculateTimer