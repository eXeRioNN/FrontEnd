var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {
  $.ajax({
    url: "info.json"
  
  }).done(function (resultado) {
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;


    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy){
        proximos.push(eventos[i]);
      }
    }


    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });  


    var html = ""
    for(var j = 0; j < proximos.length; j++){
      html += `
              <a href="detalle.html?id=${proximos[j].id}">
              <h2>${proximos[j].nombre}</h2>
              <p>${proximos[j].fecha}</p>
              <p>Lugar: ${proximos[j].lugar}</p
              <p>Descripción: ${proximos[j].descripcion}</p></a>
              `
    }
    document.getElementById("proximos").innerHTML = html
  })
});
