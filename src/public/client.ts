import { Tetris } from "../tetris/Tetris";
import { World } from "../tetris/World";
import { uuidv4 } from "../util";
import { Move } from "../tetris/Types";
import { Controls } from "./Controls";
import { render } from "./render";

let game: Tetris;
let controls: Controls;

function start() {
  game = new Tetris();
  controls = new Controls(game);
  controls.connect();

  const playerId = uuidv4();
  game.addPlayer(playerId);
  game.start();

  setInterval(function() {
      render(game);
  }, 33);    
}

start();

