/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shipFactoryFunction } from '../logic/factory-function-ship';

// Test
test('this is a test', () => {
  expect(shipFactoryFunction(3).shipArray.length).toBe(3);
});

// Test for a ship with a length of 2
test("Testing the ship's length", () => {
  expect(shipFactoryFunction(2).shipArray.length).toBe(2);
});

test('Testing the hit method on my ship factory', () => {
  expect(shipFactoryFunction(2).hitShip(0)).toEqual([0, 1]);
});

// Test for a ship with a length of 5
test("testing the commander boat's length", () => {
  expect(shipFactoryFunction(5).shipArray.length).toBe(5);
});

test('Testing the hit method on my shipFactoryFunction(5)', () => {
  expect(shipFactoryFunction(5).hitShip(2)).toEqual([1, 1, 0, 1, 1]);
});
