/*
    This class will be responsable for keeping track and calculating
    all the different statistics involved in the typing test.
    Author: Daniel St Jean.
*/
class Stats
{
    constructor(timeLimitSet)
    {
        this.totalCharsTyped = 0;
        this.errorsMade = 0;
        this.grossWPM = 0;
        this.timeLimitSet = timeLimitSet;
        this.timePassed = 0;
        this.netWPM = 0;
        this.accuracy = 0;
    }

    set timeLimitSet(intVal) { this._timeLimitSet = intVal; }
    get timeLimitSet() { return this._timeLimitSet; }

    set totalCharsTyped(intVal) { this._totalCharsTyped = intVal; }
    get totalCharsTyped() { return this._totalCharsTyped; }
    incrementTotalCharsTyped() { this._totalCharsTyped++; }
    decrementTotalCharsTyped() { this._totalCharsTyped--; }

    set errorsMade(intVal) { this._errorsMade = intVal; }
    get errorsMade() { return this._errorsMade; }
    incrementErrorsMade() { this._errorsMade++; }
    decrementErrorsMade() { this._errorsMade--; }

    set timePassed(intVal) { this._timePassed = intVal; }
    get timePassed() { return this._timePassed; }

    calcTimePassed()
    {
        this._timePassed = this._timeLimitSet - timer._timeInSeconds;

        return this._timePassed = isNaN(this._timePassed) || this._timePassed == null ? 0 : this._timePassed;
    }

    set grossWPM(intVal) { this._grossWPM = intVal; }
    get grossWPM() { return this._grossWPM; }

    calcGrossWPM()
    {
        if(this._timePassed > 0)
        {
            if(settings._timeLimit === "30")
            {
                this._grossWPM = ((this._totalCharsTyped / Stats.constDivider) / (0.5));
            }
            else
            {
                this._grossWPM = ((this._totalCharsTyped / Stats.constDivider) / (1));
            }

        }
        else
        {
            this._grossWPM = 0;
        }

        return (this._grossWPM = isNaN(this._grossWPM) || this._grossWPM == null ? 0 : Math.round(this._grossWPM));
    }

    set netWPM(intVal) { this._netWPM = intVal; }
    get netWPM() { return this._netWPM; }

    calcNetWPM()
    {
        this._netWPM = this._grossWPM - this._errorsMade;

        return (this._netWPM = isNaN(this._netWPM) || this._netWPM == null ? 0 : Math.round(this._netWPM));
    }

    calcAccuracy()
    {
        this._accuracy = (this._totalCharsTyped - this._errorsMade) / this._totalCharsTyped * 100;

        return (this._accuracy = isNaN(this._accuracy) || this._accuracy == null ? 0 : this._accuracy.toFixed(2));
    }

    // update will be updating the user stats.
    update()
    {
        //statValues: [0] = accuracy, [1] = errors, [2] = time, [3] = NetWPM, [4] = GrossWPM
        var statsValues = document.getElementsByClassName("intVal");

        if(this.calcAccuracy() >= 100 || this.calcAccuracy() <= 0)
        {
            this.calcAccuracy() >= 100 ? statsValues[0].innerHTML = "100 %" : statsValues[0].innerHTML = "0 %";
        }
        else
        {
            statsValues[0].innerHTML = this.calcAccuracy() + " %";
        }

        statsValues[1].innerHTML = this._errorsMade;
        // for statsValue[2] see the timer class.

        if(this._totalCharsTyped > 5)
        {
            statsValues[4].innerHTML = this.calcGrossWPM();
            statsValues[3].innerHTML = this.calcNetWPM();
        }
        else
        {
            statsValues[4].innerHTML = "0";
            statsValues[3].innerHTML = "0";
        }

        this.calcTimePassed();
    }
}

Object.defineProperty(Stats, "constDivider", {
    value: 5,
    writable : false,
    enumerable : true,
    configurable : false
});
