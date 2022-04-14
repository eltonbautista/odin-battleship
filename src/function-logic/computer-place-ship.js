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
    // if (
    //   (shipHeadIndex % gridTrackLength) + shipBeingPlaced[i].shipArray.length >
    //     gridTrackLength ||
    //   computerCells[shipHeadIndex].classList.contains('computer--dropped')
    // ) {
    if (shipHeadIndex < 50) {
      if (
        (shipHeadIndex % gridTrackLength) +
          shipBeingPlaced[i].shipArray.length >
        gridTrackLength
      ) {
        shipHeadIndex -= shipBeingPlaced[i].shipArray.length;
        const coordinates = [];
        for (let j = 0; j < shipBeingPlaced[i].shipArray.length; j += 1) {
          coordinates.push(shipHeadIndex);
          computerCells[shipHeadIndex].classList.add('computer--dropped');
          shipHeadIndex += j;
        }
        console.log(coordinates);
        computerGameboard.placeShip(
          computerGameboardArray,
          shipBeingPlaced[i],
          ...coordinates
        );
      } else {
        const coordinates = [];
        for (let j = 0; j < shipBeingPlaced[i].shipArray.length; j += 1) {
          coordinates.push(shipHeadIndex);
          computerCells[shipHeadIndex].classList.add('computer--dropped');
          shipHeadIndex += j;
        }
        console.log(coordinates);
        computerGameboard.placeShip(
          computerGameboardArray,
          shipBeingPlaced[i],
          ...coordinates
        );
      }
    }
    // }

    if (shipHeadIndex > 50) {
      if (
        (shipHeadIndex % 100) + shipBeingPlaced[i].shipArray.length * 10 >
        100
      ) {
        shipHeadIndex -=
          10 * Math.ceil(shipBeingPlaced[i].shipArray.length + 1);
        const coordinates = [];
        for (let j = 0; j < shipBeingPlaced[i].shipArray.length; j += 1) {
          coordinates.push(shipHeadIndex);
          console.log(coordinates);
          computerCells[shipHeadIndex].classList.add('computer--dropped');
          shipHeadIndex += 10;
        }
        console.log(coordinates);
        computerGameboard.placeShip(
          computerGameboardArray,
          shipBeingPlaced[i],
          ...coordinates
        );
      } else {
        const coordinates = [];
        for (let j = 0; j < shipBeingPlaced[i].shipArray.length; j += 1) {
          coordinates.push(shipHeadIndex);
          computerCells[shipHeadIndex].classList.add('computer--dropped');
          shipHeadIndex += 10;
        }
        console.log(coordinates);
        computerGameboard.placeShip(
          computerGameboardArray,
          shipBeingPlaced[i],
          ...coordinates
        );
      }
    }
  }
  console.log(computerGameboardArray);
};
