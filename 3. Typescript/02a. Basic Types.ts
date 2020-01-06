let x: number;

x = 5;
// x = 'abc' // => Error: Type '"abc"' is not assignable to type 'number'.

let y: number = 6;

let z = 6; // type: number
// z = 'efg'; // => Type '"efg"' is not assignable to type 'number'.

let a;

const letters = 'abc'; // type: "abc"
const response = prompt(); // type: string

let str = 'efg'; // type: string
str = 'hij';

const arr = [1,2,3]; // type: 'array'
let w = arr[0]; // type: number

let row: number[];
let grid: number[][];

let anyVar: any;
anyVar = 4;
anyVar = [1, 2, 3];
anyVar = 'abc';

// y = 'abc'; // => Error: Type '"abc"' is not assignable to type 'number'.
let anyString: any = 'abc';
y = anyString;
y = 'abc' as any; // Useful for server queries, where you are sure of the response value