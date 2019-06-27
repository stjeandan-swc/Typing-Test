/*
    This class will get and set the different user settings based on
    the URL parameters.
    Author: Dan St Jean.
*/

class Settings
{
    constructor(language, timeLimit)
    {
        this.language = language;
        this.timeLimit = timeLimit;
    }

    set timeLimit(time) { this._timeLimit = time; }
    get timeLimit() { return this._timeLimit; }

    set language(lang) { this._language = lang; }
    get language() { return this._language; }
}
