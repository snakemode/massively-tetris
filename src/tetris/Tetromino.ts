
import { RotationState } from './RotationState';
import { RotationOperation } from './RotationOperation';

export type ValidTetronimo = "I" | "J" | "L" | "S" | "T" | "Z" | "O" | "_";
type TetronimoLayout = { label: RotationState, layout: string[][] };

export class Tetromino {

    public orientation: RotationState;
    public allLayouts: TetronimoLayout[];
    public layout: string[][];

    private constructor(allLayouts: TetronimoLayout[], defaultState: RotationState = RotationState.O) {
        this.allLayouts = allLayouts;
        this.orientation = defaultState;
        this.layout = this.layoutFor(defaultState);
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

    private layoutFor(state: RotationState) {        
        return this.allLayouts.filter(l => l.label == state)[0].layout;
    }

    public static create(shape: ValidTetronimo): Tetromino {
        var layoutsForShape = layouts[shape];
        console.log(shape);
        return new Tetromino(layoutsForShape);
    }

    public static I(): Tetromino { return this.create("I") }
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