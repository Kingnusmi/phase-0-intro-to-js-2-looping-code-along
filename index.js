// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]; 

function writeCards(names) {
    let i = 0;
    while (i < names.length) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++
        debugger
    }
    return names;
}
writeCards(names);

let countDown = 10;
    while (countDown > -1) {
    console.log(countDown--);}
