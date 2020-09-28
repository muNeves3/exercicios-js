var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

function printUser() {
    const { cidade, uf, bairro, rua, numero } = endereco;

    console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}`);
    //ou
// console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`);
}



printUser();