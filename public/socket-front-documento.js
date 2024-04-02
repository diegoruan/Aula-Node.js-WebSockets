import { atualizaTextoEditor } from "./documento.js";

// eslint-disable-next-line no-unused-vars, no-undef
const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome);
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };