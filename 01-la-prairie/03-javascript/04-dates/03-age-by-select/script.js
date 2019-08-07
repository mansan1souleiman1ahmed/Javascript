/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    document.getElementById("run").addEventListener("click", function (para1, para2, para3) {
        para1 = document.getElementById("dob-day").value;
        para2 = document.getElementById("dob-month").value;
        para3 = document.getElementById("dob-year").value;
        var age = year - para3;

        if (para3 < year && para2 >= month && para3 >= day) {
            alert(age - 1);
        } else {
            alert(age);

        }



    })

})();