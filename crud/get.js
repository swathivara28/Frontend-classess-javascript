// 1. posts data

// let post_URL = "https://jsonplaceholder.typicode.com/posts";

// // Select the HTML container
// let container = document.getElementById("display-cards");

// // Create async function
// const get_post_data = async () => {

//     let res = await fetch(post_URL);

//     let data = await res.json();

//     console.log(data);

//     data.map((x) => {

//         container.innerHTML += `
//             <section class="card">
//                 <h1>Title: ${x.title}</h1>
//                 <p>Description: ${x.body}</p>
//             </section>
//         `;

//     });

//     let count = 0;

//     for (let index = 0; index < 1; index++) {
//         console.log(data[count]);
//     }
// };

// window.onload = get_post_data;


// 2.user Data.js
// 1 url
// 2 create a function to get the data
// 3 call the function using a btn eventhandler onclick
// 4 container where we will display the data
// 5 fetch the data from the url using fetch method which returns a promise
// 6 the promise will be resolved when the await keyword is used
// 7 the res will be in json format so we need to convert it to json
// 8 we need to display the data in the container

// let User_url = "https://jsonplaceholder.typicode.com/users";

// const get_user_data = async () => {

//     let container = document.getElementById("display-cards");

//     let res = await fetch(User_url);

//     let Users = await res.json();

//     console.log(Users);

//     Users.map((x) => {

//         container.innerHTML += `
//             <div class="card">
//                 <h1>NAME: ${x.name}</h1>
//                 <h2>EMAIL: ${x.email}</h2>
//                 <h3>USERNAME: ${x.username}</h3>
//                 <h4>STREET: ${x.address.street}</h4>
//             </div>
//         `;

//     });
// };

// window.onload = get_user_data;



// 3. Comments Data

// let comments_URL = "https://jsonplaceholder.typicode.com/comments";

// const get_comments_data = async () => {

//     console.log("Function Started");

//     let container = document.getElementById("display-cards");

//     let res = await fetch(comments_URL);

//     console.log("Response:", res);

//     let comments = await res.json();

//     console.log("Comments Data:", comments);

//     comments.map((x) => {

//         container.innerHTML += `
//             <div class="card">
//                 <h1>ID: ${x.id}</h1>
//                 <h2>NAME: ${x.name}</h2>
//                 <h3>EMAIL: ${x.email}</h3>
//                 <h4>BODY: ${x.body}</h4>
//             </div>
//         `;

//     });
// };

// window.onload = get_comments_data;


// 4. Albums data
// let albums_URL ="https://jsonplaceholder.typicode.com/albums";

// const get_albums_data = async () => {
//     console.log("Function Started");

//     let container = document.getElementById("display-cards");

//     let res = await fetch(albums_URL);

//      console.log("Response:", res);

//         let albums = await res.json();

//         console.log("albums Data:", albums);

//         albums.map((x) => {

//             container.innerHTML += `
//                 <div class="card">
//                     <h1>ID: ${x.id}</h1>
//                     <h2>USERID: ${x.userid}</h2>
//                     <h3>TITLE: ${x.title}</h3>
                   
//                 </div>
//             `;

//         });
// };
//  window.onload = get_albums_data;

// 5.Photos data

// let photos_URL = "https://jsonplaceholder.typicode.com/photos";

// const get_photos_data = async () => {

//     console.log("Function Started");

//     let container = document.getElementById("display-cards");

//     let res = await fetch(photos_URL);

//     console.log("Response:", res);

//     let photos = await res.json();

//     console.log("Photos Data:", photos);

//     photos.slice(0, 50).map((x) => {

//         container.innerHTML += `
//             <div class="card">
//                 <h1>ID: ${x.id}</h1>
//                 <h2>TITLE: ${x.title}</h2>
//                 <h3>ALBUM ID: ${x.albumId}</h3>
//                 <img src="${x.thumbnailUrl}">
//             </div>
//         `;

//     });
// };

// window.onload = get_photos_data;


// 6. Todos Data

let todos_URL = "https://jsonplaceholder.typicode.com/todos";

const get_todos_data = async () => {

    console.log("Function Started");

    let container = document.getElementById("display-cards");

    let res = await fetch(todos_URL);

    console.log("Response:", res);

    let todos = await res.json();

    console.log("Todos Data:", todos);

    todos.slice(0, 50).map((x) => {

        container.innerHTML += `
            <div class="card">
                <h1>ID: ${x.id}</h1>
                <h2>USER ID: ${x.userId}</h2>
                <h3>TITLE: ${x.title}</h3>
                <h4>COMPLETED: ${x.completed}</h4>
            </div>
        `;

    });
};

window.onload = get_todos_data;