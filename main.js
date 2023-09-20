function tocaSomPom(seletorAudio){
document.querySelector(seletorAudio).play();
}

if (elemento && elemento.localName === 'audio') {
  elemento.play();
}
else {
  //alert('Elemento não encontrado');
  console.log(Elemento não encontrado ou seletor inválido');
}

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

tecla.onkeydown = function (evento) {
  
  if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList. add('aiva');
  }

}
tecla.onkeyup = function () {
  tecla.classList.remove('ativa');
}

}
