function* conversar3( ) {
    let opcao = yield "E ai, tudo bem?"
    if (opcao == 'sim') {
    yield "Ótimo, fico feliz!"
    opcao = yield "Como posso te ajudar? Quer uma piada para começar?"

    if (opcao == "sim"){
            fetch('dados/piadas.json')
            .then(response => response.json ())
            .then(piadas =>{
                let idx = Math.floor(Math.random() * 10 ) - 1
                idx = idx< 0 ? 0 : idx
                let piada = piadas[idx]

                console.log(piada.piada)

                setTimeout( () => {
                    console.log(piada.resposta)
                    console.log ("kkkkkkkkkkkkkkk muito boa né?")
                }
            ,4000 )})
            yield "Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente"

        }else{
            yield "Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente"
        }

    } else {
        yield "Respire fundo e tenha paciência!"
        yield "Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente"
    }

     return "Atendimento finalizado."
}

let conversa = conversar3()

function acao3(){
let resposta = document.getElementById('resposta3').value
let iteracao = conversa.next(resposta)
console.log(iteracao)
}
Pagina-Interativa