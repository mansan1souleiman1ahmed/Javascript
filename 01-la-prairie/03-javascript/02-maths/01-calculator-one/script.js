/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", () => {
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        console.log(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        console.log(num1 - num2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        console.log(num1 * num2);
    });

    document.getElementById("division").addEventListener("click", () => {
        var num1 = parseInt(document.getElementById("op-one").value);
        var num2 = parseInt(document.getElementById("op-two").value);
        console.log(num1 / num2);
    });
})();