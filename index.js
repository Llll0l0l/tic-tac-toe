const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");

// edit the names of the players
const editName1 = document.getElementsByClassName("edit1");
const editName2 = document.getElementsByClassName("edit2");


let player1 = "",
    player2 = "";


// get the names and write them to the names section
while (player1.trim().length == 0) {
    player1 = prompt("Enter the name of Player 1: ");
    player1Name.innerHTML = player1;
}


while (player2.replace(/\s/g, '').length == 0) {
    player2 = prompt("Enter the name of Player 2: ");
    player2Name.innerHTML = player2;
}


// edit the names on click of the edit word

editName1[0].addEventListener("click", editName1Func);
editName2[0].addEventListener("click", editName2Func);



function editName1Func(event) {
    player1 = prompt("Enter the new name of Player 1: ");
    player1Name.innerHTML = player1;
}


function editName2Func(event) {
    player2 = prompt("Enter the new name of Player 2: ");
    player2Name.innerHTML = player2;
}