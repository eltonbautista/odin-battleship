/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
export const shipFactoryFunction = function shipFactoryFunction(length) {
  // length of ship is determined by an array.
  // The array will input x amount of 1s into the array depending on its desired length. e.g. patrol boat = [1, 1];
  // shipArray being a public property is necessary because it will be used for the Gameboard. (determining position, etc.)
  const shipArray = [];

  // A helper function used to fill shipArray with 1s -> creates proper length, and has boolean used for 'hit' status.
  const fillArray = function fillArray() {
    for (let i = 0; i < length; i += 1) {
      shipArray.push(1);
    }
  };
  fillArray();

  // shipSunk() is a public method which tests for the shipArray's state. Once shipArray's indices have all been replaced with 0.
  // shipSunk() will declare that the ship has sunk.
  // This means that shipSunk() will need to be called every time hitShip() is called, that way it will be invoked properly.
  const shipSunk = function shipSunk(ship) {
    const stateOfShip = ship.reduce((prev, curr) => prev + curr);
    // if (stateOfShip === 0) {
    //   return 'The ship has sunk';
    // }
    // return shipArray;
    return stateOfShip;
  };

  // a public method which mutates shipArray. I think mutation is necessary here since the ship needs to change state.
  const hitShip = function hitShip(indexOfShip) {
    if (shipArray[indexOfShip] !== 0) {
      shipArray[indexOfShip] = 0;
    }
    if (shipSunk(shipArray) === 0) {
      return 'the ship has sunk';
    }

    return shipArray;
  };

  return {
    shipArray,
    hitShip,
  };
};
