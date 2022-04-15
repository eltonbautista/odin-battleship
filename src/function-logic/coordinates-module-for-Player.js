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
  const fillArray = function fillArray(arr, length, startingInt) {
    for (let i = startingInt; i < length; i += 1) {
      arr.push(i);
    }
  };
  fillArray(oneArray, 100, 0);
  const upperHalfOfOneArray = oneArray.filter((x) => x > 50);

  const placeComputerShips = function placeComputerShips(
    shipIndex,
    uNum,
    iterator,
    arr
  ) {
    const coords = [];
    let realNum = uNum;
    for (let i = 0; i < shipBeingPlaced[shipIndex].shipArray.length; i += 1) {
      upperHalfOfOneArray.splice(realNum, 1);
      coords.push(arr.splice(arr.indexOf(realNum), 1));
      realNum += iterator;
    }
    computerGameboard.placeShip(
      computerGameboardArray,
      shipBeingPlaced[shipIndex],
      ...coords
    );
  };
  // prettier-ignore
  for (let j = 0; j < shipBeingPlaced.length; j += 1) {
    if (shipBeingPlaced[j].shipArray.length > 3) {
      const uniqueNum = oneArray[Math.floor(Math.random() * Math.ceil(oneArray.length / 10))];
      placeComputerShips(j, uniqueNum, 10, oneArray);
    } else if (shipBeingPlaced[j].shipArray.length <= 3) {
      const uniqueNum = upperHalfOfOneArray[
        Math.floor(Math.random() * Math.ceil(upperHalfOfOneArray.length))
      ];
      if ((uniqueNum % 10) + shipBeingPlaced[j].shipArray.length > 10) {
        const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
        placeComputerShips(j, useThisNum, 1, oneArray);
      } else {
        const useThisNum = uniqueNum;
        placeComputerShips(j, useThisNum, 1, oneArray);
      }
    }
  }
};
