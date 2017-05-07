var tablero = document.getElementById('tablero');
var cartas = [1, 2, 3, 4, 5, 6, 7, 8]
var parejas = cartas.length

cartas = cartas.concat(cartas);
cartas = cartas.sort(function() {
  return Math.random() - 0.5
})

var primerCarta = 0
var segundaCarta = 0

cartas.forEach(function(val) {
  var element = document.createElement('div');
  var imagen = document.createElement('img');
  imagen.src = "img-memorama/" + ("imagen" + (val)) + ".png";
  element.id = val;
  console.log(val);
  element.appendChild(imagen);
  tablero.appendChild(element);
  element.addEventListener('click', function(event) {

    var DOMElement = event.target;


    if (primerCarta !== 0 && segundaCarta !== 0) {
      console.log('Tercer turno')

      // limpiar banderas
      if (primerCarta.id !== segundaCarta.id) {
        primerCarta.classList.remove('abrir');
        segundaCarta.classList.remove('abrir');

      }

      primerCarta = 0
      segundaCarta = 0
    }

    DOMElement.classList.add('abrir')

    if (primerCarta === 0) {
      primerCarta = DOMElement
      console.log('Primer turno')
    } else {
      segundaCarta = DOMElement
      console.log('Segundo turno')

      if (primerCarta.innerText === segundaCarta.innerText) {
        parejas = parejas - 1
      }

      if (parejas === 0) {
        console.log('Ganaste', parejas)
        // alert('Felicidades Ganaste! Eres muy Inteligente.')
        location.reload()
      }
    }


    if (primerCarta === segundaCarta) {

    }
  }, true)

});
