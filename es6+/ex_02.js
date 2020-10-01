const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
var idades = usuarios.map(item => {
    return item.idade;
})

console.log('Idades dos usuários \n',idades, '\n');

//2.2
var rocketSeat18 = usuarios.filter(item => {
    if(item.idade > 18 && item.empresa == 'Rocketseat') {
        return item;
    }
})

console.log('Usuários que trabalham na Rocketseat e que tem mais de 18 anos \n',rocketSeat18, '\n');

//2.3
var google = usuarios.find(item => {
    return item.empresa == 'Google'
})

console.log('Usuários que trabalham na google \n' ,google, '\n');

//2.4
var idadesDuplicadas = usuarios.map(item => {
    return item.idade * 2;
})
//console.log(idadesDuplicadas);


for(let i = 0; i < usuarios.length; i++) {
    usuarios[i].idade = idadesDuplicadas[i]
}
console.log('Usuários com idades duplicadas \n',usuarios, '\n');

const cinquenta = usuarios.filter(item => {
    if(item.idade <= 50) {
        return item;
    }
})

console.log('Usuarios com até cinquenta anos \n',cinquenta);



