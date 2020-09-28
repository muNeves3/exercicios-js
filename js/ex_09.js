var nomes = ["Diego", "Gabriel", "Lucas"];

var input = document.getElementById("input");

const list = document.getElementById('list')

for(let i = 0; i < nomes.length; i ++) {
    var nome = document.createElement('li');
    
    nome.innerHTML = nomes[i];

    list.appendChild(nome);
   
}

function adicionar() {
    var li = document.createElement('li');

    var text = input.value;

    li.innerHTML = text;

    list.appendChild(li);
    
}