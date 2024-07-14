// Seleciona todos os botões com a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla')

// Função para tocar o som correspondente ao botão clicado
function tocaSom(idAudio) {
    const audio = document.querySelector(idAudio)
    if (audio && audio instanceof HTMLAudioElement) {
        audio.play()
    } else {
        console.log(`Elemento de áudio não encontrado para o ID: ${idAudio}`)
    }
}

// Função para adicionar a classe 'ativa'
function adicionarClasseAtiva(tecla) {
    if (tecla instanceof Element) {
        tecla.classList.add('ativa')
    }
}

// Função para remover a classe 'ativa'
function removerClasseAtiva(tecla) {
    if (tecla instanceof Element) {
        tecla.classList.remove('ativa')
    }
}

// Adiciona evento de clique a cada botão
listaDeTeclas.forEach(tecla => {
    const classeTecla = tecla.classList[1]
    const idAudio = `#som_${classeTecla}`

    tecla.onclick = () => tocaSom(idAudio)

    tecla.onkeydown = event => {
        if (event.code === 'Space' || event.code === 'Enter') {
            adicionarClasseAtiva(tecla)
            tocaSom(idAudio)
        }
    }

    tecla.onkeyup = event => {
        if (event.code === 'Space' || event.code === 'Enter') {
            removerClasseAtiva(tecla)
        }
    }
})

// Evento para detectar teclas pressionadas a nível de documento
document.addEventListener('keydown', event => {
    if (event.code === 'Space' || event.code === 'Enter') {
        const tecla = document.querySelector('.tecla:focus')
        if (tecla && tecla.classList.contains('tecla')) {
            adicionarClasseAtiva(tecla)
        }
    }
})

document.addEventListener('keyup', event => {
    if (event.code === 'Space' || event.code === 'Enter') {
        const tecla = document.querySelector('.tecla:focus')
        if (tecla && tecla.classList.contains('tecla')) {
            removerClasseAtiva(tecla)
        }
    }
})
