/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        function callback(a, b) {
            console.log(b);
        }
        window.lib.getPosts(callback);

        /*  function callback(para1, para2) {
                     para1 = setInterval(launch, 2000);

                     function launch() {
                         console.log("success")
                     } 

            }*/


    });
})();
/*The window object is supported by all browser.It represents the  */