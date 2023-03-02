var nome;
var idade;
var date;
var text;

nome = "Jubileu";
idade = 8;
date = new Date();

var pessoa = new Object();
pessoa.nome = nome;
pessoa.idade = idade;
pessoa.date = date;


console.log("A pessoa cadastrada e: " + pessoa.nome);
console.log("E tem: " + pessoa.idade + " anos");

function acao() {
    text = document.getElementById('textarea').value;
    document.getElementById('label1').innerText = text;
    console.log("A frase e: " + text);
    switch (text) {
        case 'vai tomar no cu':
            console.log("Vai voce!!!")
            document.getElementById('label1').innerText = "Vai voce seu arrombado!!!";
            document.getElementById('botao').innerText = "Seu cu";
            break;
        default:
            document.getElementById('botao').innerText = "Botao";
            break;
    }
}