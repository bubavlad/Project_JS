
const fetchData = async () => {
    const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response2.json();

    const wrap = document.getElementById('wrap');

    for(let i = 0; i < data.length; i++) {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user-block');

        const header = document.createElement('h3');

        const div = document.createElement('div');
        const btn = document.createElement('button');
        btn.classList.add('buttonInfo');


        header.innerText = `${data[i].id} - ${data[i].name}: `;
        btn.innerText = 'User Info';
        btn.onclick = () => {
            window.location.href = `user-details.html?id=${data[i].id}`;
        }

        div.append(header, btn);
        userBlock.append(div);
        wrap.appendChild(userBlock);
    }
}
void fetchData();