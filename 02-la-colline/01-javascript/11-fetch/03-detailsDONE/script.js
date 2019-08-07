/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var target = document.getElementById("target");
        let input = document.getElementById("hero-id").value;
        var url = " http://localhost:3000/heroes";
        fetch(url).then((data) => {
            data.json().then((dataJSON) => {

                /*  dataJSON.forEach((element, index) => {
                     if (parseInt(input) === element.id) {
                         target.innerHTML = element.name;
                     } else {
                         if (isNaN(input) | input <= 0 | index > dataJSON.length && index === dataJSON.length - 1) {
                             target.innerHTML = `Choississez un nombre entre 1 et ${dataJSON.length}`
                         }
                     }
                 }); */



                if (input !== "" && input >= 0 && input < dataJSON.length) {
                    target.innerHTML = dataJSON[input].name;
                } else {
                    target.innerHTML = `Choississez un nombre entre 0 et ${dataJSON.length}.`
                }
            });

        });


    });
})();