alert("Boas vindas ao jogo de numero secreto")
let numeroMaximo = 100 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let tentativas = 1
let numeroChute

// enquanto chete nao for igual a numero secreto
while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`)
    //  se chute for igual numero secreto
    if (numeroSecreto == numeroChute) {
    break

    } else {
        if (numeroChute > numeroSecreto) {
            alert(`o numero secreto e menor que ${numeroChute}`)
        } else {
            alert(`o numero secreto e maior que ${numeroChute}`)
        }
    }
    tentativas++
}
let palavraTentativa = tentativas > 1 ? "tentativa" : "tentativa"

alert(`Voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)