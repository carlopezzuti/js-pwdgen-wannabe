const userName = prompt('Scrivi il tuo nome');
const userSurname = prompt('Scrivi il tuo cognome');
const userColour = prompt('Scrivi il tuo colore preferito');
const fixedNumber = 23
const userRandomNumber = prompt('Scrivi un numero tra 1 e 10')
const userNumber = parseInt(userRandomNumber);

let sum = userNumber + fixedNumber;

let userPassword = userName + userSurname + userColour + sum;

document.getElementById('message').innerHTML = userPassword;