/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus onhttps://github.com/becodeorg/LIE-Hamilton-2.12/blob/master/contenu/01-la-prairie/03-javascript/04-dates/05-get-spooky-fridays/script.js it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var array = [];
        var dateObj = new Date(input, month, day);
        var input = document.getElementById("year").value;
        var month = dateObj.getMonth();
        var day = 13;
        for (let month = 0; month < 12; month++) {
            dateObj = new Date(input, month, day);
            if (dateObj.getDay() == 5) {
                console.log(dateObj);

            }
        }

        //  var day = dateObj.getDate();

    });
})();