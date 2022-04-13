/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
import './style.css';
// import { mainUI } from './UI-logic/main-UI';
import { gameFlow } from './function-logic/gameflow';
import { startMenu } from './UI-logic/start-menu';
import { dragDropShip } from './UI-logic/drag-drop-ship';
gameFlow();
// startMenu();
dragDropShip(startMenu);
