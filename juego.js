var tablero = document.getElementById('tablero');
var cartas = [1, 2, 3, 4, 5, 6, 7, 8];
var parejas = cartas.length;
var primerCarta = 0;
var segundaCarta = 0;
//creas las cartas de forma aleatoria y se generan los pares

cartas = cartas.concat(cartas);
cartas = cartas.sort(function() {
  return Math.random() - 0.5
});

cartas.forEach(function(val) {
  var div = document.createElement('div');
  var imagen = document.createElement('img');
  imagen.src = "img-memorama/" + ("imagen" + (val)) + ".png";
  imagen.className = "tarjeta";
  div.id = val;
  div.className = "tarjetas";
  div.appendChild(imagen);
  tablero.appendChild(div);
  div.addEventListener('click', function(event) {
    var tarjetatocada = event.target;
    if (primerCarta !== 0 && segundaCarta !== 0) {
    // limpiar banderas
      if (primerCarta.id !== segundaCarta.id) {
        primerCarta.classList.remove('abrir');
        segundaCarta.classList.remove('abrir');
      };
      primerCarta = 0;
      segundaCarta = 0;
    };
    tarjetatocada.classList.add('abrir');
    if (primerCarta === 0) {
      primerCarta = tarjetatocada;
    } else {
      segundaCarta = tarjetatocada;
      if (primerCarta.id === segundaCarta.id) {
        parejas = parejas - 1;
        console.log(parejas);
      }
      if (parejas === 0) {
        console.log('Ganaste', parejas);
       alert('Congratulations, you win! You are very smart.')
        location.reload();
      }
    }
        if (primerCarta === segundaCarta){
    };
  }, true)
});
