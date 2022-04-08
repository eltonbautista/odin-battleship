// /* eslint-disable no-console */
// /* eslint-disable no-undef */
// import { shipFactoryFunction } from '../logic/factory-function-ship';

// // Test for a ship with a length of 2
// const submarine = shipFactoryFunction(2);
// const carrier = shipFactoryFunction(5);

// test("Testing the ship's length", () => {
//   expect(submarine.shipArray.length).toBe(2);
// });

// test('Testing the hit method on ship', () => {
//   expect(submarine.shipArray[0]()).toEqual([0, submarine.hitShip]);
//   console.log(submarine.shipArray);
// });

// test('Testing the sunk method on ship', () => {
//   expect(submarine.shipArray[1]()).toEqual('the ship has sunk');
// });

// // Test for a ship with a length of 5
// test("testing the commander boat's length", () => {
//   expect(shipFactoryFunction(5).shipArray.length).toBe(5);
// });

// test('Testing the hit method on my shipFactoryFunction(5)', () => {
//   expect(carrier.shipArray[0]()).toEqual([
//     0,
//     carrier.hitShip,
//     carrier.hitShip,
//     carrier.hitShip,
//     carrier.hitShip,
//   ]);
// });
