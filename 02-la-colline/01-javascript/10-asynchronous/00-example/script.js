/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const setupIntervalMessage = (label, delay) => {
        let count = 0;

        return setInterval(() => console.log(`${label}:`, ++count), delay);
    };

    let intervals = [];

    document.getElementById("run").addEventListener("click", () => {
        if (intervals.length) {
            intervals = intervals.filter(clearInterval);
            console.clear();
        }

        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
})();
/*
call bac promises and async synthax => ways to deal with async data.That means that smthing is going on you don t want to wait until that thing is done to continue your programme, you want to continue while it is happenning asynchronously rather tharn a synchronous programming where happens and you wait until it is completely finished and you move on to the next.

Relevant to JS bcs you r gonna need to make request to servers elsewhere and it can take seconds to get your data back and you might not want your program to stall and wait for that data to come back and you wanna keep going doing smth.

The function call back where used for long time until Es6 has been released. Or ES2015 where promises where introduced to the language. It a more elegant way to handle the async data.

And then the asynch await were introduced and they are still dealing with promises but in a different way.

const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post two', body:'This is post two'}
];
Here we create a function, we want to fetch but we have to keep in mind that it can take a couple of seconds. This is why we use setTimeout it takes a call back function and takes in a certain amount of time where you wanna delay as a second parameter.

Objective of the function getPost is to get the "Post One and Post Two" and put them in the page.

function getPosts() {
setTimeout(function () {
    let output = "";
    posts.forEach((post, index) => {
        output +=`<li>${post.title}</li>`
    });
    document.body.innerHTML = output;

},1000);
}
function createPost (post) {
    setTimeout(()=> {
        posts.push(post);

    },2000);
}
getPosts();
createPost({title:'Post three', body:'This is post three'});

Now we can't see the post three displayed bc the time of the create post took longer than the getpost. By the post three is created the dom was already painted.
This is where a async programming comes in and this where call backs come in and this is where call back come in.
Let's use the callback function to make it work:  //With the function callback we want it to be executed right after the post is pushed on. 
function createPost (post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();

    },2000);
}
createPost({title:'Post three', body:'This is post three'}, getPosts);
What happens here is that the createPost waits the seconds before posting the posts. It waits because it needs to wait the 2 sec to create the new posts.


The same exemple with promises. 


Promises is a JS object with properties and methods(then()===>allows us to make use of the promesse and being able to determine when that promesse is completed. thenable we can use the method then with it. and catch()) 
We use those method to take advantage of promesses. 
Represents  the eventual completion or failure of an ASYNCHRONOUS OPERATION.

PROVIDES A RESULTING VALUE.
PROMESSE WILL ALWAYS PROVIDE A VALUE.
A JS object that have the features that allows us to work asynchronously.
We call some function it might be to connect to a server to retrieve data  from a website  and to process some data that function is set up to return a promises. We can then use that promise to wait for the code to finish and then wait and to then see the result === its value.Other code will continue to execute and doesnt have to wait for the promese.
let promise = asyncFunction();
 we can use the "then method" to respond when the promesse is resolved or failed bc the then will allw us to respond to both.
 promise.then(function To Be Invocted Onece The Promise is Resolved (or failed it depends on you )) 




 Promise  
 let p = new Promise ((resolve, reject) => {
let a = 1+1;
if(a==2){
    resolve("Sucess")

}else {
reject("Failed")
}
 });
How we can react with promises.

p.then()you will do smthing else after I am done with that.

p.then((message) => {
    console.log("This is in the the then" + message)
}).catch((message) => {
    console.log("This is in the catch" + message)
})


*/