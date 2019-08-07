/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener('click', () => {
        var inputOne = document.getElementById("pass-one");
        var inputTwo = document.getElementById("pass-two");
        var inputValue1 = inputOne.value;
        var inputValue2 = inputTwo.value;
        if (inputValue1 == inputValue2) {
            console.log("match");
        } else {
            inputOne.setAttribute("class", "error");
            inputTwo.setAttribute("class", "error");

        }
    })
})();