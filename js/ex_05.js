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

function habilidades(usuario) {
    for(let i = 0; i < usuarios.length; i++) {
        console.log(`O ${usuarios[i].nome} tem as habilidades ${usuarios[i].habilidades.join(', ')}`)
    }
    
}

habilidades(usuarios);

