/* eslint-disable import/prefer-default-export */
export const gridMouseEvents = function gridMouseEvents(grid) {
  grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(0, 100, 150)';
  });

  grid.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'rgb(4, 0, 250)';
  });
};
