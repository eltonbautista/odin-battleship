/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */

export const coordinatesGenerator = function coordinatesGenerator(
  computerGameboard
) {
  const shipBeingPlaced = computerGameboard.myShips;
  const computerGameboardArray = computerGameboard.gameboardArray;
  const oneArray = [];
  const fillArray = function fillArray() {
    for (let i = 0; i < 100; i += 1) {
      oneArray.push(i);
    }
  };
  fillArray();

  const placeComputerShips = function (shipIndex, uNum, iterator) {
    const coords = [];
    for (let i = 0; i < shipBeingPlaced[j].shipArray.length; i += 1) {
      coords.push(oneArray.splice(oneArray.indexOf(uniqueNum), 1));
      uniqueNum += 10;
    }
    computerGameboard.placeShip(
      computerGameboardArray,
      shipBeingPlaced[j],
      ...coords
    );
  };

  for (let j = 0; j < shipBeingPlaced.length; j += 1) {
    let uniqueNum = oneArray[Math.floor(Math.random() * oneArray.length)]; // Chooses a random number.

    if (uniqueNum < 50 && shipBeingPlaced[j].shipArray.length > 3) {
      // if uniqueNum < 50 (to make sure not to get out of bounds) & ship is either carrier or battleship
      const coords = [];
      for (let i = 0; i < shipBeingPlaced[j].shipArray.length; i += 1) {
        coords.push(oneArray.splice(oneArray.indexOf(uniqueNum), 1));
        uniqueNum += 10;
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[j],
        ...coords
      );
    } else if (
      uniqueNum > 50 &&
      (uniqueNum % 100) + shipBeingPlaced[j].shipArray.length * 10 > 100 &&
      shipBeingPlaced[j].shipArray.length > 3
    ) {
      uniqueNum -= 10 * Math.ceil(shipBeingPlaced[j].shipArray.length / 2);
      const coords = [];
      for (let i = 0; i < shipBeingPlaced[j].shipArray.length; i += 1) {
        coords.push(oneArray.splice(oneArray.indexOf(uniqueNum), 1));
        uniqueNum += 10;
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[j],
        ...coords
      );
    } else if (
      uniqueNum > 50 &&
      (uniqueNum % 10) + shipBeingPlaced[j].shipArray.length > 10 &&
      shipBeingPlaced[j].shipArray.length > 3
    ) {
      const coords = [];
      for (let i = 0; i < shipBeingPlaced[j].shipArray.length; i += 1) {
        coords.push(oneArray.splice(oneArray.indexOf(uniqueNum), 1));
        uniqueNum += 1;
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[j],
        ...coords
      );
    } else {
      uniqueNum -= shipBeingPlaced[j].shipArray.length;
      const coords = [];
      for (let i = 0; i < shipBeingPlaced[j].shipArray.length; i += 1) {
        coords.push(oneArray.splice(oneArray.indexOf(uniqueNum), 1));
        uniqueNum += 1;
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[j],
        ...coords
      );
    }
  }
  console.log(computerGameboard.gameboardArray);
};
