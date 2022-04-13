/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
// import { dragDropShip } from './drag-drop-ship';

export const startMenu = function startMenu() {
  const designateShipsDiv = document.querySelector('#start-menu');

  const myShipElements = [];
  const shipNames = [
    'carrier',
    'battleship',
    'destroyer',
    'submarine',
    'patrolBoat',
  ];
  const generateDivs = function generateDivs(
    length,
    arrayIn,
    appendOnTo,
    attribute,
    draggable
  ) {
    for (let i = 0; i < length; i += 1) {
      arrayIn.push(document.createElement('div'));
      arrayIn[i].setAttribute(`data-${attribute}`, i);
      appendOnTo.append(arrayIn[i]);
      if (draggable) {
        arrayIn[i].setAttribute('draggable', 'true');
        arrayIn[i].setAttribute('id', `${shipNames[i]}`);
      }
    }
  };
  generateDivs(5, myShipElements, designateShipsDiv, 'shipelement', 1);

  const [
    carrierElement,
    battleshipElement,
    destroyerElement,
    submarineElement,
    patrolBoatElement,
  ] = myShipElements;

  const fillElements = function fillElements() {
    generateDivs(5, [], carrierElement, 'carrier');
    generateDivs(4, [], battleshipElement, 'battleship');
    generateDivs(3, [], destroyerElement, 'destroyer');
    generateDivs(3, [], submarineElement, 'submarine');
    generateDivs(2, [], patrolBoatElement, 'patrolBoat');
  };
  fillElements();

  return myShipElements;
};
// startMenu();
