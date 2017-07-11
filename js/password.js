#Script demandant un mot de passe.
#Bloque l utilisateur au bout de 3 tentatives.

var passcounter = Number(0);
do { 
	var password = prompt("Entrez le mot de passe :"); 
	passcounter += 1;
} 
while (password != "superpass123");
if (passcounter > 3)
	console.log("Accès bloqué, veuillez réessayer plus tard");
else
	console.log("Accès autorisé.");
