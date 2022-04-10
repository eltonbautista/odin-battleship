/* eslint-disable no-console */
/* eslint-disable no-undef */
import { Player } from '../logic/factory-function-player';
import { Gameboard } from '../logic/factory-function-gameboard';
const testBoard = Gameboard();

const playerOne = Player('playerOne', testBoard.receiveAttack);
const foo = console.log;
test('checking Player properties', () => {
  expect(playerOne).toEqual({
    player: 'playerOne',
    getUniqueRandom: 'number',
  });
});
