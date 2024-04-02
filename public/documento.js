import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const paramentros = new URLSearchParams(window.location.search);
const nomeDocumento = paramentros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", ()=> {
    emitirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento});
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor };