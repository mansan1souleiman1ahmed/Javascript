/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        var array = [];

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        console.log(array);
        for (var i = 1; i <= 10; i++) {
            array.push(getRandomIntInclusive(1, 100));
            document.getElementById("n-" + i).innerText = array[i - 1];
        }
        // sums to 100
        var sum = 0;

        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        var average = sum / array.length;



        document.getElementById("min").innerHTML = Math.min(...array);
        document.getElementById("max").innerHTML = Math.max(...array);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    });
})();