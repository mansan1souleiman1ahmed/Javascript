/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        abc();

        function abc() {


            window.lib.getPosts().then((para1, para2) => {
                console.log(para1)

            });
        }
        async function asyncCall() {
            var result = await abc();
            console.log(result);
            // expected output: 'resolved'
        }



    });

})();
/*Mansan30Etoiles */