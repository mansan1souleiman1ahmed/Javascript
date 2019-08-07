/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const obj = {
            race: "humain",
            nombreDeMain: "2",
            nombreDePiede: "2",


        };
        obj.lastname = "Souleiman";
        obj.firstname = "Mansan";
        obj.age = "26";
        obj.city = "Liège";
        obj.country = "Belgium";
        obj.ojectTwo = {
            mansan: "mansan is crancky",
            mansanTwo: "mansan is not crancky"
        }
        console.log(obj);

    });
})();