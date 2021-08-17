const Player = require('../Classes/player.js');

const newPlayer = new Player(2, 2)
const newPlayerTwo = new Player(6, 4)
const participants = [newPlayer, newPlayerTwo]
let matrix = [];

//* Creates matrix filled with 0's
for (let y = 0; y < 8; y++) {
  matrix[y] = []
  for (let x = 0; x < 8; x++) {
    matrix[y][x] = 0
  }
}


function renderGrid(grid, players) {
  //! What's going on here!!!!!!!!!!
  for (let i = 0; i < players.length; i++) {
    if (grid[players[i].y_position][players[i].x_position] !== null) {
      grid[players[i].y_position][players[i].x_position] = 0
    }

    players[i].logic()
    grid[players[i].y_position][players[i].x_position] = "PL"
  }
  //* Actually renders the grid
  for (let y = 0; y < grid.length; y++) {
    console.log(grid[y].toString());
  }
}

//* Re-Renders grid based on interval time
setInterval(() => {
  console.clear();
  renderGrid(matrix, participants)
}, 500);