/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
// import { dragDropShip } from './drag-drop-ship';

// Renders the div and ships that are dragged onto the player's grid.

export const startMenu = function startMenu() {
  const designateShipsDiv = document.querySelector('#start-menu');
  const startMenuHeader = document.createElement('p');
  designateShipsDiv.append(startMenuHeader);
  startMenuHeader.textContent = '(Place your fleet!)';
  let myShipElements = [];
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
  // prettier-ignore
  myShipElements.forEach((ship) => ship.setAttribute('data-orientation', 'horizontal'));

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

  const startGameButton = document.createElement('button');
  startGameButton.textContent = 'ゲームを始める';
  designateShipsDiv.append(startGameButton);

  const startGameFunction = function startGameFunction() {
    startGameButton.addEventListener('click', (e) => {
      const emptyShipArray = myShipElements.filter((index) => index !== null);
      if (emptyShipArray.length === 0) {
        designateShipsDiv.textContent = '';
        designateShipsDiv.style.visibility = 'hidden';
        myShipElements = emptyShipArray;
      }
    });
  };
  startGameFunction();

  return myShipElements;
};
