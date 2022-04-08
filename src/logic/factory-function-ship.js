/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
export const shipFactoryFunction = function shipFactoryFunction(length) {
  // length of ship is determined by an array.
  // The array will input x amount of 1s into the array depending on its desired length. e.g. patrol boat = [1, 1];
  // shipArray being a public property is necessary because it will be used for the Gameboard. (determining position, etc.)
  const shipArray = [];

  // A helper function used to fill shipArray with 1s -> creates proper length, and has boolean used for 'hit' status.

  // shipSunk() is a public method which tests for the shipArray's state. Once shipArray's indices have all been replaced with 0.
  // shipSunk() will declare that the ship has sunk.
  // This means that shipSunk() will need to be called every time hitShip() is called, that way it will be invoked properly.
  const shipSunk = function shipSunk(ship) {
    const stateOfShip = ship.reduce((prev, curr) => prev + curr);
    return stateOfShip;
  };
  // This function is used to add a 0 to the front of the array.
  // eslint-disable-next-line consistent-return
  const unshiftZero = function unshiftZero(arr) {
    if (arr[arr.length - 1] !== 0) {
      return arr.unshift(0);
    }
  };
  // This function is used to remove a != 0 value from the end of the array.
  // eslint-disable-next-line consistent-return
  const popNonZero = function popNonZero(arr) {
    if (arr[arr.length - 1] !== 0) {
      return arr.pop();
    }
  };
  // a public method which mutates shipArray. I think mutation is necessary here since the ship needs to change state.
  // Revised hitShip() what it does is calls two helper functions to add a 0 and remove a != 0 value from the shipArray.
  // It also calls shipSunk(), so that once shipArray (our ship) is filled with all 0s (after all indice are hit), shipSunk() is triggered.
  const hitShip = function hitShip() {
    unshiftZero(shipArray);
    popNonZero(shipArray);
    if (shipSunk(shipArray) === 0) {
      console.log('Oh no! The ship has sunk!!');
      return 'the ship has sunk';
    }

    return shipArray;
  };

  const fillArray = function fillArray() {
    for (let i = 0; i < length; i += 1) {
      shipArray.push(hitShip);
    }
  };
  fillArray();

  return {
    shipArray,
    hitShip,
  };
};
