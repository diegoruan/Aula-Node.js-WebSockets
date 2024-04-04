import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

// eslint-disable-next-line no-unused-vars, no-undef
const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

function emitirExluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
    
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExluirDocumento };