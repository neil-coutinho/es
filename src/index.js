// eslint-disable-next-line no-console
console.log('Hello World!');
/* eslint-disable */
console.log("GENERATORS");

function getPosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((data) => console.log(data))
}


function* setup(id) {
    //get post
    //get post comments
    const post = yield getPosts(id);
    console.log(post);
}

const postData = setup();

postData(1);
