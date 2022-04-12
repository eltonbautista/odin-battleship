/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
export const dragDropShip = function dragDropShip() {
  const draggableShips = document.querySelectorAll('div[data-shipelement]');

  // eslint-disable-next-line no-restricted-syntax
  for (const ship of draggableShips) {
    // eslint-disable-next-line no-loop-func
    ship.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', ship.id);
    });
  }

  const dropGrid = document.querySelector('#player');
  const playerCellsArray = document.querySelectorAll(
    '#main-content > div:first-child > div'
  );

  for (const cell of playerCellsArray) {
    cell.addEventListener('dragover', (e) => {
      e.preventDefault();
      // cell.classList.add('drop-zone--over');
    });

    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      const shipId = e.dataTransfer.getData('text/plain');
      const droppedShip = document.getElementById(shipId);
      console.log(e);
    });
  }

  dropGrid.addEventListener('dragover', (e) => {
    e.preventDefault();
    // dropGrid.classList.add('drop-zone--over');
  });

  dropGrid.addEventListener('drop', (e) => {
    e.preventDefault();
    const shipId = e.dataTransfer.getData('text/plain');
    console.log(shipId);
    const droppedShip = document.getElementById(shipId);
    dropGrid.appendChild(droppedShip);
    console.log(e);
  });
};
