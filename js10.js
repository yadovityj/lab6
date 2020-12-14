function play()
{
var header = document.querySelector("h1");

let player1 = Math.random();
player1 = Math.floor((player1*6)+1);
let player2 = Math.random();
player2 = Math.floor((player2*6)+1);

console.log(player1)
  if (player1 > player2)
  {
    header.textContent = "Player 1 wins";
  }

  else if (player1 < player2)
  {
    header.textContent = "Player 2 wins";
  }
  else
  {
    header.textContent = "Draw. Friendship wins!";
  }
  if (player1 == 1)
  {
    document.querySelectorAll(".cube")[0].style.backgroundImage="url('1.png')";
  }
  else if (player1 == 2)
  {
  document.querySelectorAll(".cube")[0].style.backgroundImage="url('2.png')";
  }
  else if (player1 == 3)
  {
    document.querySelectorAll(".cube")[0].style.backgroundImage="url('3.png')";
  }
  else if (player1 == 4)
  {
    document.querySelectorAll(".cube")[0].style.backgroundImage="url('4.png')";
  }
  else if (player1 == 5)
  {
    document.querySelectorAll(".cube")[0].style.backgroundImage="url('5.png')";
  }
  else
  {
    document.querySelectorAll(".cube")[0].style.backgroundImage="url('6.png')";
  }

  if (player2 ==1)
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('1.png')";
  }
  else if (player2 ==2)
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('2.png')";
  }
  else if (player2 == 3)
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('3.png')";
  }
  else if (player2 == 4)
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('4.png')";
  }
  else if (player2 == 5)
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('5.png')";
  }
  else
  {
    document.querySelectorAll(".cube")[1].style.backgroundImage="url('6.png')";
  }
}
play();
