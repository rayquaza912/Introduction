#Script pour compter jusqu'à un nombre définit par l'utilisateur
var number = 0, max = Number(prompt("Compter jusqu'à combien ?"));
while (number < max) {
console.log(number); number = number + 1;
}