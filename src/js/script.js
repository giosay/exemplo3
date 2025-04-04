// Declaração e variáveis
var nome ="Fiap";
console.log(nome)

let idade =17;
console.log(idade)

const sobrenome ="Fiapinho"
console.log(sobrenome)

// Undefined

let exemplo;
console.log(exemplo)

let exemplo1 =null;
console.log(exemplo1)

// Tipos de variáveis
let ex1 ="Fiap";
console.log(typeof ex1)

let ex2 =25;
console.log(typeof ex2)

let ex3 =true;
console.log(typeof ex3)

let ex4={};
console.log(typeof ex4)

let ex5=[];
console.log(typeof ex5)

//Conversões

//Float => String

let numFloat =123.456;
console.log(numFloat.toString())

//String => Float

let numstring ="12.963";
console.log(parseFloat(numstring))

//Int => String

let numInt ="12.584";
console.log(numInt.toString())

//String => Int

let numString1 ="120";
console.log(parseInt(numString1))

//Metodos

//Metodo Length - Verifica o tamanho da string

let frase ="O mundo da tecnologia";
console.log(frase.length)

//Metodo indeof - Retorna um trecho do seu código

let texto = "Progamação Sustentável";
console.log(texto.indexOf("ão"))

//Metodo slice - Retorna parte de um texto passando o início e o final
let info="Programação de ponta";
console.log(info.slice(15,20))

//Operadores aritiméticos

const a=10;
const b=20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//Operadores lógicos

const c=20;
const d=30;
console.log(c < d);
console.log(c > d && c < 10);
console.log(c > d || d > c);
console.log(c == d || d <= c);

//Operações de comparação

const e=10;
const f=30;
console.log(e == f);
console.log(e === f);
console.log(e != f);
