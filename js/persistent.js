# Script obligeant l'utilisateur à entrer son nom
do { 
var yourName = prompt("Qui est tu ?"); 
} 
while (!yourName); console.log("Bonjour " + yourName + " !");


# Peut aussi fonctionner pour un mot de passe
do { 
var password = prompt("Entrez le mot de passe :"); 
} 
while (password != "superpass123"); console.log("Accès autorisé.");





