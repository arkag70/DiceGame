document.querySelector("button").onclick = function(){
    var player1 = Math.floor(Math.random() * 6) + 1;
    var player2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("player1")[0].src = "data/dice" + player1 + ".png";
    document.getElementsByClassName("player2")[0].src = "data/dice" + player2 + ".png";

    if(player1 > player2){
        document.querySelector("h1").innerText = "Player 1 wins";
        document.getElementsByClassName("flag1")[0].classList.add("visible");
        document.getElementsByClassName("flag2")[0].classList.remove("visible");

    }
    else if(player1 < player2){
        document.querySelector("h1").innerText = "Player 2 wins";
        document.getElementsByClassName("flag1")[0].classList.remove("visible");
        document.getElementsByClassName("flag2")[0].classList.add("visible");
    }
    else{
        document.querySelector("h1").innerText = "It's a tie";
        document.getElementsByClassName("flag1")[0].classList.remove("visible");
        document.getElementsByClassName("flag2")[0].classList.remove("visible");
    }
}