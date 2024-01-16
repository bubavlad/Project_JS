
const postId = new URL(location.href).searchParams.get('id');

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();

    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await response2.json();

    const wrap2 = document.getElementById('wrap-post');

    const h2Post = document.createElement('h2');
    const userIdPost = document.createElement('h3');
    const id = document.createElement('h3');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const div = document.createElement('div');

    h2Post.innerText = 'Post Details:';
    userIdPost.innerText = `User Id: ${post.userId}`;
    id.innerText = `Post Id: ${postId}`;
    h3.innerText = `Title: ${post.title}`;
    p.innerText = ` Body: ${post.body}`;

    div.append(h2Post, userIdPost, id, h3, p);
    wrap2.appendChild(div);

    const divComm = document.createElement('div');
    divComm.classList.add('comm-list');
    const h3Comm = document.createElement('h3');

    h3Comm.innerText = 'Comments:';
    wrap2.appendChild(h3Comm);

    for(let x = 0; x < comments.length; x++) {
        const divSingleComm = document.createElement('div');
        divSingleComm.classList.add('comm-single');
        const h5 = document.createElement('h5');
        const p2 = document.createElement('p');
        const newPostId = document.createElement('h5');
        const commId = document.createElement('h5');
        const email = document.createElement('h5');

        newPostId.innerText = `Post Id: ${postId}`;
        commId.innerText = `Comment Id: ${comments[x].id}`;
        email.innerText = `Email: ${comments[x].email}`;
        h5.innerText = `Name: ${comments[x].name}`;
        p2.innerText = `Body: ${comments[x].body}`;

        divSingleComm.append(newPostId, commId, email, h5, p2);
        divComm.appendChild(divSingleComm);
    }
    wrap2.appendChild(divComm);
}
void fetchData();