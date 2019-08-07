/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener("click", () => {

        (async () => {
            const posts = await window.lib.getPosts();
            posts.forEach(async (post, index) => {
                const comms = await window.lib.getComments();
                post.comments = comms;

                if (index === posts.length - 1) {
                    console.log(posts);
                }
            });
        })();

    });


})();






/*    window.lib.getPosts((a, b) => {
       console.log(a);
       console.log(b);

   })

    posts.forEach(post => {
        window.lib.getComments(post.id, (err, commts) => {
            post.comments = commts;
        });
    });  */


/* 
        async function abc(a, b) {
            function p() {
                // for (let i = 0; i < a.length; i++) {

                return a[0].id
                //  }
            }

            let promise = new Promise((res, rej) => {
                res(p);



            })

            let result = await promise;
console.log();

        }

        window.lib.getPosts().then(abc) */