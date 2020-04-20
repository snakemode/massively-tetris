import { Move } from "../tetris/Types";
import { Tetris } from "../tetris/Tetris";

export class Controls {
  
  public game: Tetris;
  
  public constructor(game: Tetris) {
    this.game = game;
  }
  
  public processInput(keyPressed) {
    console.log("pressed");
    const key = keyPressed.key.toLowerCase();
    const movement = toMove(key);
    this.game.world.move(movement);
  }

  
  public connect() {
    window.addEventListener("keypress", this.processInput, false);
  }
}


const toMove = (key: string): Move => {
  switch(key) {
    case "a": return { deltaX: -1, deltaY: 0 };
    case "s": return { deltaX: 0, deltaY: -1 };
    case "d": return { deltaX: 1, deltaY: 0 };
    default: return { deltaX: 0, deltaY: 0 };
  }    
}