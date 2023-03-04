// ein Objekt hat Eigenschaften und Funktionen
// ein Objekt mit const kann man nur noch die Werte ändern aber nicht die Eigenschaften ändern

let Max = {                             //mit den {} Klammern erstellt man ein Objekt
    groeße: 180,                        //Eigenschaft = Key / Value Pair
    alter: 25,
    augen: {                            //das ist ein Objekt im Objekt
        farbe: 'blau',
        offen: false,
    },
    geburtstag: function () {
        this.alter += 1;                 // innerhalb einen Objektes kann man mit this das selbe Objekt ansprechen
    },
    augenOeffnen: function () {
        this.augen.offen = true;
    },
};

// console.log(Max);                    {"groeße":180,"alter":25,"augen":{"farbe":"blau","offen":false}}    Wenn man Max ausgibt dann erscheint alle Eigenschaften

// console.log(Max.groeße);                // die Werte von Eigenschaften ausgeben mit einem . Punkt

// Max.geburtstag();                           //Funktion wird ausgeführt und +1 gerechnet
// console.log(Max.alter);                     //Ausgabe ist demzufolge 26

// console.log(Max.augen.offen);               //Ausgabe false wie es definiert wurde

// Max.augenOeffnen();                           //Funktion wird ausgeführt und die Augen öffnen sich
// console.log(Max.augen.offen);                 //Ausgabe true