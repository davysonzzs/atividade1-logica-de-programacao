alert("atividade 1")

let nome = "davyson"
let idade = 15
let estuda = true

console.log(nome, idade, estuda)

alert("atividade 2")

let num1 = parseInt(prompt("me diga um numero"))
let num2 = parseInt(prompt("me diga outro numero"))

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

console.log(soma, subtracao, multiplicacao, divisao.toFixed(1))

alert("atividade 3")

let seuNome = "davyson"
let curso = "desenvolvimento de sistemas"
let ano = 2025

alert(`
    Olá, meu nome é ${seuNome}, estou matriculado no curso de ${curso} no ano de ${ano}
    `)

alert("atividade 4")

let text1 = "eu amo "
let text2 = "meu curso S2"

let concatenacao = text1 + text2
alert(concatenacao)
alert(`essa frase tem um total de ${concatenacao.length} caracteres`)

alert("atividade 5")

let preco = 19.99
let quantidade = 3

let valorTotal = preco * quantidade
alert(`O total da compra é R$ ${valorTotal}`)