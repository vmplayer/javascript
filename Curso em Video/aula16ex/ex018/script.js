// #1

let num = document.getElementById('num')
let list = document.getElementById('list')
let result = document.querySelector('div#result')
let valores = []

// #2

function isNumber(n) {
    // Identifica se o número é um número e está dentro dos conformes (entre 1 e 100)
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function addNumber() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `value${num.value}`
        list.appendChild(item)
        result.innerHTML = ''
        num.value = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.focus()
}

function final() {
    if (valores.length == 0) {
        window.alert('O programa não pode ser finalizado sem um ou mais valores na lista.')
    }else{
        let tot = valores.length

        if (tot == 1) {
            result.innerHTML = ''
            result.innerHTML += `Ao todo temos 1 item cadastrado.`
        }else {
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }
                if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
            media = soma / tot

            result.innerHTML = ''
            result.innerHTML += `<p>Ao todo temos ${tot} itens cadastrados.</p>`
            result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            result.innerHTML += `<p>Somando todos os valores, obtemos ${soma}.</p>`
            result.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
    }
}

/*
    É chamada uma variável para o número, então a lista, então os resultados, então é criada uma lista de valores chamada valores, onde vai ser armazenado os resultados, possívelmente.

*/