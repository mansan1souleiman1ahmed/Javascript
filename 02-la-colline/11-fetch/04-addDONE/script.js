/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var nameInput = document.getElementById("hero-name").value;
        var alertEgoInput = document.getElementById("hero-alter-ego").value;
        var abilitiesInput = document.getElementById("hero-powers").value;
        var url = " http://localhost:3000/heroes";
        fetch(url).then((data) => {
            data.json().then((dataJSON) => {
                let a = dataJSON.length + 1;
                dataJSON.id = a;
                dataJSON.name = nameInput;
                dataJSON.alertEgo = alertEgoInput;
                dataJSON.abilities = abilitiesInput;
                console.log(dataJSON);
            });
        });

    });
})();