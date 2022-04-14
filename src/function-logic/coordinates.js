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
  const fillArray = function fillArray(arr, length, from) {
    for (let i = from; i < length; i += 1) {
      arr.push(i);
    }
  };
  fillArray(firstHalf, 50, 0);
  fillArray(secondHalf, 100, 50);

  const placeComputerShips = function placeComputerShips(
    shipIndex,
    uNum,
    iterator,
    arr
  ) {
    const coords = [];
    let realNum = uNum;
    for (let i = 0; i < shipBeingPlaced[shipIndex].shipArray.length; i += 1) {
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
      placeComputerShips(j, uniqueNum, 10, firstHalf);
    } else if (shipBeingPlaced[j].shipArray.length <= 3) {
      const uniqueNum =
        secondHalf[
          Math.floor(Math.random() * Math.ceil(secondHalf.length / 2))
        ];
      if ((uniqueNum % 10) + shipBeingPlaced[j].shipArray.length > 10) {
        const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
        placeComputerShips(j, useThisNum, 1, secondHalf);
      } else {
        const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
        placeComputerShips(j, useThisNum, 1, secondHalf);
      }
    }

    //     if (uniqueNum < 50 && shipBeingPlaced[j].shipArray.length > 3) {
    //       // if uniqueNum < 50 (to make sure not to get out of bounds) & ship is either carrier or battleship
    //       placeComputerShips(j, uniqueNum, 10);
    //     } else if (uniqueNum > 59 && shipBeingPlaced[j].shipArray.length > 3) {
    //       const useThisNum =
    //         uniqueNum - 10 * Math.ceil(shipBeingPlaced[j].shipArray.length + 1);
    //       placeComputerShips(j, useThisNum, 10);
    //     } else if (uniqueNum > 89 && shipBeingPlaced[j].shipArray.length > 3) {
    //       const useThisNum =
    //         uniqueNum - 10 * Math.ceil(shipBeingPlaced[j].shipArray.length + 1);
    //       placeComputerShips(j, useThisNum, 10);
    //     } else if (
    //       uniqueNum > 50 &&
    //       (uniqueNum % 10) + shipBeingPlaced[j].shipArray.length > 10 &&
    //       shipBeingPlaced[j].shipArray.length <= 3
    //     ) {
    //       const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
    //       placeComputerShips(j, useThisNum, 1);
    //     } else {
    //       const useThisNum = uniqueNum - shipBeingPlaced[j].shipArray.length;
    //       console.log(useThisNum);
    //       placeComputerShips(j, useThisNum, 1);
    //     }
    //     console.log(oneArray.length);
  }
};
