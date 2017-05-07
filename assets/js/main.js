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
