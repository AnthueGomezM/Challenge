
function accionEncriptar() {
    let inputText = document.getElementById('textoEntrada').value;
    if (!/^[a-zñ\s]*$/.test(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('final').value = encryptedText;
}

function accionDesencriptar(){
    let inputText = document.getElementById('textoEntrada').value;
    if (!/^[a-zñ\s]*$/.test(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('final').value = decryptedText;
}

function copiar() {
    let textoSalida = document.getElementById('final').value;
    navigator.clipboard.writeText(textoSalida).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function ocultarElementos() {
    document.getElementById('imagenAviso').style.display = 'none';
    document.getElementById('avisos__sugerencia').style.display = 'none';
    document.getElementById('textoSalida').style.display = 'none';

}

function mostrarElementos() {
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById('salidas').style.justifyContent = 'space-between';
    document.getElementById('final').style.display = 'block';
    document.getElementById('avisos').style.justifyContent = 'space-between'
}