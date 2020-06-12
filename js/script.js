// SEZIONE RICHIESTE

var name = prompt('Inserisci il tuo nome');
var surname = prompt('Inserisci il tuo cognome');
var color = prompt('Inserisci il tuo colore preferito');

document.getElementById('myname').innerHTML = name;

document.getElementById('mysurname').innerHTML = surname;

document.getElementById('mycolor').innerHTML = color;

document.getElementById('password').innerHTML = name + surname + color + 19;
