# Rocketseat Javascript exercices

## Exercícios do módulo 1::rocket:

**1º exercício**

Crie uma função que dado o objeto a seguir:

 ```JavaScript
 var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
 ```
 
Retorne o seguinte conteúdo:

 ```
 O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
 nº 1293.
 ```
 
 **2º exercício**
 
 Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
 
 ```JavaScript
function pares(x, y) {
 // código aqui
}
pares(32, 321);
 ```

 **3º exercício**
 
 Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

 ```JavaScript
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
 ```

 **4º exercício**
 
 Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

 ```JavaScript
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
 ```
 
 **5º exercício**
 
 Dado o seguinte vetor de objetos:
 
 ```JavaScript
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
 ```
 
 Escreva uma função que produza o seguinte resultado:
 
 ```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 ```

## Exercícios do módulo 2: :rocket:

**1º Exercício**

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

**2º Exercício**

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```JavaScript
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```
