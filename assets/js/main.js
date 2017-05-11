var catrina = document.getElementById('catrina');
var divMapaDF = document.getElementById('divMapaDF');
var globoBienvenida = document.getElementById("globoBienvenida");
var imgMapaDF = document.getElementById("imgMapaDF");
catrina.addEventListener("mouseover",function(){abrir(globoBienvenida)});
catrina.addEventListener("mouseout",function(){cerrar(globoBienvenida)});

divMapaDF.addEventListener("mouseover",function(){abrir(imgMapaDF)});
divMapaDF.addEventListener("mouseout",function(){cerrar(imgMapaDF)});

function abrir(elemento){
  // console.log(elemento);
  elemento.className = "tamano imgDFVisible";
}

function cerrar(elemento){
  // console.log(elemento);
  elemento.className = "tamano imgDF";
}

/*Scroll barra-nav*/
var barraNav = document.getElementsByClassName("btn-nav");

document.addEventListener("scroll", function() {
  if(window.scrollY >= 3500) {
    cambiarColorBotonTresNav();
  } else if(window.scrollY >= 2480) {
      cambiarColorBotonDosNav();
  } else if (window.scrollY >= 1240 & window.scrollY < 2480) {
    cambiarColorBotonUnoNav();
  } else if (window.scrollY >= 640 & window.scrollY < 1240) {
    cambiarColorBotonCeroNav();
  } else {
    devolverBotonesAEstiloOriginal();
  }
});
console.log(scrollY);
function cambiarColorBotonCeroNav() {
	  barraNav[0].style.background = "#01DFD7";
    barraNav[0].style.borderRadius = "30%";
    barraNav[0].style.border = "1px solid #01DFD7";
    barraNav[0].style.color = "#000";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
    barraNav[1].style.border = "1px solid #000";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "01DFD7";
}


function cambiarColorBotonUnoNav () {
    barraNav[1].style.background = "#01DFD7";
    barraNav[1].style.color = "#000";
    barraNav[1].style.borderRadius = "30%";
    barraNav[1].style.border = "1px solid #01DFD7";
    barraNav[0].style.border = "1px solid #000";
    barraNav[0].style.color = "#01DFD7";
    barraNav[0].style.background = "#000";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "#01DFD7";
    barraNav[2].style.border = "1px solid #000";
    barraNav[3].style.border = "1px solid #000";
    barraNav[3].style.background = "#000";
    barraNav[3].style.color = "#01DFD7";
}


function cambiarColorBotonDosNav () {
    barraNav[2].style.background = "#01DFD7";
    barraNav[2].style.color = "#000";
    barraNav[2].style.borderRadius = "30%";
    barraNav[2].style.border = "1px solid #01DFD7";
    barraNav[1].style.border = "1px solid #000";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
    barraNav[3].style.border = "1px solid #000";
    barraNav[3].style.background = "#000";
    barraNav[3].style.color = "#01DFD7";

}

function cambiarColorBotonTresNav() {
  barraNav[3].style.background = "#01DFD7";
  barraNav[3].style.color = "#000";
  barraNav[3].style.borderRadius = "30%";
  barraNav[3].style.border = "1px solid #01DFD7";
  barraNav[2].style.background = "#000";
  barraNav[2].style.color = "#01DFD7";
  barraNav[2].style.border = "1px solid #000";
}

function devolverBotonesAEstiloOriginal() {
    barraNav[0].style.background = "#000";
    barraNav[0].style.color = "#01DFD7";
    barraNav[0].style.border = "1px solid #000";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "#01DFD7";
    barraNav[3].style.background = "#000";
    barraNav[3].style.color = "#01DFD7";
}

// seccion del videos

var escogerVideo = document.getElementById("escogerVideo")
escogerVideo.addEventListener("change",seleccionarVideo);

function seleccionarVideo(){
  var videosPresentacion=document.getElementById("videosPresentacion");
  var valor=parseInt(escogerVideo.value);
  var tituloCancion=document.getElementById("tituloCancion");
  var letraCancion=document.getElementById("letraCancion");

  switch (valor) {
    case 0:
      // video.src="https://www.youtube.com/embed/oj7nsq48BcQ?rel=0&autoplay=1"
      tituloCancion.innerHTML="Hello, you can play in this video<br> or select a song to know more<br> of the day of the dead";
      letraCancion.innerHTML="";
      videosPresentacion.src="https://www.youtube.com/embed/-v4-1wFEzM0?rel=0";
      break;
    case 1:
      tituloCancion.innerText ="HERE TOMBS , TOMBS OVER THERE"
      letraCancion.innerHTML ="Among the ruins of a monastery</br> The tombs of a cemetery open</br>CHORUS:<BR>HERE TOMBS , TOMBS OVER THERE <br>TOMBS, TOMBS, TOMBS HA, HA, HA, HA.<br>HERE TOMBS, TOMBS OVER THERE<br> TOMBS, TOMBS, TOMBS HA, HA, HA, HA, HA. <br> The skulls come dancing <br> mummies beautiful eyes sucking <br>CHORUS:<br> HERE TOMBS , TOMBS OVER THERE <br>TOMBS, TOMBS, TOMBS HA, HA, HA, HA.<br>Among the ruins of a monastery</br> The tombs of a cemetery open</br> <br>CHORUS:<br>"
      videosPresentacion.src="https://www.youtube.com/embed/hAeXlsOjOuI?rel=0&autoplay=1";
      break;
    case 2:
      tituloCancion.innerText ="Chumbala Cachumbala"
      letraCancion.innerHTML ="Chumbala cachumbala cachumbala<br>When the clock ticks 1<br>The skulls come out of his grave<br>(chorus)<br>When the clock ticks 2<br>The skulls are caught between 2<br>(chorus)<br>When you mark the 3<br>The skulls are caught again<br>(chorus)<br>When you mark the 4<br>They do not leave their room<br>(chorus)<br>When you mark the 5<br>Skulls beat with earrings<br>(chorus)<br>When you mark the 6<br>They catch themselves back<br>(chorus)<br>When you mark the 7<br>They put a machete<br>(chorus)<br>When you dial the 8<br>They catch each other<br>(chorus)<br>When you dial 9<br>Nobody is moved<br>(chorus)<br>When you mark the 10<br>Follow him again<br>(chorus)<br>When you mark the 11<br>Beyonce is caught<br>(chorus)<br>When you mark the 12<br>The skulls go to his grave"
      videosPresentacion.src="https://www.youtube.com/embed/LSen-shyWp8?rel=0&autoplay=1";
      break;
    case 3:
      break;
    case 5:
      videosPresentacion.src="https://www.youtube.com/embed/-g513VsJchs?rel=0&autoplay=1"
      break;
    default:

      break

  }
}
