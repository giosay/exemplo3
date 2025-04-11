// // Declaração e variáveis
// var nome ="Fiap";
// console.log(nome)

// let idade =17;
// console.log(idade)

// const sobrenome ="Fiapinho"
// console.log(sobrenome)

// // Undefined

// let exemplo;
// console.log(exemplo)

// let exemplo2 =null;
// console.log(exemplo2)

// // Tipos de variáveis
// let ex1 ="Fiap";
// console.log(typeof ex1)

// let ex2 =25;
// console.log(typeof ex2)

// let ex3 =true;
// console.log(typeof ex3)

// let ex4={};
// console.log(typeof ex4)

// let ex5=[];
// console.log(typeof ex5)

// //Conversões

// //Float => String

// let numFloat =123.456;
// console.log(numFloat.toString())

// //String => Float

// let numstring ="12.963";
// console.log(parseFloat(numstring))

// //Int => String

// let numInt ="12.584";
// console.log(numInt.toString())

// //String => Int

// let numString1 ="120";
// console.log(parseInt(numString1))

// //Metodos

// //Metodo Length - Verifica o tamanho da string

// let frase ="O mundo da tecnologia";
// console.log(frase.length)

// //Metodo indeof - Retorna um trecho do seu código

// let texto = "Progamação Sustentável";
// console.log(texto.indexOf("ão"))

// //Metodo slice - Retorna parte de um texto passando o início e o final
// let info="Programação de ponta";
// console.log(info.slice(15,20))

// //Operadores aritiméticos

// const a=10;
// const b=20;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// //Operadores lógicos

// const c=20;
// const d=30;
// console.log(c < d);
// console.log(c > d && c < 10);
// console.log(c > d || d > c);
// console.log(c == d || d <= c);

// //Operações de comparação

// const e = 10;
// const f = 30;
// console.log(e == f);
// console.log(e === f);
// console.log(e != f);

// //Condicional

// if(true){
//     console.log("é verdadiro")
// }

// let exemplo1 = 1;
// if(exemplo1 == 1){
//     console.log("está correto")
// }

//if/else

// let nome1 = "fiap";
// if(nome1 == "fiap"){
//     console.log("Nome correto")
// }
// else{
//     console.log("Nome Errado")
// }

// //IF encadeado ou Aninhado

// let idade = 13;
// if(idade <= 14){
//     console.log("Não pode entrar, é menor")
// }
// else if(idade >14 && idade <= 18){
//     console.log("podeentrar e curtir")
// }
// else if(idade > 18 && idade <=50){
//     console.log("Perigo, seus pais estão na balada")
// }
// else{
//     console.log("Você deve ficar no sofá assistino Netflix")
// }

// //switch case

// let time = "Corinthians";
// switch(time){
//     case "Corinthians":
//         console.log("Melhor time!")
//         break;
//     case "São Paulo":
//         console.log("É tão ruim que não consegue ganhar em casa, bambi???")
//         break;
//     case "Palmeiras":
//         console.log("51 é pinga!")
//         break;
//     default:
//         console.log("Nenhuma das opções válidas")
//     }

// //Ternario

// let valor = 100;
// let resultado = valor == 100 ? "Valor Certo": "Valor Errado";
// console.log(resultado);

// //Exercício

// let media = 6;
// let resultado1 = media >= 6 ? "Passou de ano": "Não passou de ano, burro";
// console.log(resultado1);

// //Estrutura de repetição

// for(let i = 0; i<10; i++){
//     console.log("o valor de i é", i)
// }

// let f = 0;
// while(f < 10){
//     console.log("o valor de f é", f)
//     f++;
// }

// // do while

// let w = 0;
// do{
//     console.log("do while", w)
//     w++
// }while(w <= 20)

//Jogo de adivinhação

//declarando uma variável indefinida
let palpite;
const sorteio = Math.floor(Math.random() * 10) +1;

do{
    palpite = parseInt(prompt("Escolha um número entre 1 e 10"))
}while(palpite !== sorteio)
alert(`Parabéns você ganhou o jogo ${palpite}`)