var nomes = ["Diego", "Gabriel", "Lucas"];

const list = document.getElementById('list')

for(let i = 0; i < nomes.length; i ++) {
    var nome = document.createElement('li');
    
    nome.innerHTML = nomes[i];

    list.appendChild(nome);
   
}

