// Author: Daniel St Jean
class Typer
{
    constructor()
    {
        this.typedLetter = "";
    }

    set typedLetter(charVal) { this._typedLetter = charVal; }
    get typedLetter() { return this._typedLetter; }
}
