/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var target = document.getElementById("target");
        var url = "http://localhost:3000/heroes";
        fetch(url).then((data) => {
            data.json().then((dataJSON) => {
                dataJSON.forEach((el) => {
                    target.innerHTML +=
                        `
                    <li class="hero">
                        <h4 class="title">
                            <strong class="name">${el.name}</strong>
                            <em class="alter-ego">${el.alterEgo}</em>
                        </h4>
                        <p class="powers">${el.abilities}</p>
                    </li>
                    `
                });
            });
        });


    })
})();