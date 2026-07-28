var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Data inválida')
}

/*
    CONDIÇÃO MÚLTIPLA:
        Útil em situações específicas (valores pontuais):
        comando (expressão):
            switch(expressão) {
            case valor 1:
                break
            case valor 2:
                break
            case valor 3:
                break
            default: (opcional)
                break (opcional na última)
            }
            o comando Break é obrigatório. Quando o script atingir ele, o script irá pular todas as cases, se o Break não existir, ele irá executar todos os cases até encontrar um break ou até o código acabar.
            o switch funciona apenas com números inteiros, ou caracteres com strings ('').
*/