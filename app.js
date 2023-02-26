/*

document.head.appendChild((s => (s.src = 'https://exemplo.com/arquivo.js', s))(document.createElement('script')));

a linha acima adiciona o script ao jogo

https://pixworld.io/mundo20023

link do jogo

https://cdn.pixabay.com/download/audio/2021/09/06/audio_cb1c3e82d9.mp3

link do audio

document.head.appendChild((s => (s.src = 'https://exemplo.com/arquivo.js', s))(document.createElement('script')));

comando para adicionar o raw no script

https://raw.githubusercontent.com/ClaudioSS01/mmorpg/main/app.js
link do raw

script montado:


https://cdn.pixabay.com/download/audio/2021/09/06/audio_cb1c3e82d9.mp3");document.head.appendChild((s => (s.src = 'https://raw.githubusercontent.com/ClaudioSS01/mmorpg/main/app.js', s))(document.createElement('script')));console.log("adicionado


*/

funciton iniciar(){
colocando_painel()
}
iniciar()

function colocando_painel(){
try{
// cria uma div responsiva
const div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = '0vmin';
div.style.left = '0vmin';
div.style.width = '20%';
div.style.height = '10%';
div.style.backgroundColor = 'blue';

// cria os elementos de texto para HP e GOLD
const hpText = document.createElement('p');
hpText.innerText = '❤️ : 100'; // substitui "HP" por um emoji de coração
const goldText = document.createElement('p');
goldText.innerText = '💰 : 10'; // substitui "GOLD" por um emoji de moeda

// adiciona os elementos de texto à div
div.appendChild(hpText);
div.appendChild(goldText);

// adiciona a div ao body do documento
document.body.appendChild(div);

}catch(e){
console.log(e)
}
}
