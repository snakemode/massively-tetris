export type ValidTetronimo = "I" | "J" | "L" | "S" | "T" | "Z" | "O" | "_" | "Empty";
export type Location = { x: number, y: number };
export type Mino = { x: number, y: number, relativeX: number, relativeY: number, shape: ValidTetronimo };
export type Move = { deltaX: number, deltaY: number };