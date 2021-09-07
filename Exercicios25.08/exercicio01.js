/*Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente 
os números positivos encontrados no array recebido como entrada.*/


let num = [53 , -38 , 130 , 151 , -55 , 21 , 33 , -66 , -73 , 106]
console.log(`Todos os valores: [${num}]`)

let numPositiv = num.filter(positivos)

console.log(`Somente os positivos: [${numPositiv}]`)


function positivos(num){
    return num > 0
}
