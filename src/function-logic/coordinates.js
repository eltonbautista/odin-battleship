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
  const firstHalf = [];
  const secondHalf = [];
  const oneArray = [];
  const fillArray = function fillArray(arr, length, from) {
    for (let i = from; i < length; i += 1) {
      arr.push(i);
    }
  };
  fillArray(firstHalf, 50, 0);
  fillArray(secondHalf, 100, 50);
  fillArray(oneArray, 100, 0);

  const placeComputerShips = function placeComputerShips(
    shipIndex,
    uNum,
    iterator,
    arr,
    half
  ) {
    const coords = [];
    let realNum = uNum;
    for (let i = 0; i < shipBeingPlaced[shipIndex].shipArray.length; i += 1) {
      half.splice(half.indexOf(realNum));
      coords.push(arr.splice(arr.indexOf(realNum), 1));
      console.log(realNum);
      realNum += iterator;
    }
    console.log(coords);
    computerGameboard.placeShip(
      computerGameboardArray,
      shipBeingPlaced[shipIndex],
      ...coords
    );
  };

  for (let j = 0; j < shipBeingPlaced.length; j += 1) {
    // const uniqueNum = oneArray[Math.floor(Math.random() * oneArray.length)]; // Chooses a random number.

    if (shipBeingPlaced[j].shipArray.length > 3) {
      const uniqueNum =
        firstHalf[Math.floor(Math.random() * Math.ceil(firstHalf.length / 2))];
      placeComputerShips(j, uniqueNum, 10, oneArray, firstHalf);
    } else if (shipBeingPlaced[j].shipArray.length <= 3) {
      const uniqueNum =
        secondHalf[Math.floor(Math.random() * Math.ceil(secondHalf.length))];
      if ((uniqueNum % 10) + shipBeingPlaced[j].shipArray.length > 10) {
        const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
        placeComputerShips(j, useThisNum, 1, oneArray, secondHalf);
      } else {
        const useThisNum = uniqueNum;
        placeComputerShips(j, useThisNum, 1, oneArray, secondHalf);
      }
    }
  }
};
