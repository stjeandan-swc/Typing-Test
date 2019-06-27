/*
    This is the main class. It will be responsable for the communication
    between the different JS classes. It will also controle the flow of
    the program.
    Author: Daniel St Jean
*/

/*
 This Variable is set up like an Enum. It will controle the different
 states that the program will be in.
 */
var states = Object.create(Object.prototype,{
    waiting : {writable : false, configurable: false, value : 1},
    typing : {writable : false, configurable: false, value : 2},
    finished : {writable : false, configurable: false, value : 3}
});


class Main
{
    constructor()
    {
        this.arrErrorTracking = [];
        this.arrLetterCollection = [];
        this.trackingIndex = 0;
    }

    set arrErrorTracking(arrVal) { this._arrErrorTracking = arrVal; }
    get arrErrorTracking() { return this._arrErrorTracking; }

    set arrLetterCollection(arrVal) { this._arrLetterCollection = arrVal; }
    get arrLetterCollection() { return this._arrLetterCollection; }

    set trackingIndex(intVal) { this._trackingIndex = intVal; }
    get trackingIndex() { return this._trackingIndex; }

    init()
    {
        el_original.innerHTML = library._paragraph;
        stats.update();
    }

    stateMachine()
    {
        switch(states)
        {
            case 1: {
                this.init();
                break;
            }
            case 2: {
                this.compare(typer._typedLetter, library._paragraph[0]);
                stats.update();
                break;
            }
            case 3: {
                modalWindow.run();
                break;
            }
            default: {
                break;
            }
        }
    }

    runTimer()
    {
        var _this = this;

        const inter = setInterval(function() {
            timer.start();
            if(timer._timeInSeconds <= 0)
            {
                clearInterval(inter);
                states = 3;
                _this.stateMachine();
            }
        }, 1000);
    }

    // Compares the typed letter with the current correct letter.
    compare(charTyped, charCurrent)
    {
        charTyped === charCurrent ? this.colorMatch(charTyped) : this.colorError(charTyped);
    }

    // If the two letter are a match, Color the character Green.
    colorMatch(charVal)
    {
        var newStr = library._paragraph.substr(1);

        el_green.innerHTML += charVal;
        library._paragraph = newStr;
        el_original.innerHTML = library._paragraph;

        this._arrLetterCollection[this._trackingIndex] = charVal;
        this._arrErrorTracking[this._trackingIndex] = 1;
        this._trackingIndex++;

        stats.incrementTotalCharsTyped();
    }

    // If the two letter are not a match, Color the character Red.
    colorError(charVal)
    {
        var tag_error = document.createElement("span");

        // if the incorrect character is a space, underline in red.
        if(charVal == " ")
        {
            charVal = "&nbsp;";
            tag_error.setAttribute("style", "border-bottom: solid 2px red");
        }
        else
        {
            tag_error.setAttribute("style", "color: red");
        }

        tag_error.setAttribute("class", "red");

        tag_error.innerHTML = charVal;
        el_green.appendChild(tag_error);

        this._arrLetterCollection[this._trackingIndex] = charVal;
        this._arrErrorTracking[this._trackingIndex] = 0;
        this._trackingIndex++;

        stats.incrementTotalCharsTyped();
        stats.incrementErrorsMade();
    }

    // if backspace is pressed, Check if the last character was an error or not.
    backStep()
    {
        var lastLetter = this._arrLetterCollection[this._trackingIndex -1];

        if(this._trackingIndex > 0)
        {
            var redOrGreen = this._arrErrorTracking[this._trackingIndex -1];

            redOrGreen == 0 ? this.removeError() : this.removeLast();
            stats.update();
        }
    }

    // backspace fro non - errrors.
    removeLast()
    {
        var letter = this._arrLetterCollection.pop();

        library._paragraph = letter + el_original.innerHTML;
        el_original.innerHTML = library._paragraph;
        el_green.innerHTML = el_green.innerHTML.substring(0, el_green.innerHTML.length -1);

        this._trackingIndex--;
        this._arrErrorTracking.pop();

        stats.decrementTotalCharsTyped();
    }

    // backspace for errors.
    removeError()
    {
        var el_red = document.getElementsByClassName("red");
        var currentChar = el_red[el_red.length -1];

        currentChar.parentNode.removeChild(currentChar);

        this._trackingIndex--;
        this._arrLetterCollection.pop();
        this._arrErrorTracking.pop();

        stats.decrementTotalCharsTyped();
        stats.decrementErrorsMade();
    }
}
