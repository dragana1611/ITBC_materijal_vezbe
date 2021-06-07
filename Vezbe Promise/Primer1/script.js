////////////////////////////////////CALLBACK f-ja
// const posts = [
//     {title: 'Post1', body: 'Ovo je post1'},
//     { title: 'Post2', body: 'Ovo je post2' }
// ];

// function getPosts() {
//     setTimeout(() =>{
//         let output = '';
//         posts.forEach((post, i) =>{
//              output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost(post, callback) {
//     setTimeout(() =>{
//         posts.push(post);
//         callback(); 
//     }, 2000);
// }
// getPosts();
// createPost({ title: 'Post3', body: 'Ovo je post3'}, getPosts);


/////////////////////////////////////// PROMISES

const posts = [
    { title: 'Post1', body: 'Ovo je post1' },
    { title: 'Post2', body: 'Ovo je post2' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, i) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('GRESKA!!!');
            }
        }, 2000);
    });
}
// createPost({ title: 'Post3', body: 'Ovo je post3'})
//         .then(getPosts)
//         .catch(err => console.log(err));

//Async / Await

// async function init() {
//     await createPost({ title: 'Post3', body: 'Ovo je post3' });
//     getPosts();
// }
// init();

////Async / Await / Fetch
async function fetchUsers() {
    const resolve = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resolve.json();
    console.log(data);
}
fetchUsers();

// //Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Good bye'));
// const promise4 = fetch ('https://jsonplaceholder.typicode.com/users').then(response => response.json());
// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

///////////////
function divide(a, b) {
    return new Promise(function (resolve, reject) {
        if (b === 0) {
            reject(`You can't divide by 0!!!`);
            return; // prekida f-ju da ne bi uslo u else granu
        }

        resolve(a / b);
    });
}
divide(10, 0)
    .then(function (result) {
        console.log(`Division Success: ${result}`);
    }).catch(function (error) {
        console.log(`There was an error with the division! `);
        console.log(error);
    });

///////////////////////////
function wait(ms) {
    return new Promise(function (resolve, reject) {

        if (ms <= 0) {
            reject(console.log('Cannot wait 0 seconds or less than 0'));
            return;
        }

        setTimeout(() => {
            resolve();
        }, ms);
    });
}

wait(1000).then(function () {
    console.log('We have waited 1 second!!!')
}).catch(function (error) {
    console.log(`There was an error`);
});

/////////////////////////
let singles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubles = function (niz) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(niz)) {
                resolve(niz.map(n => n * 2));
            }
            else {
                reject(Error('We were expected an arrey'));;             
            }
        }, 3000);
    });
}
doubles(singles)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`Error:`);
    });

