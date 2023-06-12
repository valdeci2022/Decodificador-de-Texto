const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chave" de criptografia que utilizaremos são:
// 'A letra "e" é convertida para "enter" '
// 'A letra "i" é convertida para "imes" '
// 'A letra "a" é convertida para "ai" '
// 'A letra "o" é convertida para "ober" '
// 'A letra "u" é convertida para "ufat" '

function encriptar() {
    const textoEncriptar = textArea.value;
    let textoEncriptado = "";

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // comando para conversão de palavras
    textoEncriptado = textoEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar() {
    const textoDesencriptar = mensagem.value;
    let textoDesencriptado = "";

    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]; // comandos para conversão de palavras
    textoDesencriptado = textoDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptado.includes(matrizCodigo[i][0])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    textArea.value = textoDesencriptado;
    mensagem.value = "";
}
