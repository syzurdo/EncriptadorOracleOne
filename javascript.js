function mayusculasCaracteres(dato) {
  datosAceptados = /[a-z\s]/;


  for (var i = 0; i < dato.length; i++) {
    if (datosAceptados.test(dato[i]) == false) {
      return false;
    }
  }
}

function copiar() {
  var content = document.getElementById("mensajeCopiar").innerHTML;
  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("Mensaje copiado.");
    })
    .catch((err) => {
      console.log("sucedió un error", err);
    });
}

function encriptar() {
  var contenido = document.getElementById("MensajeTextarea").value;

  if (contenido) {
    const encriptado = new Array();
    if (mayusculasCaracteres(contenido) == false) {
      alert("solo minusculas sin acentos");
    } else {
      for (var i = 0; i < contenido.length; i++) {
        if (contenido[i] == "e") {
          encriptado[i] = "enter";
        } else if (contenido[i] == "a") {
          encriptado[i] = "ai";
        } else if (contenido[i] == "i") {
          encriptado[i] = "imes";
        } else if (contenido[i] == "o") {
          encriptado[i] = "ober";
        } else if (contenido[i] == "u") {
          encriptado[i] = "ufat";
        } else {
          encriptado[i] = contenido[i];
        }
      }
      //array de id a ocultar
      var datos = ["imagen", "mensaje1", "mensaje2"];

      for (var i = 0; i < datos.length; i++) {
        ocultar(datos[i]);
      }

      //array de id a mostrar

      var datos = ["mensajeCopiar", "copiar"];

      for (var i = 0; i < datos.length; i++) {
        mostrar(datos[i]);
      }
      alert("Mensaje Encriptado");

      document.getElementById("mensajeCopiar").innerHTML = encriptado.join("");
    }
  } else {
    alert("Escribe el mensaje para poder encriptarlo");
  }
}

function desencriptar() {
  var contenido = document.getElementById("MensajeTextarea").value;

  if (contenido) {
    if (mayusculasCaracteres(contenido) == false) {
      alert("solo minusculas sin acentos");
    } else {
      var encriptado = contenido.replaceAll("enter", "e");
      encriptado = encriptado.replaceAll("imes", "i");
      encriptado = encriptado.replaceAll("ai", "a");
      encriptado = encriptado.replaceAll("ober", "o");
      encriptado = encriptado.replaceAll("ufat", "u");

      //array de id a ocultar
      var datos = ["imagen", "mensaje1", "mensaje2"];

      for (var i = 0; i < datos.length; i++) {
        ocultar(datos[i]);
      }

      //array de id a mostrar

      var datos = ["mensajeCopiar", "copiar"];

      for (var i = 0; i < datos.length; i++) {
        mostrar(datos[i]);
      }

      document.getElementById("mensajeCopiar").innerHTML = encriptado;
    }
  } else {
    alert("Escribe el mensaje para poder encriptarlo");
  }
}

function limpiar() {
  document.getElementById("MensajeTextarea").value = "";
  var datos = ["imagen", "mensaje1", "mensaje2"];

  for (var i = 0; i < datos.length; i++) {
    mostrar(datos[i]);
  }

  //array de id a mostrar

  var datos = ["mensajeCopiar", "copiar"];

  for (var i = 0; i < datos.length; i++) {
    ocultar(datos[i]);
  }
}

function ocultar(datos) {
  document.getElementById(datos).style.display = "none";
}
function mostrar(datos) {
  document.getElementById(datos).style.display = "block";
}
