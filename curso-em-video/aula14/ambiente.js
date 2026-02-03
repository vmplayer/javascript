console.log('Vai começar...')
for (let c = 1; c <= 5; c++) {
    console.log(c)
}
console.log('Fim!')

/*
    Uso de while, do ... while e for:

    WHILE:

    while (teste) {
        o código aqui dentro irá se repetir até que o teste se torne false.
    }

    do {
        o bloco aqui dentro será feito e verificado depois até que o teste se torne false
    } while (teste)

    for (inicio; teste; incremento) {
        o bloco que será colocado em loop fica aqui dentro.
    }

    //==//==//==//==//==//==//==//==//

    // Anotação que peguei do usuário @soubrunohorta no YouTube:

    var i = 0
    //INÍCIO DO DO WHILE
    do {
        console.log(`DO WHILE - passo ${i}`)
        if(i==0){
            console.log(`Primeira passagem do DO ocorreu acima`)
        }
        i++
    }while(i < 3)
    //FINAL DO DO WHILE

    //INICIO DO WHILE
    i = 0 //FORÇANDO VALOR DE I=0
    while(i<3){
        console.log(`passagem do while: ${i}`)
        i++
    }
    //FINAL DO WHILE

    //INICIO DO FOR
    //veja que não precisamos forçar o valor de i=0 fora do estrutura
    for(i=0;i<3;i++){
        console.log(`Estrutura FOR: ${i}.`)
    }
*/