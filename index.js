const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");

// count variable
let count = 0;

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

while (player2.replace(/\s/g, "").length == 0) {
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

// change the its your turn text
const turnText = document.getElementById("turn-text");
gameContinues = false;

function changeTurn(event) {
    const target = document.getElementById(event.target.id);

    if (!target.textContent) {
        if (count % 2 == 0) {
            turnText.innerHTML = `${player2}'s turn`;
            target.innerHTML = "<span>X</span>";

        } else {
            turnText.innerHTML = `${player1}'s turn`;
            target.innerHTML = "<span>O</span>";
        }

        target.classList.add("xod");
        count++;
        gameOver(event);
    }

}

// increase the count on click the divs of xox
const tto = document.getElementsByClassName("grid");
console.dir(tto);
// make an arrow event listener
if (count % 2 == 0) {
    turnText.innerHTML = `${player1}'s turn`;
}
tto[0].addEventListener("click", changeTurn);



// function to check whether the game is over or not
function gameOver(event) {
    const div1 = document.getElementById("1").textContent;
    const div2 = document.getElementById("2").textContent;
    const div3 = document.getElementById("3").textContent;
    const div4 = document.getElementById("4").textContent;
    const div5 = document.getElementById("5").textContent;
    const div6 = document.getElementById("6").textContent;
    const div7 = document.getElementById("7").textContent;
    const div8 = document.getElementById("8").textContent;
    const div9 = document.getElementById("9").textContent;

    const winnerName = document.getElementsByClassName("winner");


    if (div1 != "" && div1 == div2 && div2 == div3) {
        // change the wiiner name to the player's name
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player1} won`;
        } else {
            winnerName[0].innerHTML = `${player2} won`;
        }
    } else if (div1 != "" && div1 == div4 && div4 == div7) {
        tto[0].removeEventListener("click", changeTurn);

        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    } else if (div1 != "" && div1 == div5 && div5 == div9) {
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    } else if (div2 != "" && div2 == div5 && div5 == div8) {
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    } else if (div3 != "" && div3 == div6 && div6 == div9) {
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    } else if (div4 != "" && div4 == div5 && div5 == div6) {
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    } else if (div7 != "" && div7 == div8 && div8 == div9) {
        tto[0].removeEventListener("click", changeTurn);
        if (div1 == 'X') {
            winnerName[0].innerHTML = `${player2} won`;
        } else {
            winnerName[0].innerHTML = `${player1} won`;
        }
    }


}


// if game is over disable the click event listener on the parent

// change the you won name part to the player's name


// fix the start new game button so that it displays the game
// add a clear the board function