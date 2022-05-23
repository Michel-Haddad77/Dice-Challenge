let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;

switch(random1) {
    case 1:
      document.getElementById("dice1").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("dice1").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("dice1").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("dice1").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("dice1").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("dice1").src = "images/dice6.png";
      break;
}

switch(random2) {
    case 1:
      document.getElementById("dice2").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("dice2").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("dice2").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("dice2").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("dice2").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("dice2").src = "images/dice6.png";
      break;
}

if(random1 > random2){
    document.getElementById("status").innerHTML = "Play 1 Wins";
}
else if(random1 < random2){
    document.getElementById("status").innerText = " Play 2 Wins";
}
else{
    document.getElementById("status").innerText = "Draw!";
    document.getElementById("emoji").innerText = "";
}