export class Tetris {

  public world: World;

  constructor() {
    this.world = new World();
  }

  public start(): void {
    setInterval(function(game: Tetris) { 
      game.tick();       
    }, 1000, this);
  }

  public tick() {

  }

}


class World {

  public width: number;
  public height: number;

  constructor(width: number = 10, height: number = 22) {
    this.width = width;
    this.height = height;
  }
}