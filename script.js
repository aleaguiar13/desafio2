//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 30;
if (idade >= 18){
    console.log("é maior de idade")
}
else {
    console.log("é menor de idade")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let idade2 = 30;
let humano = true;
if (idade2 >= 18 && humano == true){
    console.log("verdadeiro")
}
else {
    console.log("falso")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "Fevereiro";
if (mes == "janeiro" || mes === "dezembro" ){
    console.log("correto");
}
else {
    console.log("errado");
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let letra = "Alessandra";
if (letra[0] === "R" || letra[0] =="r"){
    console.log("corresponde ao R");
}
else{
    console.log("Não corresponde");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let nome = "Alessandra"
let sobrenome = "aguiar"
if (sobrenome.length >=6 || (nome.substring(0,1) === "E" || nome.substring(0,1) === "e" )){
    console.log("Seu sobrenome tem 6 letras ou começa com o E")
}//montei uma condição, o colchetes é pra enfatizar a primeira letra
else{
    console.log("não atende o requisito")
}
