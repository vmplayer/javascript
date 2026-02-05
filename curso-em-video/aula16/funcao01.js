function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}

let res = parimpar(11)
console.log(res)



/*
    Funções:

    chamada => parâmetro => ação => retorno

    Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.

    Uma função pode receber parâmetros e retornar um resultado.

    function ação(){}
    -- -- -- -- -- --
    function ação(param){
        return res // retorno
    }
    ação(5) // Chamada está embaixo
    (o parâmetro valerá 5 pelo)
    <param 5 = param real
    param param = param formal>
    
    ex.

    function parimp(n) {
        if (n%2==0) {
            return 'par'
        }else{
            return 'impar'
        }
    }
    
    let res = parimp(11)
*/