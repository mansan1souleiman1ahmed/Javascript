/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    var arrayInput = [];
    var array = [];
    var input = document.getElementById("pass-one");
    input.addEventListener("input", () => {

        var input = document.getElementById("pass-one").value;
        abc();

        function abc() {
            arrayInput = array.push(input);
        }

        var regEx = /^(?=(?:\D*\d){2})[a-zA-Z0-9]*$/i;
        var regEx2 = /\b[a-zA-Z0-9]{7}\b|\b[a-zA-Z0-9]{8}\b/;

        if (regEx.test(input) && regEx2.test(input)) {
            document.getElementById("validity").innerText = 'ok';
        } else {
            document.getElementById("validity").innerText = 'pas ok';
        };
    });



})();