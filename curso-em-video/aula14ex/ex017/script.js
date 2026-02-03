function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1

        tab.style.display = 'block'
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function limpar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    tab.style.display = 'none'
    tab.innerHTML = ''
    num.value = ''
    num.focus()
}