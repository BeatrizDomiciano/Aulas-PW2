/*Para praticar o uso de objetos, execute o seguinte:
- crie uma variável que deve conter um objeto que representará uma moradia, 
com os campos quartos = 2, tipo = “casa”, alugada=true e endereco = “Rua São João, 123”
- utilizando as propriedades do objeto criado, exibir no console a frase: 
Moradia do tipo casa com 2 quartos localizada na Rua São João, 123*/

let moradia = {
    quartos: 2,
    tipo: "Casa",
    alugada: true,
    endereco: "Rua São João, 123"
}

console.log(`Moradia do tipo ${moradia.tipo} com ${moradia.quartos} quartos localizada na ${moradia.endereco}`)
