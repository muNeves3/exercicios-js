//3.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay().then(() => console.log('1s'))
    await delay().then(() => console.log('2s'))
    await delay().then(() => console.log('3s'))
}

umPorSegundo();

//3.2
import axios from 'axios';

async function getUserFromGithub(user) {
    await axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log('Usuário não existe');
    })
}

getUserFromGithub('muNeves3');
getUserFromGithub('muNeves3432');

//3.3

class Github {
    static async getRepositories (repo) {
        await axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe')
        })
    }
}

Github.getRepositories('muNeves3/proffy');
Github.getRepositories('rocketseat/dslkvmskv');

//3.4
const buscaUsuario = async usuario => {
    await axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}
buscaUsuario('muNeves3')