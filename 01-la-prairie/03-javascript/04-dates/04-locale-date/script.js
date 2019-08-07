/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// to change the content of a tag: 
// your code here
(() => {

    window.addEventListener("DOMContentLoaded", (event) => {
        var dateObj = new Date();
        var hours = dateObj.getHours();
        var minutes = dateObj.getMinutes();
        var week = ["Dimanche", "Lundi", "Mardi", "TMercredi", "Jeudi", "Vendredi", "Samedi"];
        var currentDay = dateObj.getDay()
        if (currentDay == 0) {
            dayDate = week[0]
        } else if (currentDay == 1) {
            dayDate = week[1];
        } else if (currentDay == 2) {
            dayDate = week[2];
        } else if (currentDay == 3) {
            dayDate = week[3];
        } else if (currentDay == 4) {
            dayDate = week[4];
        } else if (currentDay == 5) {
            dayDate = week[5];
        } else if (currentDay == 6) {
            dayDate = week[6];
        }
        //Days in stings.
        dayDate = week[dateObj.getDay()]
        //Years
        var currentYear;
        currentYear = dateObj.getFullYear();
        //Days in numbers
        dayNum = dateObj.getDate();

        var month = ["janiver", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"];

        monthShow = month[dateObj.getMonth()];

        document.getElementById("target").innerHTML = dayDate + " " + dayNum + " " + monthShow + " " + currentYear + ", " + hours + "h" + minutes;




    });




    // document.getElementById("element-id").innerHTML = "new-value";
})();