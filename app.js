// importando o MongoClient médulo mongodb
const mongoClient = require("mongodb").MongoClient;

// declara a função assíncrona que realiza operações assíncronas (com o uso do await)
async function listarBooks (){

    // operação assincrona
    // pede para o mongoClient uma promessa de conexão - PRECISAMOS ESPERAR QUE ELA SE REALIZE 
    const conn = await mongoClient.connect("mongodb://localhost");

    // pede para a conexão nos oferecer a database hellomongo
    const database = conn.db("hellomongo");

    // pede para a database nos entregar a coleção books
    const booksCol = database.collection("books");

    // operação assincrona
    // pede para a coleção uma promessa de dados -PRECISAMOS ESPERAR
    const booksData = await booksCol.find();

    // operação assincrona
    // transforma os dados que o mongodb envia para o formato de arrey
    const booksArray = await booksData.toArray();

    console.table(booksArray);
}

listarBooks();