let obstListe = ['Banane', 'Apfel', 'Erdbeere'];

// for (let i = 0; i < 10; i++) {      //i= Index; start bei 0; ende bei 10; bei jeden Durchlauf +1
//     console.log(i);                 //die End-Bedingung ist wichtig da sonst die Schleife unendlich läuft
// }

// for (let i = 0; i < obstListe.length; i++) {
//     console.log(i);                             //Ausgabe: 0, 1, 2 da nur 3 Elemente in der Liste sind
//     console.log(obstListe);                    //Ausgabe: Banane, Apfel, Erdbeere in eine Zeile
//     console.log(obstListe[i]);                 //Ausgabe: Banane, Apfel, Erdbeere einzeln
// }

// for (let i in obstListe) {
//     console.log(obstListe[i]);                   //Ausgabe: Banane, Apfel, Erdbeere einzeln
// }

// obstListe.forEach(function (value) {
//     console.log(value)                              //Ausgabe: Banane, Apfel, Erdbeere einzeln
// });

let i = 0;
while (i < 10) {
    console.log(i);                     //Ausgabe: 0-9
    i++;
}