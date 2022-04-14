/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
export const computerPlaceShip = function computerPlaceShip(
  uniqueRandomInt,
  computerGameboard
) {
  const computerGrid = document.querySelector('#computer');
  const computerCells = computerGrid.children;
  //   let shipHeadIndex = uniqueRandomInt();
  let shipHeadIndex = 99;
  const shipBeingPlaced = computerGameboard.myShips;
  const computerGameboardArray = computerGameboard.gameboardArray;
  const gridTrackLength = 10;

  //   for (const cell of computerCells) {
  //   }
  console.log(shipHeadIndex);
  console.log(shipBeingPlaced); // carrier, battleship, destroyer, submarine, patrolBoat
  for (let i = 0; i < shipBeingPlaced.length; i += 1) {
    console.log(shipBeingPlaced[i].shipArray.length);
    if (
      shipHeadIndex + gridTrackLength + shipBeingPlaced[i].length >
        gridTrackLength &&
      !computerCells[i].classList.contains('computer--dropped')
    ) {
      console.log('test');
      return;
    }

    if (
      shipHeadIndex < 50 &&
      shipHeadIndex + gridTrackLength + shipBeingPlaced.length <
        gridTrackLength &&
      !computerCells.contains('computer--dropped')
    ) {
      const coordinates = [];
      for (let j = 0; j < shipBeingPlaced[i].length; j += 1) {
        coordinates.push((shipHeadIndex += 1));
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[i],
        ...coordinates
      );
      shipBeingPlaced[i].classList.add('computer--dropped');
    } else if (
      shipHeadIndex > 50 &&
      shipHeadIndex + gridTrackLength + shipBeingPlaced.length <
        gridTrackLength &&
      !computerCells.contains('computer--dropped')
    ) {
      const coordinates = [];
      for (let j = 0; j < shipBeingPlaced[i].length; j += 1) {
        coordinates.push((shipHeadIndex += 10));
      }
      computerGameboard.placeShip(
        computerGameboardArray,
        shipBeingPlaced[i],
        ...coordinates
      );
      shipBeingPlaced[i].classList.add('computer--dropped');
    }
  }
};
