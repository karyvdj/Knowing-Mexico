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
  if(window.scrollY >= 2480) {
      cambiarCOlorBotonDosNav ()
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
    barraNav[0].style.color = "#000";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "01DFD7";
}


function cambiarColorBotonUnoNav () {
    barraNav[1].style.background = "#01DFD7";
    barraNav[1].style.color = "#000";
    barraNav[0].style.color = "#01DFD7";
    barraNav[0].style.background = "#000";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "#01DFD7";
}


function cambiarCOlorBotonDosNav () {
    barraNav[2].style.background = "#01DFD7";
    barraNav[2].style.color = "#000";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
}

function devolverBotonesAEstiloOriginal() {
    barraNav[0].style.background = "#000";
    barraNav[0].style.color = "#01DFD7";
    barraNav[1].style.background = "#000";
    barraNav[1].style.color = "#01DFD7";
    barraNav[2].style.background = "#000";
    barraNav[2].style.color = "#01DFD7";
}