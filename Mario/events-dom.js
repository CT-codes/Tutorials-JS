let clickButton = document.querySelector('#click-button');  //Verbindung zum Button
clickButton.addEventListener('click', eingabe);	            //was passiert bei click auf Button

function eingabe() {
    let input = document.querySelector('#input');           //Verbindung zum Input
    let output = document.querySelector('#output');         //Verbindung zum div

    let newDiv = document.createElement('div');             //ein neues div wird erzeugt
    let newContent = document.createTextNode(input.value);  //Text aus input wird genommen

    newDiv.appendChild(newContent);                         //neuer div erhält den input
    output.appendChild(newDiv);                             //der neue div mit dem Inhalt wird Ausgegeben

    input.value = "";                                       //Text aus input wird gelöscht
}