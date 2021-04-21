function ValidaNombre(){
    var campo = document.getElementById("campo").value;
    var mensaje = document.getElementById("msgNombre");

    if(campo.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validacorreo(){
    var campo = document.getElementById("campo1").value;
    var mensaje = document.getElementById("msgCorreo");

    if(campo.length < 5){
        mensaje.innerText = "El email debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El email es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validatel(){
    var campo = document.getElementById("campo2").value;
    var mensaje = document.getElementById("msgTel");

    if(campo.length < 9){
        mensaje.innerText = "El teléfono debe de tener al menos 9 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

