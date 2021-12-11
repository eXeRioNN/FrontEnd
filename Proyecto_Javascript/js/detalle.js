$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  $.ajax({
    url: "info.json"
  }).done(function(resultado) {
    eventos= resultado.eventos;
    var id = location.search.match(/id=(\d)*/)[1]

    evento=eventos.find(function(element) {
      return element.id==id
    })

    var html= `
                <h2>${evento.nombre}</h2>
                <p>${evento.fecha}</p>
                <p>Lugar: ${evento.lugar}</p>
                <p>Descripcion: ${evento.descripcion}</p>
                <p>Costo: ${evento.precio}</p>
                <p>Invitados: ${evento.invitados}</p>
                `
    document.getElementById("evento").innerHTML=html
  });
  
});
