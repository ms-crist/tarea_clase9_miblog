function button(){
    alert('Hizo click en botón enviar');

}

function hacerclick(){
    document.getElementsByTagName('input')[3].onclick = button;
}

window.onload = hacerclick;