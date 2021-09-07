/*Crie uma função listarDisponiveis(), que deve receber um array de objetos moradia, como o do ex 2. 
Utilizando um laço de repetição for, a função deve retornar um novo array contendo apenas as moradias que não estão alugadas.
Após executar a função, exibir no console a mesma frase do ex 2 para cada objeto do array retornado.*/ 

let moradia1 = {
    quartos: 2,
    tipo: "Casa",
    alugada: true,
    endereco: "Rua São João, 123"
}
let moradia2 = {
    quartos: 3,
    tipo: "Apartamento",
    alugada: false,
    endereco: "Rua Bahia, 16081 - Andar 9"
}
let moradia3 = {
    quartos: 5,
    tipo: "Chácara",
    alugada: false,
    endereco: "Rua Quinze de Novembro, 9132"
}
let moradia4 = {
    quartos: 3,
    tipo: "Casa",
    alugada: false,
    endereco: "Rua São Francisco, 1288"
}
let moradia5 = {
    quartos: 2,
    tipo: "Apartamento",
    alugada: true,
    endereco: "Avenida Santa Rita, 1433 - Andar 2"
}
let moradia6 = {
    quartos: 1,
    tipo: "Casa",
    alugada: true,
    endereco: "Avenida Um, 5960"
}
let moradia7 = {
    quartos: 4,
    tipo: "Apartamento",
    alugada: true,
    endereco: "Avenida Rui Barbosa, 8344 - Andar 12(Cobertura)"
}

let moradias = []
moradias.push(moradia1)
moradias.push(moradia2)
moradias.push(moradia3)
moradias.push(moradia4)
moradias.push(moradia5)
moradias.push(moradia6)
moradias.push(moradia7)


let disponiveis = moradias.filter(listarDisponiveis) 
disponiveis.forEach(mostrarDisponiveis)


function listarDisponiveis(moradia){
  return moradia.alugada == false
}

function mostrarDisponiveis(disponiveis){
    console.log(`Moradia do tipo ${disponiveis.tipo} com ${disponiveis.quartos} quartos localizada na ${disponiveis.endereco} - DISPONÍVEL`)
}