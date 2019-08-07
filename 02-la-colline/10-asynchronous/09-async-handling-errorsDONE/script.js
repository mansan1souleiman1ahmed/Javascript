/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        (async () => {

            try {
                const posts = await window.lib.getPersons();
                console.log(posts);
            } catch (error) {
                console.error(error);
            }


        })();
    })
})();


/* 
        function callback(err, noErr) {
            if (err) {
                console.error(err);

            } else {
                console.log(noErr);
            }
        };
        window.lib.getPersons(callback);
 */