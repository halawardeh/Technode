

let Date1 = document.getElementById("Date");


let GetDate = new Date();

let Year = GetDate.getFullYear();
let Month = GetDate.getMonth();
let Day = GetDate.getDay() + 5;

function StringMonth(Month) {

    switch (Month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
    }

}

// Date1.innerHTML = `${Day} ${StringMonth(Month)} ${Year}`;



