/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
export const shipFactoryFunction = function shipFactoryFunction(length) {
  // length of ship is determined by an array.
  // The array will input x amount of 1s into the array depending on its desired length. e.g. patrol boat = [1, 1];
  const shipArray = [];

  // A helper function used to fill shipArray with 1s -> creates proper length, and has boolean used for 'hit' status.
  const fillArray = function fillArray() {
    for (let i = 0; i < length; i += 1) {
      shipArray.push(1);
    }
  };
  fillArray();

  // a public method which mutates shipArray. I think mutation is necessary here since the ship needs to change state.
  const hitShip = function hitShip(indexOfShip) {
    if (shipArray[indexOfShip] !== 0) {
      shipArray[indexOfShip] = 0;
    }
    return shipArray;
  };

  return {
    shipArray,
    hitShip,
  };
};
