/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var url = "http://localhost:3000/heroes"
        fetch(url).then(function (data) {
            data.json().then((dataJSON) => {
                console.log(dataJSON);

            });
        })
    });

    //https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
})();

/*for (let i = 0; i < dataJSON.length; i++) {
                    console.log(dataJSON[i].id);

                } */