/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var question = prompt("Veux tu du gâteau?", "");
    var a = question.toLowerCase();
    if (a !== "oui") {
        alert("Wesh du gâteau ça se refuse pas frère!");

    } else {
        alert("T as de grosse fesses, bien venue au club!")
    }

})();