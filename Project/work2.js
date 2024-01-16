
const userId = new URL(location.href).searchParams.get('id');

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    const wrap = document.getElementById('wrap-user');

    const header = document.createElement('div');
    header.classList.add('wrap-user-header');
    const ul = document.createElement('ul');
    const name = document.createElement('h2');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const address = document.createElement('h3');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const geo = document.createElement('h3');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const company = document.createElement('h3');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    name.innerText = `Name: ${user.name}:`;
    id.innerText = `Id: ${user.id};`;
    username.innerText = `User Name: ${user.username};`;
    email.innerText = `Email: ${user.email};`;
    address.innerText = 'Address:';
    street.innerText = `Street: ${user.address.street};`;
    suite.innerText = `Suite: ${user.address.suite};`;
    city.innerText = `City: ${user.address.city};`;
    zipcode.innerText = `Zipcode: ${user.address.zipcode};`;
    geo.innerText = 'Geo:';
    lat.innerText = `Lat: ${user.address.geo.lat};`;
    lng.innerText = `Lng: ${user.address.geo.lng};`;
    phone.innerText = `Phone: ${user.phone};`;
    website.innerText = `Website: ${user.website};`;
    company.innerText = 'Company:';
    companyName.innerText = `Company Name: ${user.company.name};`;
    catchPhrase.innerText = `Catch Phrase: ${user.company.catchPhrase};`;
    bs.innerText = `Bs: ${user.company.bs}.`;

    const btn = document.createElement('button');
    btn.classList.add('buttonPost');
    btn.innerText = 'Show Posts Of Current User';
    btn.onclick = () => {
        if (wrap2.style.display === 'block') {
            wrap2.style.display = 'none';
            btn.innerText = 'Show Posts Of Current User';
        } else {
            wrap2.style.display = 'block';
            btn.innerText = 'Hide Posts Of Current User';
        }
    }

    ul.append(name, id, username, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, companyName, catchPhrase, bs);
    header.appendChild(ul);
    wrap.append(header, btn);

    const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await response2.json();
    const wrap2 = document.getElementById('wrap-posts');
    const div2 = document.createElement('div');
    div2.classList.add('postsList');

    for(let i = 0; i < posts.length; i++) {
        const div = document.createElement('div');
        div.classList.add('post');
        const title = document.createElement('h4');

        title.innerText = `Title: ${posts[i].title}`;

        const btn = document.createElement('button');
        btn.innerText = 'View';
        btn.onclick = () => {
            window.location.href = `post-details.html?id=${posts[i].id}&userId=${user.id}`;
        }

        div.append(title, btn);
        div2.appendChild(div);
        wrap2.appendChild(div2);
    }
    wrap2.style.display = 'none';
}
void fetchData();

