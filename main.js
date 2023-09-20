function tocaSomPom(seletorAudio){
document.querySelector(seletorAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0;  contador < listaDeTeclas.length; contador++) {
  
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = '#som_${intrumento}'; // template string

tecla.onclink = function () {
  tocaSom(idAudio);
}

}
