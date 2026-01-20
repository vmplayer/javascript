var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não Vota`)
} else if (idade < 18 || idade >= 67) {
    console.log('Voto opcional')
} else {
    console.log(`Voto obrigatório`)
}


/*
CONDIÇÕES ANINHADAS:
        if (condicional 1) {
            bloco 1
        } else {
            if (condicional 2) {
                bloco 2
            } else {
                bloco 3
            }
        } 
*/