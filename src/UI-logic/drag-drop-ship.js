/* eslint-disable comma-dangle */
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
      console.log(e.dataTransfer.items);
    });
  }

  const dropGrid = document.querySelector('#player');
  const playerCellsArray = document.querySelectorAll(
    '#main-content > div:first-child > div'
  );

  // Okay so basically the user will drag a ship onto one of the cells, but there needs to be enough
  // adjacent cells beside the cell it's dropped on, so that it will properly drop.

  const changeBackgroundColor = function changeBackgroundColor(color, ...cell) {
    console.log(cell);
    // let parsedInt;
    cell.forEach((int) => {
      playerCellsArray[int].style.backgroundColor = `${color}`;
    });
  };

  const stringToNumber = function stringToNumber(num) {
    return parseInt(num);
  };

  for (const cell of playerCellsArray) {
    cell.addEventListener('dragover', (e) => {
      e.preventDefault();
      cell.classList.add('player--over');
      changeBackgroundColor(
        'green',
        stringToNumber(e.target.dataset.player),
        stringToNumber(e.target.dataset.player) + 1
      );
    });

    cell.addEventListener('dragleave', (e) => {
      changeBackgroundColor(
        'blue',
        stringToNumber(e.target.dataset.player),
        stringToNumber(e.target.dataset.player) + 1
      );
    });

    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      const shipId = e.dataTransfer.getData('text/plain');
      const droppedShip = document.getElementById(shipId);
      console.log(e.target.dataset.player);
      changeBackgroundColor(
        'green',
        stringToNumber(e.target.dataset.player),
        stringToNumber(e.target.dataset.player) + 1
      );
    });
  }

  //   dropGrid.addEventListener('dragover', (e) => {
  //     e.preventDefault();
  //     // dropGrid.classList.add('drop-zone--over');
  //   });

  //   dropGrid.addEventListener('drop', (e) => {
  //     e.preventDefault();
  //     const shipId = e.dataTransfer.getData('text/plain');
  //     console.log(shipId);
  //     const droppedShip = document.getElementById(shipId);
  //     dropGrid.appendChild(droppedShip);
  //     console.log(e);
  //   });
};
