/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    image();

    function image() {
        //dynamically add an image and set its attribute
        var img = document.createElement("img");
        img.src = "http://www.randomkittengenerator.com/cats/rotator.php"
        img.id = "pic";
        img.setAttribute("height", "360");
        img.setAttribute("width", "360");
        img.style.margin = "auto";
        var target = document.getElementById("target");
        target.appendChild(img);
        var dataImg = document.getElementById("source");
        dataImg.remove();
    }

})();