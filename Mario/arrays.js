// arrays sind ähnlich wie Objekte eine Sammlung von Werten und werden gerne für Listen verwendet
// bei arrays nur let verwenden
// arrays sind spezielle Listen ähnliche  Objekte mit zusätzlichen Funktionen um das array zu manipulieren zb Elemente hinzufügen oder wegnehmen

let obstListe = ['Banane', 'Apfel', 'Erdbeere'];        //mit den [] Klammern werden Arrays gemacht
// es wird automatisch eine Liste erstellt mit den Key / Value Pair
// 0: "Banane"
// 1: "Apfel"
// 2: "Erdbeere"

// console.log(obstListe);                     //Ausgabe ["Banane","Apfel","Erdbeere"]

// console.log(obstListe[1]);                  //Ausgabe "Apfel"

// console.log(obstListe.length);              //Ausgabe 3 (die Länge der Liste / wie viele Werte)

obstListe.push('Heidelbeere');                 //neue Werte am Ende der Liste hinzufügen
obstListe.pop();                               //pop entfernt das letzte Element

obstListe.unshift('Kiwi');                     //hinzufügen am Anfang des arrays
obstListe.shift();                             //entfernt das erste Element

// obstListe.splice(1, 1);                     //so entfernt man in Mitte der Liste
//Pos 1(Apfel) wird entfernt
//erste Nummer start Pos und zweite Nummer wie viel Pos gelöscht werden
obstListe.splice(2, 0, 'Ananas');              //["Banane","Apfel","Ananas","Erdbeere"]
                                               //an Pos 2 wird das Ananas eingefügt und Erdbeere rutscht auf Pos 3
                                               //wenn man die zweite Nummer auf 1 macht das würde die Ananas die Erdbeere ersetzen
// console.log(obstListe); 