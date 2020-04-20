import { RotationState } from './RotationState';
import { RotationOperation } from './RotationOperation';

export type ValidTetronimo = "I" | "J" | "L" | "S" | "T" | "Z" | "O" | "_";
const valid: ValidTetronimo[] = ["I", "J", "L",  "S",  "T",  "Z", "O" ];

type TetronimoLayout = { label: RotationState, layout: string[][] };

type TetLocation = { x: number, y: number };

export class Tetromino {

    public orientation: RotationState;
    public allLayouts: TetronimoLayout[];
    public layout: string[][];
    public locked: boolean;

    public location: TetLocation;

    private constructor(allLayouts: TetronimoLayout[], defaultState: RotationState = RotationState.O) {
        this.allLayouts = allLayouts;
        this.orientation = defaultState;
        this.layout = this.layoutFor(defaultState);
        this.locked = false;
        this.location = { x: -1, y: -1 };
    }

    public rotate(direction: RotationOperation) {
        const rotationMap = [
            RotationState.O,
            RotationState.R,
            RotationState.TWO,
            RotationState.L,
        ];

        const currentIndex = rotationMap.indexOf(this.orientation);
        let nextState = currentIndex + direction;
        
        nextState = nextState >= rotationMap.length ? 0 : nextState;
        nextState = nextState < 0 ? rotationMap.length - 1 : nextState;
        this.orientation = rotationMap[nextState];

        this.layout = this.layoutFor(this.orientation);
    }

    public occupies(testLoc: TetLocation): boolean {
      for (let minoY in this.layout) {
        const y = parseInt(minoY);
        
        for (let minoX in this.layout) {
          const x = parseInt(minoX);

          const cellValue = this.layout[y][x];
          if (cellValue === ' ') { 
            continue;
          }
          
          const locationInWorldX = this.location.x + x;
          const locationInWorldY = this.location.y - y;
          
          if (locationInWorldX === testLoc.x && locationInWorldY === testLoc.y) {
            return true;
          }          
        }
      }
      
      return false;
    }

    private layoutFor(state: RotationState) {        
        return this.allLayouts.filter(l => l.label == state)[0].layout;
    }

    public static create(shape: ValidTetronimo): Tetromino {
        return new Tetromino(layouts[shape]);
    }
    
    public static I(): Tetromino { return this.create("I") }
    public static J(): Tetromino { return this.create("J") }
    public static L(): Tetromino { return this.create("L") }
    public static S(): Tetromino { return this.create("S") }
    public static T(): Tetromino { return this.create("T") }
    public static Z(): Tetromino { return this.create("Z") }
    public static O(): Tetromino { return this.create("O") }

    public static random(): Tetromino {
      let shuffled = valid
                    .map((a) => ({sort: Math.random(), value: a}))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value);
      
      return Tetromino.create(shuffled[0]);
    }
}

const layouts = {
    "_": [
        { 
            label: RotationState.O,
            layout: [
                "#   ".split(''),
                "    ".split(''),
                "    ".split(''),
                "    ".split('')
            ]
        },
        { 
            label: RotationState.R,
            layout: [
                " #  ".split(''),
                "    ".split(''),
                "    ".split(''),
                "    ".split('')
            ]
        },
        { 
            label: RotationState.TWO,
            layout: [
                "  # ".split(''),
                "    ".split(''),
                "    ".split(''),
                "    ".split('')
            ]
        },
        { 
            label: RotationState.L,
            layout: [
                "   #".split(''),
                "    ".split(''),
                "    ".split(''),
                "    ".split('')
            ]
        },            
    ],

    "I": [
            { 
                label: RotationState.O,
                layout: [
                    "    ".split(''),
                    "####".split(''),
                    "    ".split(''),
                    "    ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    "  # ".split(''),
                    "  # ".split(''),
                    "  # ".split(''),
                    "  # ".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "    ".split(''),
                    "    ".split(''),
                    "####".split(''),
                    "    ".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    " #  ".split(''),
                    " #  ".split(''),
                    " #  ".split(''),
                    " #  ".split('')
                ]
            },            
        ],
        
    "J": [
            { 
                label: RotationState.O,
                layout: [
                    "#  ".split(''),
                    "###".split(''),
                    "   ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    " ##".split(''),
                    " # ".split(''),
                    " # ".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "   ".split(''),
                    "###".split(''),
                    "  #".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    " # ".split(''),
                    " # ".split(''),
                    "## ".split('')
                ]
            },            
        ],

    "L": [
            { 
                label: RotationState.O,
                layout: [
                    "  #".split(''),
                    "###".split(''),
                    "   ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    " # ".split(''),
                    " # ".split(''),
                    " ##".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "   ".split(''),
                    "###".split(''),
                    "#  ".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    "## ".split(''),
                    " # ".split(''),
                    " # ".split('')
                ]
            },            
        ],

    
    "O": [
            { 
                label: RotationState.O,
                layout: [
                    " ## ".split(''),
                    " ## ".split(''),
                    "    ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    " ## ".split(''),
                    " ## ".split(''),
                    "    ".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    " ## ".split(''),
                    " ## ".split(''),
                    "    ".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    " ## ".split(''),
                    " ## ".split(''),
                    "    ".split('')
                ]
            },            
        ],

    
    "S": [
            { 
                label: RotationState.O,
                layout: [
                    " ##".split(''),
                    "## ".split(''),
                    "   ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    " # ".split(''),
                    " ##".split(''),
                    "  #".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "   ".split(''),
                    " ##".split(''),
                    "## ".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    "#  ".split(''),
                    "## ".split(''),
                    " # ".split('')
                ]
            },            
        ],      

    "T": [
            { 
                label: RotationState.O,
                layout: [
                    " # ".split(''),
                    "###".split(''),
                    "   ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    " # ".split(''),
                    " ##".split(''),
                    " # ".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "   ".split(''),
                    "###".split(''),
                    " # ".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    " # ".split(''),
                    "## ".split(''),
                    " # ".split('')
                ]
            },            
        ], 

    "Z": [
            { 
                label: RotationState.O,
                layout: [
                    "## ".split(''),
                    " ##".split(''),
                    "   ".split('')
                ]
            },
            { 
                label: RotationState.R,
                layout: [
                    "  #".split(''),
                    " ##".split(''),
                    " # ".split('')
                ]
            },
            { 
                label: RotationState.TWO,
                layout: [
                    "   ".split(''),
                    "## ".split(''),
                    " ##".split('')
                ]
            },
            { 
                label: RotationState.L,
                layout: [
                    " # ".split(''),
                    "## ".split(''),
                    "#  ".split('')
                ]
            },            
        ],        

};