const userName = prompt('Scrivi il tuo nome');
const userSurname = prompt('Scrivi il tuo cognome');
const userColour = prompt('Scrivi il tuo colore preferito');

let sum = userName + userSurname + userColour + '23';

document.getElementById('message').innerHTML = sum;