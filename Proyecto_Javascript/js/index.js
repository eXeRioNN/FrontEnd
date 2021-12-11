var pasados = [];
var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

  $.ajax({
    url: "info.json"

  }).done(function (resultado) {
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    
    //Pasados
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }
    }


    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });  

    
    var html = ""
    for(var j = 0; j < 2; j++){
      html += `
              <div><h2>${pasados[j].nombre}</h2>
              <p>${pasados[j].fecha}</p>
              <p>Lugar: ${pasados[j].lugar}</p
              <p>Descripción: ${pasados[j].descripcion}</p>
              <p>Invitados: ${pasados[j].invitados}</p></div>
              `
    }
    document.getElementById("pasados").innerHTML = html



    //proximos
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
    for(var j = 0; j < 2; j++){
      html += `
              <div><h2>${proximos[j].nombre}</h2>
              <p>${proximos[j].fecha}</p>
              <p>Lugar: ${proximos[j].lugar}</p
              <p>Descripción: ${proximos[j].descripcion}</p>
              <p>Invitados: ${proximos[j].invitados}</p></div>
              `
    }
    document.getElementById("proximos").innerHTML = html
  })
});
