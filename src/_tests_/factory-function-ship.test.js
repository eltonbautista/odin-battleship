/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shipFactoryFunction } from '../logic/factory-function-ship';

const patrolBoat = shipFactoryFunction(2);
const commanderBoat = shipFactoryFunction(5);

// Test for a ship with a length of 2
test("Testing the ship's length", () => {
  expect(patrolBoat.shipArray.length).toBe(2);
});

test('Testing the hit method on my ship factory', () => {
  expect(patrolBoat.hitShip(0)).toEqual([0, 1]);
});

test('Testing the shipSunk method on my ship factory', () => {
  expect(patrolBoat.shipSunk(patrolBoat.shipArray)).toEqual([0, 1]);
});

// Test for a ship with a length of 5
test("testing the commander boat's length", () => {
  expect(commanderBoat.shipArray.length).toBe(5);
});

test('Testing the hit method on my commanderBoat', () => {
  expect(commanderBoat.hitShip(2)).toEqual([1, 1, 0, 1, 1]);
});

test('Testing the shipSunk method on my commanderBoat', () => {
  expect(commanderBoat.shipSunk([commanderBoat.shipArray])).toEqual([
    1, 1, 0, 1, 1,
  ]);
});
