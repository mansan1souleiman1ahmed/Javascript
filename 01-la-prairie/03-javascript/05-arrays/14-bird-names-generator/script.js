/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [{
            name: "mouette",
            fem: true
        },
        {
            name: "corbeau"
        },
        {
            name: "mésange",
            fem: true
        },
        {
            name: "hibou"
        },
        {
            name: "buse",
            fem: true
        },
        {
            name: "pigeon"
        },
        {
            name: "pie",
            fem: true
        },
        {
            name: "vautour"
        },
        {
            name: "faucon"
        },
        {
            name: "rouge-gorge"
        },
        {
            name: "tourterelle",
            fem: true
        },
        {
            name: "corneille",
            fem: true
        },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () => {

        var target = document.getElementById("target");
        var newArray = Array.from(adjectives);

        //Define the random values.
        let randomObjet = Math.floor(Math.random() * birds.length);
        let randomArray = Math.floor(Math.random() * newArray.length);

        if (birds[randomObjet].fem) {
            target.innerHTML = `${birds[randomObjet].name}  ${newArray[randomArray]}e<br>`
        } else {
            target.innerHTML = `${birds[randomObjet].name}  ${newArray[randomArray]}<br>`
        }
    });
})();

/*   


       var randomItem = newArray[Math.floor(Math.random() * newArray.length)];
       console.log(randomItem.length);
   }); */
/* birds.forEach(el => {
     if (el.fem == true) {
         console.log(el.name + adjectives.value);
     }*/