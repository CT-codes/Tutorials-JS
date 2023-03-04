// let highscore = 160;
// if (highscore > 100) {       in den klammern ist die Bedingung
//     console.log('Du bist gut!');
// }

// == der Wert wird verglichen
// === der Wert und der Datentyp wird verglichen
// && eine UND Bedingung
// || eine ODER Bedingung

// let highscore = 160;
// if (highscore > 100 && highscore < 200) {       // man kann auch 2 Bedingungen angeben
//     console.log('Du bist gut!');
// }


// let highscore = 80;
// if (highscore > 100) {       //if (wenn) diese Bedingung nicht erfüllt wird dann...
//     console.log('Du bist gut!');
// }
// else {                          // else (ansonsten) ...wird der Text ausgegeben
//     console.log('Das geht noch besser!');
// }


let highscore = 30;
if (highscore > 100) {
    console.log('Du bist gut!');
}
else if (highscore > 70) {
    console.log('Das geht noch besser!');
}
else if (highscore > 40) {
    console.log('streng dich mehr an!');
}
else {
    console.log('Oh Je!');      // so kann man eine if/else Verzweigung machen
}