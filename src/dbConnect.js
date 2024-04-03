import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alura:msgkvNQK4_P6!T8@aluracluster.auhoy5e.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Banco ta on!!");

} catch (erro) {
    console.log(erro);
}

export { documentosColecao };