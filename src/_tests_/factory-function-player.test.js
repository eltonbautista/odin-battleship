/* eslint-disable no-undef */
import { Player } from '../function-logic/factory-function-player';

const playerOne = Player('playerOne');

test('player property test', () => {
  expect(playerOne.player).toBe('playerOne');
});

test('unique random number property test', () => {
  expect(typeof playerOne.getUniqueRandom()).toBe('number');
});
