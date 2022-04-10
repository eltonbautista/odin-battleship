const Player = function playerFactoryFunction(player) {
  const coordinatesArray = [];
  // prettier-ignore
  const fillCoordinatesArray = (function fillCoordinatesArray() {
    for (let i = 0; i < 100; i += 1) {
      coordinatesArray.push(i);
    }
  }());
  debugger;
  return {
    player,
  };
};
const player = Player('player');
