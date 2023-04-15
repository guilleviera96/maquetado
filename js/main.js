//Dos caminos

function enviarFormulario() {
    var formulario = document.getElementById("contactSection");
    var datos = new FormData(formulario);
    
    // Validación de formulario
    var xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "/procesar");
    xhr1.send(datos);
  }  
