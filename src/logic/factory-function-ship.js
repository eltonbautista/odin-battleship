/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
export const shipFactoryFunction = function shipFactoryFunction(length) {
  // length of ship is determined by an array.
  // The array will input x amount of 1s into the array depending on its desired length. e.g. patrol boat = [1, 1];
  const shipArray = [];

  const fillArray = function fillArray() {
    for (let i = 0; i < length; i += 1) {
      shipArray.push(1);
    }
  };
  fillArray();
  return {
    shipArray,
  };
};
