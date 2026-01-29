function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var aano = document.getElementById('nasc')
    var res = document.querySelector('div#result')

    if (Number(aano.value) > ano || Number(aano.value) < 1910) {
        res.innerHTML = `<strong>ERRO!</strong> Verifique o ano e tente novamente.`
    } else {
        var sexof = document.getElementsByName('sexo')
        var idade = ano - Number(aano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexof[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade > 10 && idade <= 25) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }else if (sexof[1].checked) {
            genero = "Mulher" 
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade > 10 && idade <= 25) {
                // Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }

            /*
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'bebê.jpg')
            } else if (idade < 25) {
                Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
            */
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        document.createAttribute = 
        res.appendChild(img)
    }
}