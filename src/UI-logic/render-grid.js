/* eslint-disable import/prefer-default-export */
export const renderGrid = function renderGrid(gridSize, gridIdentifier) {
  const mainContent = document.querySelector('#main-content');
  const gridContainer = document.createElement('div');
  const gridCells = [];
  const populateGridContainer = function populateGridContainer() {
    for (let i = 0; i < gridSize; i += 1) {
      gridCells.push(document.createElement('div'));
      gridCells[i].setAttribute('class', `${gridIdentifier} cell`);
      gridCells[i].setAttribute(`data-${gridIdentifier}`, `${i}`);
      gridContainer.append(gridCells[i]);
    }
  };
  populateGridContainer();
  mainContent.append(gridContainer);
  return gridContainer;
};
