function experiencia(anos) {
    // código aqui
    switch (true) {
        case anos < 0: 
            console.log("Impossível");
            break;
        case anos >= 0 && anos <= 1:
               console.log("Iniciante"); 
            break;
        case anos >= 1 && anos <= 3:
                console.log("Intermediario");
            break;
        case anos >= 3 && anos <= 6:
                console.log("Avançado");
            break;
        case anos >= 7:
            console.log("Jedi Master");
            break;
    }
   }
   var anosEstudo = -1;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master