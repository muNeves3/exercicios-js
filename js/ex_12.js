const input = document.getElementById('input');
const ul = document.getElementById('list')

function render() {
    var user = input.value

    if(!user) return;

    loading();

    axios.get(`https://api.github.com/users/${input.value}/repos`)
    .then(function(response) { show(response.data) })
    .catch(error => error())
}

function loading() {
    ul.innerHTML = "";

    const liEl = document.createElement('li');
    liEl.innerHTML = 'Loading...';
    ul.appendChild(liEl)
}

function error() {
    ul.innerHTML = "";

    const liErr = document.createElement('li');
    liErr.innerHTML = "Erro";

    ul.appendChild(liErr);
}

function show(repositories)  {
    ul.innerHTML = "";

    for(repo of repositories) {
        const name = document.createTextNode(repo.name);
        const li = document.createElement('li');
        li.appendChild(name);
        ul.appendChild(li);
    }
}

