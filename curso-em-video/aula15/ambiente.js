let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() 

console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

const bef = 1;
const pos = num.indexOf(bef)
if (pos == -1) {
    console.log(`O valor ${bef} não foi encontrado.`)
}else{
    console.log(`O valor ${bef} esta na posição ${pos}.`)
}


/*
    array = vetor
        array é o []
        elemento ocupa:
        espaço da memória
        valor
        índice

        valor = conteúdo

        índice = chave

        cada elemento é composto pelo seu valor e chave de identificação.

        let num = [5, 8, 4]

    Um array é uma variável composta que tem vários elementos. Cada elemento é composto por seu valor e por uma chave (key) de identificação
    num.push = 7
    num.length (largura do array)
    num.sort() - pega todos os elementos e coloca de forma crescente
    indexOf() - pesquisar a existência de uma string e retornar a sua chave (posição).
        O retorno de -1 significa que o JavaScript procurou e não encontrou nenhuma ocorrência (ou seja, a String não existe).


    // Comentário do YouTube por: igorlopesdev

    //VARIÁVEIS COMPOSTAS (Arrays(vetores))

    let num = [5, 8, 2, 9, 3] // cada espaço desta array tem a chave (indice ou index) = 0, 1, 2, 3, 4 respectivamente, ou seja, está dividida em 5 elementos.
    num[5] = 7 // adiciona o valor '7' no index 5, gerando um novo index, que não existia.
    num[2] = 4 // adicionando um valor a um index já existente, substituirá o valor antigo.
    num.push(1) // adiciona o valor '1' no final da array, gerando o index 6.
    num.sort() // ordena os valores de um array em ordem crescente.
    console.log(num)
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor (array) é ${num[0]}`)
    let pos = num.indexOf(4) // procura um valor dentro da array e diz qual é seu index.
        if (pos == -1) { //-1 indica que o val;or não foi encontrado dentro da array.
            console.log('O valor não foi encontrado!')
        } else{
            console.log(`O valor pesquisado está na posição ${pos} `)
        }
*/