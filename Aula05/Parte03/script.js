var nome = window.prompt("Digite seu nome: ")
var idade = Number(window.prompt("Digite sua Idade: "))
document.write(`Seu nome é <b>${nome}</b> e tem <b>${idade}</b>.<br>`);
document.write(`Seu nome tem <b>${nome.length} caracteres</b>.<br>`);
document.write(`Seu nome em letra maiscula é <b>${nome.toUpperCase()} caracteres</b>.<br>`);
document.write(`Sua idade em dias são <b>${idade * 365}</b>.`)