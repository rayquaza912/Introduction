#Test non abouti
#Script demandant un mot de passe et bloquant l'utilisateur au bout de 3 tentatives.

var passcounter = 0, tempPassword = "superpass123";
do { 
var Password = prompt("Entrez le mot de passe :");
if (passcounter >= 3)
	console.log("Accès refusé.");
	tempPassword = NaN;
else
	passcounter = passcounter + 1;
 
} 
while (Password != tempPassword); console.log("Accès autorisé.");


#2e
var tryPassword = prompt("Entrez votre mot de passe :"), tempPassword = "superpass123", passcounter = Number(0);
do {
	if (passcounter = 3)
		console.log("Session bloquée. Réessayez plus tard.");
		goto banned;
	else
		passcounter = passcounter + 1;

}
while (tryPassword != tempPassword);
console.log("Accès autorisé.");

:banned
tempPassword = NaN;

# Troisieme

var passcounter = Number(0);
do { 
var password = prompt("Entrez le mot de passe :"); 
passcounter = passcounter + 1;
} 
while (password != "superpass123" || passcounter > 3); console.log("Accès autorisé.", passcounter);