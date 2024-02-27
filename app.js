let textoEncriptadoOculto = document.createElement('textarea');
textoEncriptadoOculto.setAttribute('id', 'textoEncriptadoOculto');
textoEncriptadoOculto.style.display = 'none';
document.body.appendChild(textoEncriptadoOculto);

function encriptar() {
const texto = document.getElementById('texto1').value.toLowerCase(); // Convertir a minúsculas
const soloLetras = texto.replace(/[^a-z]/g, ''); // Filtrar caracteres no deseados
const textoEncriptado = soloLetras
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
document.getElementById('texto2').value = textoEncriptado;}

function desencriptar() {
    let textoEncriptado = document.getElementById('texto2').value;
    let textoOriginal = document.getElementById('texto1').value;
    
    // Reemplazar las palabras encriptadas en el texto original
    textoOriginal = textoOriginal
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Reemplazar las palabras encriptadas en el texto encriptado
    textoEncriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('texto1').value = textoOriginal;
    document.getElementById('texto2').value = textoEncriptado;
}

function copiar() {
    const textoEncriptado = document.getElementById('texto2').value;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        // No hacer nada
    }, function() {
        alert('Error al copiar el texto.');
    });
}
