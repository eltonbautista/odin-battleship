/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const Player = function playerFactoryFunction(player) {
  // prettier-ignore
  const coordinatesArray = [];
  const numOfRandom = 100;

  // Okay so getUnique is going to be used to get a random number.
  // It also removes that random number from an array of 0-99 so that it can't be reused.
  const getUniqueRandom = function getUniqueRandomInt() {
    // eslint-disable-next-line wrap-iife

    if (!coordinatesArray.length) {
      for (let i = 0; i < numOfRandom; i += 1) {
        coordinatesArray.push(i);
      }
    }
    const randomIndex = Math.floor(Math.random() * coordinatesArray.length);
    const randomVal = coordinatesArray[randomIndex];

    coordinatesArray.splice(randomIndex, 1);
    console.log(coordinatesArray);
    return randomVal;
  };
  // We want to pass gameboard's receiveAttack into this function to use it in conjunction w/ getUniqueRandom.
  //   const randomCoordinate = function randomCoordinate() {
  //     return receiveAttack(getUniqueRandom());
  //   };

  return {
    player,
    getUniqueRandom,
  };
};
