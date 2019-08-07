/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var i = 0;
    var regEx = /\b[a-zA-Z0-9]{7}\b|\b[a-zA-Z0-9]{8}\b/;
    document.getElementById("pass-one").addEventListener("keypress", checkName, false);
    var input = document.getElementById("pass-one").value;

    function checkName(evt) {
        i++;
        document.getElementById("counter").innerHTML = i + "/ 10";
        if (regEx.test(input) === false && i > 10) {
            evt.preventDefault();
            document.getElementById("counter").innerHTML = "10/ 10";
        };
    };


})();