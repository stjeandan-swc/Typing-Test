/*
    The modal window class will be displayed a modal window that
    will display the users stats once the test is over.
    Author: Daniel St Jean
*/

class ModalWindow
{
    constuctor()
    {
        this.date = " ";
        this.dd = " ";
        this.mm =  " ";
        this.yyyy = "";
    }

    set date(strVal) { this._date = strVal; }
    get date() { return this._date; }

    set dd(strVal) { this._dd = strVal; }
    get dd() { return this._dd; }

    set mm(strVal) { this._mm = strVal; }
    get mm() { return this._mm; }

    set yyyy(strVal) { this._yyyy = strVal; }
    get yyyy() { return this._yyyy; }

    run()
    {
        this._date = new Date();
        this._dd = this._date.getDate();
        this._mm = this._date.getMonth()+1;
        this._yyyy = this._date.getFullYear();


        var el_modal = document.getElementById("simpleModal");
        var el_rowGrossWPM = document.getElementById("modalTable").rows[1].cells;
        var el_rowNetWPM = document.getElementById("modalTable").rows[2].cells;
        var el_rowErrors = document.getElementById("modalTable").rows[3].cells;
        var el_rowAccuracy = document.getElementById("modalTable").rows[4].cells;
        var el_rowTotalChars = document.getElementById("modalTable").rows[5].cells;
        var el_closeBtn = document.getElementById("closeBtn");

        el_modal.style.display = "block";


        this._date = this._mm + '/' + this._dd + '/' + this._yyyy;

        el_rowGrossWPM[1].innerHTML = this._date;
        el_rowNetWPM[1].innerHTML = this._date;
        el_rowErrors[1].innerHTML = this._date;
        el_rowAccuracy[1].innerHTML = this._date;
        el_rowTotalChars[1].innerHTML = this._date;

        el_rowGrossWPM[2].innerHTML = stats._grossWPM;
        el_rowNetWPM[2].innerHTML = stats._netWPM;
        el_rowErrors[2].innerHTML = stats._errorsMade;
        el_rowAccuracy[2].innerHTML = Math.round(stats._accuracy) + " %";
        el_rowTotalChars[2].innerHTML = stats._totalCharsTyped;
    }
}
