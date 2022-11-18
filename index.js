// ------------------------------------------------------------
// Players inputs and names
const player_X = document.getElementById("player-X");
const player_O = document.getElementById("player-O");
const player_X_name = document.getElementById("player-X-name");
const player_O_name = document.getElementById("player-O-name");

// ------------------------------------------------------------
// Squares of the game board
const squares = document.querySelectorAll(".game-grid-square");

// ------------------------------------------------------------
// Player of the turn
let player_of_the_turn = 0;
let symbol = 0;

// Initializes first player as the X player
player_of_the_turn = player_X;
symbol = "X";
player_X_name.classList.add("green-style");

// ------------------------------------------------------------
// Start button verifies if names are not empty and then starts game
const start_button = document.getElementById("start-button");
start_button.addEventListener("click", function () {
  if (player_X.value === "" || player_O.value === "") {
    alert("Nome inválido!");
  } else {
    startGame();
  }
});

// ------------------------------------------------------------
// Restart button with Event Listener
const restart_button = document.getElementById("restart-button");
restart_button.addEventListener("click", restartGame);

// ------------------------------------------------------------
// New Game button with Event Listener
const new_game_button = document.getElementById("new-game-button");
new_game_button.addEventListener("click", function () {
  // Hides players names
  document
    .getElementById("players-names-section")
    .style.setProperty("display", "none");

  // Shows the input form for the names
  document
    .getElementById("input-players-names")
    .style.setProperty("display", "flex");

  // Resets input names form
  player_X.value = "";
  player_O.value = "";

  resetBoard();
  disableBoard();
});

// ------------------------------------------------------------
// Start Game function
function startGame() {
  // Hides the input form for the names
  document
    .getElementById("input-players-names")
    .style.setProperty("display", "none");

  // Shows players names
  player_X_name.innerText = player_X.value;
  player_O_name.innerText = player_O.value;
  document
    .getElementById("players-names-section")
    .style.setProperty("display", "flex");

  // Alert indicating first player
  alert("Primeiro a jogar: " + player_X.value);

  // ------------------------------------------------------------
  // Event Listerner for clicks on the squares to fill them
  // with X or O and disable them afterwards during the game
  // so user won't be able to select them again
  // Every click it verifies if there's a winner already
  squares.forEach(function (square) {
    square.addEventListener("click", function () {
      square.innerHTML = "<p>" + symbol + "</p>"; // Insert a <p> to apply style when there's a winner
      square.disabled = true;

      if (verifyWinner()) {
        return; // Returns here if there's a winner to stop players from being switched and the winner stays highlighted
      }

      // Switches players after each click
      player_of_the_turn = switchPlayers(player_of_the_turn);
    });
  });
}

