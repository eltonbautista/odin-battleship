/* eslint-disable comma-dangle */
// When a ship is placed onto the board it will receive class "flippable"
// Double clicking the ship will cause it to run down the y-axis
// When the user clicks start game button, "flippable" class is removed from all ships.

const flipShip = function flipShip(gameboard, cell) {
  const playerGameboardArray = gameboard.gameboardArray;
  if (cell.classList.contains('player--dropped')) {
    cell.classList.add('flippable');
    if (cell.classList.contains('flippable')) {
    }
  }
};
