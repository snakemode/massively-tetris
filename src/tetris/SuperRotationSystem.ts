import { Tetromino } from "./Tetromino";
import { World } from "./World";
import { RotationOperation, RotationState, IRotationSystem } from './Types';

export type KickDelta = { deltaX: number, deltaY: number };

// https://tetris.wiki/Super_Rotation_System
export class SuperRotationSystem implements IRotationSystem {
  
  private world: World;
  
  public constructor(world: World) {
    this.world = world;
  }

  public rotate(direction: RotationOperation) {
    const kickRules = this.getWallKicksFor(direction);

    for (let rule of kickRules) {

      const rotated = this.world.tetromino.previewRotation(direction);    
      rotated.location.x += rule.deltaX;
      rotated.location.y += rule.deltaY;

      if (!this.collidesWithSomething(rotated)) {
        this.world.tetromino = rotated;
        return;
      }
    }
  }

  private collidesWithSomething(withRotationApplied: Tetromino) {
    
    for (var mino of withRotationApplied.minos()) {   
      
      if (mino.y < 0) { 
        return true;
      }
      
      if (mino.x < 0 || mino.x >= this.world.width) {
        return true;
      }

      const collisions = this.world.occupiedLocations.filter(loc => loc.x == mino.x && loc.y == mino.y);
      if (collisions.length > 0) {
        return true;
      }
    }
    return false; 
  }

  private getWallKicksFor(direction: RotationOperation): KickDelta[] {
    const ruleset = [ "J", "L", "S", "T", "Z" ].indexOf(this.world.tetromino.shape) != -1 
      ? generalKickRules 
      : kickRulesForI;

    const kickRules = ruleset.get(this.world.tetromino.orientation);

    if (kickRules == null) {
      return [ { deltaX: 0, deltaY: 0 } ];
    }

    if (direction == RotationOperation.Left) {
      for (let rule of kickRules) {
        rule.deltaX *= -1;
        rule.deltaY *= -1;
      }
    }

    return kickRules;
  }

}


const generalKickRules = new Map<RotationState, KickDelta[]>()
  .set(RotationState.O,  [ 
    { deltaX: 0, deltaY: 0 }, 
    { deltaX: -1, deltaY: 0 }, 
    { deltaX: -1, deltaY: 1 }, 
    { deltaX: 0, deltaY: -2 }, 
    { deltaX: -1, deltaY: -2 } 
  ])
  .set(RotationState.R,  [ 
    { deltaX: 0, deltaY: 0 }, 
    { deltaX: 1, deltaY: 0 }, 
    { deltaX: 1, deltaY: -1 }, 
    { deltaX: 0, deltaY: 2 }, 
    { deltaX: 1, deltaY: 2 }
  ])
  .set(RotationState.TWO, [
    { deltaX: 0, deltaY: 0 },
    { deltaX: 1, deltaY: 0 },
    { deltaX: 1, deltaY: 1 },
    { deltaX: 0, deltaY: -2 },
    { deltaX: 1, deltaY: -2 }      
  ])
  .set(RotationState.L, [
    { deltaX: 0, deltaY: 0 },
    { deltaX: -1, deltaY: 0 },
    { deltaX: -1, deltaY: -1 },
    { deltaX: 0, deltaY: 2 },
    { deltaX: -1, deltaY: 2 }     
  ]);

const kickRulesForI = new Map<RotationState, KickDelta[]>()
  .set(RotationState.O,  [ 
    { deltaX: 0, deltaY: 0 }, 
    { deltaX: -2, deltaY: 0 }, 
    { deltaX: 1, deltaY: 0 }, 
    { deltaX: -2, deltaY: -1 }, 
    { deltaX: 1, deltaY: 2 }   
  ])
  .set(RotationState.R,  [ 
    { deltaX: 0, deltaY: 0 }, 
    { deltaX: -1, deltaY: 0 }, 
    { deltaX: 2, deltaY: 0 }, 
    { deltaX: -1, deltaY: 2 }, 
    { deltaX: 2, deltaY: -1 }  
  ])
  .set(RotationState.TWO, [
    { deltaX: 0, deltaY: 0 }, 
    { deltaX: 2, deltaY: 0 }, 
    { deltaX: -1, deltaY: 0 }, 
    { deltaX: 2, deltaY: 1 }, 
    { deltaX: -1, deltaY: -2 }      
  ])
  .set(RotationState.L, [
    { deltaX: 0, deltaY: 0 },
    { deltaX: 1, deltaY: 0 }, 
    { deltaX: -2, deltaY: 0 },
    { deltaX: 1, deltaY: -2 }, 
    { deltaX: -2, deltaY: 1 }        
  ]);