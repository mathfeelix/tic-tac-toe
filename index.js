// ------------------------------------------------------------
// Players inputs and names
const player_X = document.getElementById("player-X");
const player_O = document.getElementById("player-O");
const player_X_name = document.getElementById("player-X-name");
const player_O_name = document.getElementById("player-O-name");

// ------------------------------------------------------------
// Sections with inputs, names and winner
const input_players_names = document.getElementById("input-players-names");
const players_names_section = document.getElementById("players-names-section");
const winner_section = document.getElementById("winner-section");

// ------------------------------------------------------------
// Squares of the game board
const squares = document.querySelectorAll(".game-grid-square");

// ------------------------------------------------------------
// Player of the turn
let player_of_the_turn = 0;
let symbol = 0;

// ------------------------------------------------------------
// Start button verifies if names are not empty and then starts game
document.getElementById("start-button").addEventListener("click", function () {
  if (player_X.value === "" || player_O.value === "") {
    alert("Nome inválido!");
  } else {
    startGame();
  }
});

// ------------------------------------------------------------
// Start Game function
function startGame() {
  // Hides the input form for the names
  input_players_names.style.setProperty("display", "none");

  // Shows players names
  player_X_name.innerText = player_X.value;
  player_O_name.innerText = player_O.value;
  players_names_section.style.setProperty("display", "flex");

  enableBoard();
  initializePlayerX();

  // Alert indicating first player
  alert("Primeiro a jogar: " + player_X.value);
}

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
      return; // Returns here for in case of a tie there isn't a switch of players
    }

    // Switches players after each click
    player_of_the_turn = switchPlayers(player_of_the_turn);
  });
});

// ------------------------------------------------------------
// Restart button with Event Listener
document.querySelectorAll("#restart-button").forEach(function (button) {
  button.addEventListener("click", function () {
    // Hides winner section
    winner_section.style.setProperty("display", "none");

    // Shows players names
    player_X_name.innerText = player_X.value;
    player_O_name.innerText = player_O.value;
    players_names_section.style.setProperty("display", "flex");

    resetBoard();
    enableBoard();
    initializePlayerX();
  });
});

// ------------------------------------------------------------
// New Game button with Event Listener
document.querySelectorAll("#new-game-button").forEach(function (button) {
  button.addEventListener("click", function () {
    // Hides players names and winner section
    players_names_section.style.setProperty("display", "none");
    winner_section.style.setProperty("display", "none");

    // Shows the input form for the names
    input_players_names.style.setProperty("display", "flex");

    // Resets input names form
    player_X.value = "";
    player_O.value = "";

    resetBoard();
    disableBoard();
  });
});

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
      showWinner(winner, squares[0], squares[1], squares[2]);
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
      showWinner(winner, squares[3], squares[4], squares[5]);
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
      showWinner(winner, squares[6], squares[7], squares[8]);
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
      showWinner(winner, squares[0], squares[3], squares[6]);
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
      showWinner(winner, squares[1], squares[4], squares[7]);
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
      showWinner(winner, squares[2], squares[5], squares[8]);
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
      showWinner(winner, squares[0], squares[4], squares[8]);
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
      showWinner(winner, squares[2], squares[4], squares[6]);
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

function showWinner(winner, square_1, square_2, square_3) {
  // Hides players names
  players_names_section.style.setProperty("display", "none");

  // Shows winner section
  winner_section.style.setProperty("display", "flex");

  // Includes name of the winner to the HTML and highlights it
  document.getElementById("winner-name").innerText = winner.value;
  document.getElementById("winner-name").classList.add("green-style");

  // Highlights the winning combination
  square_1.children[0].classList.add("green-style");
  square_2.children[0].classList.add("green-style");
  square_3.children[0].classList.add("green-style");

  disableBoard();
}

// Model with the indexes of the array from the board
// 0 1 2
// 3 4 5
// 6 7 8

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
// Initializes player as the X player
function initializePlayerX() {
  player_of_the_turn = player_X;
  symbol = "X";
  player_X_name.classList.add("green-style");
  player_O_name.classList.remove("green-style");
}

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
