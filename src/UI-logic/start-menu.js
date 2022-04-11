/* eslint-disable import/prefer-default-export */
export const startMenu = function startMenu() {
  const designateShipsDiv = document.querySelector('#start-menu');
  const gridCell = document.querySelector(
    '#main-content > div:nth-child(1) > div:nth-child(1)'
  );

  const myShipElements = [];

  const generateDivs = function (length, arrayIn, appendOnTo, attribute) {
    for (let i = 0; i < length; i += 1) {
      arrayIn.push(document.createElement('div'));
      arrayIn[i].setAttribute(`data-${attribute}`, i);
      appendOnTo.append(arrayIn[i]);
    }
  };
  generateDivs(5, myShipElements, designateShipsDiv, 'shipelement');

  const [
    carrierElement,
    battleshipElement,
    destroyerElement,
    submarineElement,
    patrolBoatElement,
  ] = myShipElements;
  console.log(myShipElements);
  const fillElements = function fillElements() {
    generateDivs(5, [], carrierElement, 'carrier');
    generateDivs(4, [], battleshipElement, 'battleship');
    generateDivs(3, [], destroyerElement, 'destroyer');
    generateDivs(3, [], submarineElement, 'submarine');
    generateDivs(2, [], patrolBoatElement, 'patrolBoat');
  };
  fillElements();
};
