/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts((er, posts) => {
            posts.forEach(post => {
                window.lib.getComments(post.id, (err, commts) => {
                    post.comments = commts;
                });

            });

            console.log(posts);
        });




        /*  window.lib.getComments((callback(p1, p2)));

        function callback() {
            console.log()
             console.log()
        };
 */
    });
})();

/*Get data from a server inside the ajax allows al more than displaying data.

*/