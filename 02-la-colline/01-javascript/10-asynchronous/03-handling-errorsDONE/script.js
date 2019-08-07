/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        function callback(err, noErr) {
            if (err === null) {
                console.log(noErr);
            } else {
                console.error(err);
            }
        };
        window.lib.getPersons(callback);





        /*function callback(err, noErr) {
            if (err) {
                console.error("err")
            } else {
                noErr.forEach(el => {
                    array.push(el.id)
                });
                console.log(array)
            }
        };
        getPersons(window.lib.getPosts(callback));*/

    });
})();