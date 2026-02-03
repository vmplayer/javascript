function contar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        result.innerHTML = '<strong>ERRO!</strong> Impossível de ser calculado.'
    } else {
        result.innerHTML = 'Contando... <br>'
        let op = Number(start.value)
        let ed = Number(end.value)
        let sink = Number(step.value)

        if(sink == 0) {
            window.alert('Passo invalido, considerando Passo = 1.')
            sink = 1
        }

        if(op < ed) {
            // Contagem crescente
            for(let c = op; c <= ed; c += sink) {
                result.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for(let c = op; c >= ed; c -= sink) {
                result.innerHTML += ` ${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}

// Dedo indicador unicode: \u{1F449}