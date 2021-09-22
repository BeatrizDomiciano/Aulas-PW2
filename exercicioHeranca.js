/*a superclasse Moradia inclui o construtor 
(com os atributos id, quartos, alugada e endereço), o método liberar() e o método alugar()*/

class Moradia{
    constructor (id, quartos, alugada, endereco, bairro, cidade){
        this.id = id
        this.quartos = quartos
        this.alugada = alugada
        this.endereco = endereco
        this.bairro = bairro
        this.cidade = cidade
    }

    liberar(){ 
        this.alugada = false
     }

     alugar(){
        this.alugada = true
    }
}

/*a subclasse Casa tem um atributo específico para descrição do quintal 
e o seu método exibir(), que retorna uma frase como 
Casa id 1 com 2 quartos e quintal grande localizada na Rua São João, 123 está liberada*/ 

class Casa extends Moradia{
    constructor(id, quartos, alugada, endereco, bairro, cidade, temQuintal){
        super(id, quartos, alugada, endereco, bairro, cidade)
        this.quintal = temQuintal
    }

    exibir(){
        console.log( `Casa id ${this.id}, com ${this.quartos} quartos, tem quintal? ${this.quintal},  `+
        `localizada na ${this.endereco} Bairro ${this.bairro} - ${this.cidade}. Está alugada? ${this.alugada} `)
     }
}

/*a subclasse Apartamento tem um atributo 
específico para indicar o andar em que está localizado e o seu método exibir(), 
que retorna uma frase como Apartamento id 1 com 2 quartos no andar 5 localizado na Rua São José, 456 está alugada*/

class Apartamento extends Moradia{
    constructor(id, quartos, alugada, endereco, bairro, cidade, andar){
        super(id, quartos, alugada, endereco, bairro, cidade) 
        this.andar = andar
    }
    exibir(){
        console.log( `Apartamento id ${this.id}, com ${this.quartos} quartos, andar ${this.andar}°,  `+
        `localizado na ${this.endereco} Bairro ${this.bairro} - ${this.cidade}. Está alugado? ${this.alugada} `)
     } 
}

//construa um objeto Casa e dispare o seu método exibir()
let casa1 = new Casa (1, 2, true, "Rua São João, nº123", "Planalto", "Ariquemes", true)
let casa2 = new Casa (3, 3, false, "Rua São Francisco, nº1288", "Bela Vista", "Dourados", false)
let casa3 = new Casa (5, 1, true, "Avenida Um, nº5960", "Boa Vista", "Santa Rita", false)

//faça o mesmo para um objeto Apartamento
let apartamento1 = new Apartamento (2, 3, false, "Rua Bahia, nº1081", "São Cristóvão", "Serra", 7)
let apartamento2 = new Apartamento (4, 2, true, "Avenida Santa Rita, nº1433 ", "São Cristóvão", "Serra", 2)
let apartamento3 = new Apartamento (6, 4, false, "Avenida Rui Barbosa, nº8344","São Cristóvão", "Serra", 12)

console.log("Exibir casas")
casa1.exibir()
casa2.exibir()
casa3.exibir()

console.log("")

console.log("Exibir apartamentos")
apartamento1.exibir()
apartamento2.exibir()
apartamento3.exibir()
