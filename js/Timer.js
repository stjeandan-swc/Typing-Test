/*
    simple timer class this will take a total number of seconds
    as a parameter and will start a countdown to 0.
    Author: Daniel St Jean.
*/
class Timer
{
    constructor(timeInSeconds)
    {
        this.timeInSeconds = timeInSeconds;
        this.isRunning = false;
        this._timeOut = 0;
    }

    set timeInSeconds(strVal) { this._timeInSeconds = parseInt(strVal, 10); }
    get timeInSeconds() { return this._timeInSeconds; }

    set isRunning(boolVal) { this._isRunning = boolVal; }
    get isRunning() { return this._isRunning; }

    start()
    {
        var statsValues = document.getElementsByClassName("intVal");

        if(this._timeInSeconds >= this._timeOut)
        {
            this._isRunning = true;
            this._timeInSeconds--;
            //console.log(this._timeInSeconds);

            statsValues[2].innerHTML = timer._timeInSeconds;
        }
        else
        {
            console.log("timer is out of seconds: " + this._timeInSeconds)
            this._isRunning = false;
            statsValues[2].innerHTML = "00";
        }
    }
}
