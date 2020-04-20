import { Move } from "./tetris/Types";

export class Controls {
  
  public game: Tetris;
  
  public constructor(game: Tetris) {
    this.game = game;
  }
  
  public processInput(keyPressed) {
    const key = keyPressed.key.toLowerCase();
    const movementDelta = this.toMove(key);
  }

  private toMove(key: string): Move {
    switch(key) {
      case "a": return { deltaX: -1, deltaY: 0 };
      case "s": return { deltaX: 0, deltaY: -1 };
      case "d": return { deltaX: 1, deltaY: 0 };
      default: return { deltaX: 0, deltaY: 0 };
    }    
  }
  
  public startGame() {                
    window.addEventListener("keypress", function(e) { this.processInput(e) }, false);
  }
}