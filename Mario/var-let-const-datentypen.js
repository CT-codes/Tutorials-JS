//=========================Variablen======================================
// sind wie Boxen die Zahlen, texte usw enthalten
// name vergeben = deklarieren (erstes Wort klein, nächste Groß)
// 'max'= Wert zuweisen
// mit ; beenden = initialisieren
// var vs let :     var kann aus versehen überschrieben werden, was zu Problem führen kann. Das passiert mit let nicht, im Discord wird gesagt nie var nutzen, immer nur const und let
// const : wenn der Wert erst einmal initialisiert wurde dann kann man diesen nicht mehr ändern


var playerName = 'Max';  // 'Max' = Datentyp string
var highscore = 100;     // number
var gameOver = false;    // boolean nur true oder false
var test;                // undefined
var nüscht = null;       // object Wert der Variable ist ungültig

const PI_TEST_NAME = 3.14;  // Mario benennt const auf diese weise

// console.log(typeof nüscht);   mit typeof erscheint in der console die Art von dem Datentyp

// console.log(highscore + 10);   rechnen + - / *

// var newHighscore = highscore + 50;   eine neue Variable mit dem neuen Wert
// console.log(newHighscore);

// var highscore = highscore + 50;  man kann auch die bestehende Variable nutzen, dann wird der Wert überschrieben
// console.log(highscore);

// playerName = playerName + ' Mustermann';    var dazu schreiben ist nicht nötig wenn man keine neue anlegen will
// console.log(playerName);     console: Max Mustermann

// playerName = 'Mein Name ist ' + playerName;
// console.log(playerName);        console: Mein Name ist Max

// playerName = 'Mein Name's ist ' + playerName;        durch das zusätzliche ' ist die Zeichenkette unterbrochen, man könnte dann den String in "" setzen um das zu umgehen, oder...
// playerName = 'Mein Name\'s ist ' + playerName;   ...mit einem Backslash Abhilfe schaffen.

