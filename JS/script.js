/*

a. chiedere nome, cognome e colore preferito.
b. stampare 

1. inizializzare/dichiarare le variabili
2. fare inserire i dati
3. stampare tutto

*/

const firstName = prompt ("Inserisci il nome");
const lastName = prompt ("Inserisci il cognome");
const favoriteColor = prompt ("Il suo colore preferito");

console.log(firstName);
console.log(lastName);
console.log(favoriteColor);



document.getElementById('infoRM').innerHTML = 
"FIRST NAME: " + firstName + "<br />" +
"LAST NAME: " + lastName + "<br />" +
"FAVORITE COLOR: " + favoriteColor;



const everY = 
`
Il mio nome è: ${firstName} ${lastName}<br>
Il mio colore preferito è: ${favoriteColor}
`;

document.getElementById('infoRMtest').innerHTML = everY;

console.log(everY);