// ------------------------------------------------------------
// Verify Winner function starts verifying if square is not empty
// and then if they match the others according to the rules of the game
function verifyWinner() {
  const winner = player_of_the_turn;

  if (
    squares[0].innerText !== "" &&
    squares[1].innerText !== "" &&
    squares[2].innerText !== ""
  ) {
    if (
      squares[0].innerText === squares[1].innerText &&
      squares[0].innerText === squares[2].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      // Highlights the winning combination
      squares[0].children[0].classList.add("green-style");
      squares[1].children[0].classList.add("green-style");
      squares[2].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[3].innerText !== "" &&
    squares[4].innerText !== "" &&
    squares[5].innerText !== ""
  ) {
    if (
      squares[3].innerText === squares[4].innerText &&
      squares[3].innerText === squares[5].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[3].children[0].classList.add("green-style");
      squares[4].children[0].classList.add("green-style");
      squares[5].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[6].innerText !== "" &&
    squares[7].innerText !== "" &&
    squares[8].innerText !== ""
  ) {
    if (
      squares[6].innerText === squares[7].innerText &&
      squares[6].innerText === squares[8].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[6].children[0].classList.add("green-style");
      squares[7].children[0].classList.add("green-style");
      squares[8].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[0].innerText !== "" &&
    squares[3].innerText !== "" &&
    squares[6].innerText !== ""
  ) {
    if (
      squares[0].innerText === squares[3].innerText &&
      squares[0].innerText === squares[6].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[0].children[0].classList.add("green-style");
      squares[3].children[0].classList.add("green-style");
      squares[6].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[1].innerText !== "" &&
    squares[4].innerText !== "" &&
    squares[7].innerText !== ""
  ) {
    if (
      squares[1].innerText === squares[4].innerText &&
      squares[1].innerText === squares[7].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[1].children[0].classList.add("green-style");
      squares[4].children[0].classList.add("green-style");
      squares[7].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[2].innerText !== "" &&
    squares[5].innerText !== "" &&
    squares[8].innerText !== ""
  ) {
    if (
      squares[2].innerText === squares[5].innerText &&
      squares[2].innerText === squares[8].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[2].children[0].classList.add("green-style");
      squares[5].children[0].classList.add("green-style");
      squares[8].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[0].innerText !== "" &&
    squares[4].innerText !== "" &&
    squares[8].innerText !== ""
  ) {
    if (
      squares[0].innerText === squares[4].innerText &&
      squares[0].innerText === squares[8].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[0].children[0].classList.add("green-style");
      squares[4].children[0].classList.add("green-style");
      squares[8].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  if (
    squares[2].innerText !== "" &&
    squares[4].innerText !== "" &&
    squares[6].innerText !== ""
  ) {
    if (
      squares[2].innerText === squares[4].innerText &&
      squares[2].innerText === squares[6].innerText
    ) {
      alert("===============\nVencedor: " + winner.value + "\n===============");

      squares[2].children[0].classList.add("green-style");
      squares[4].children[0].classList.add("green-style");
      squares[6].children[0].classList.add("green-style");

      disableBoard();
      return true;
    }
  }

  // In case of a tie
  if (
    squares[0].innerText !== "" &&
    squares[1].innerText !== "" &&
    squares[2].innerText !== "" &&
    squares[3].innerText !== "" &&
    squares[4].innerText !== "" &&
    squares[5].innerText !== "" &&
    squares[6].innerText !== "" &&
    squares[7].innerText !== "" &&
    squares[8].innerText !== ""
  ) {
    alert("===============\nEMPATE!!!\n===============");
    player_X_name.classList.remove("green-style");
    player_O_name.classList.remove("green-style");
    return true;
  }
}

// Model with the indexes of the array from the board
// 0 1 2
// 3 4 5
// 6 7 8

// ------------------------------------------------------------
// Switch Players function
function switchPlayers(player_of_the_turn) {
  if (player_of_the_turn === player_X) {
    symbol = "O";
    player_X_name.classList.remove("green-style");
    player_O_name.classList.add("green-style");
    return player_O;
  } else {
    symbol = "X";
    player_X_name.classList.add("green-style");
    player_O_name.classList.remove("green-style");
    return player_X;
  }
}

// ------------------------------------------------------------
// Enables squares of the board
function enableBoard() {
  squares.forEach(function (square) {
    square.disabled = false;
  });
}

// ------------------------------------------------------------
// Disables squares of the board
function disableBoard() {
  squares.forEach(function (square) {
    square.disabled = true;
  });
}

// ------------------------------------------------------------
// Restarts the game
function restartGame() {
  resetBoard();

  // Initializes player as the X player
  player_of_the_turn = player_X;
  symbol = "X";
  player_X_name.classList.add("green-style");
  player_O_name.classList.remove("green-style");

  enableBoard();
}

// ------------------------------------------------------------
// Cleans the board
function resetBoard() {
  // Erases the symbols from the board
  squares.forEach(function (square) {
    square.innerText = "";
  });

  // Removes green-style class from the board
  squares.forEach(function (square) {
    square.classList.remove("green-style");
  });
}
