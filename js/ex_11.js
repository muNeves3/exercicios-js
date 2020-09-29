const input = document.getElementById('input');
const ul = document.getElementById('list')

function render() {
    var user = input.value

    if(!user) return;

   

    axios.get(`https://api.github.com/users/${input.value}/repos`)
    .then(function(response) { show(response.data) })
    .catch(error => console.warn(error))
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

