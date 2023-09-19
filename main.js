function tocaSomPom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTecla[0].onclick = tocaSomPom;
for (let contador = 0;  contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = '#som_${intrumento}'; // template string


tecla 
