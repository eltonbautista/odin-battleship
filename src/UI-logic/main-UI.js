/* eslint-disable import/prefer-default-export */
export const mainUI = function mainUI(gridSize) {
  const mainContent = document.querySelector('#main-content');

  const renderGrid = function renderGrid() {
    const gridContainer = document.createElement('div');
    const gridCells = [];
    const populateGridContainer = function populateGridContainer() {
      for (let i = 0; i < gridSize; i += 1) {
        gridCells.push(document.createElement('div'));
        gridContainer.append(gridCells[i]);
      }
    };
    populateGridContainer();
    mainContent.append(gridContainer);
    return gridCells;
  };
  renderGrid();
  renderGrid();
};
