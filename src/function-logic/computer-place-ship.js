/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
export const computerPlaceShip = function computerPlaceShip(
  uniqueRandomInt,
  computerGameboard
) {
  const computerGrid = document.querySelector('#computer');
  const computerCells = computerGrid.children;
  //   let shipHeadIndex = 93;
  const shipBeingPlaced = computerGameboard.myShips;
  const computerGameboardArray = computerGameboard.gameboardArray;
  const gridTrackLength = 10;

  //   for (const cell of computerCells) {
  //   }
  console.log(shipBeingPlaced); // carrier, battleship, destroyer, submarine, patrolBoat
  for (let i = 0; i < shipBeingPlaced.length; i += 1) {
    let shipHeadIndex = uniqueRandomInt();
    console.log(shipBeingPlaced[i].shipArray.length);
    if (
      (shipHeadIndex % gridTrackLength) + shipBeingPlaced[i].shipArray.length >
        gridTrackLength ||
      computerCells[shipHeadIndex].classList.contains('computer--dropped')
    ) {
      shipHeadIndex -= shipBeingPlaced[i].shipArray.length;
      console.log(shipHeadIndex);
    }

    if (
      shipHeadIndex < 50 &&
      (shipHeadIndex % gridTrackLength) + shipBeingPlaced.length <
        gridTrackLength &&
      !computerCells[shipHeadIndex].classList.contains('computer--dropped')
    ) {
      const coordinates = [];
      for (let j = 0; j < shipBeingPlaced[i].length; j += 1) {
        coordinates.push(shipHeadIndex + j);
        computerGrid[shipHeadIndex + j].classList.add('computer--dropped');
      }
      console.log(coordinates);
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[i],
        ...coordinates
      );
    } else if (
      shipHeadIndex > 50 &&
      (shipHeadIndex % gridTrackLength) + shipBeingPlaced.length <
        gridTrackLength &&
      !computerCells[shipHeadIndex].classList.contains('computer--dropped')
    ) {
      const coordinates = [];
      for (let j = 0; j < shipBeingPlaced[i].length; j += 1) {
        coordinates.push((shipHeadIndex += 10));
        computerGrid[coordinates].classList.add('computer--dropped');
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[i],
        ...coordinates
      );
    }
  }
  //   console.log(computerGameboardArray);
};
