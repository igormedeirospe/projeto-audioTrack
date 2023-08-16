let musicas = [{nome:''},
                
{},
{}]


let musica = document.querySelector('audio');
let duracaoFim = document.querySelector('.fim')
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let nomeMusica = document.querySelector(".descricao p");
let nomeArtista = document.querySelector(".descricao h4")

duracaoFim.textContent = segundosParaMinutos(Math.floor(musica.duration));

// abaixo um addevent listner
musica.addEventListener('timeupdate', atualizarBarra)

// abaixo todas as funções que foram usadas
function comecar(){
    musica.play()
    document.getElementById("pause").style.display = 'inline-block'
    play.style.display = 'none'
}

function pararMusica(){
    musica.pause()
    document.getElementById("play").style.display = 'inline-block'
    pause.style.display = 'none'
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    let tempoP = document.querySelector(".inicio")
    tempoP.textContent =  segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos;
    }
    return campoMinutos+":"+campoSegundos;
}
