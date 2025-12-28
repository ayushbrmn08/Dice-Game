function winGame() {
    //Generate two random numbers between 1 to 6
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    //change h1 or header based on random number
    if (num1 > num2) {
        document.querySelector(".topheader").innerHTML = "<img class=flag src='images/truce.png'> Player 1 Wins!";
    }
    else if (num2 > num1) {
        document.querySelector(".topheader").innerHTML = "Player 2 Wins! <img class=flag src='images/truce.png'>";

    }
    else {
        document.querySelector(".topheader").innerHTML = "<img class=flag src='images/truce.png'> Its a Draw! <img class=flag src='images/truce.png'>";

    }
    //change the dice image based on random number generated
    document.querySelector(".block1 .diceimg").setAttribute("src","images/dice"+(""+num1)+".png");
    document.querySelector(".block2 .diceimg").setAttribute("src","images/dice"+(""+num2)+".png");
}
// Check if user has visited before in this session
if (sessionStorage.getItem("visited")) {
    // Not first visit - run the game
    winGame();
} else {
    // First visit - mark as visited, keep "Refresh Me" showing
    sessionStorage.setItem("visited", "true");
}