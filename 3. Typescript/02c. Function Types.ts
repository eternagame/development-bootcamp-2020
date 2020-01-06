// We have to add this line to prevent it from running in a web environment,
// which makes it share variables with other files.
export {}

// Before returning anything or declaring the return value it is void
function readLine(){

}

const x = readLine();

function readLine2(): string {
  return 'abc' // Once we add the return we can ommit the function type
}

const y = readLine2();

function print(message: string) {
  console.log(message);
}

print('Hello World!');
//print(5); // => Error: Argument of type '5' is not assignable to parameter of type 'string'.
// print(); // => Expected 1 arguments, but got 0.ts(2554)

function printLines(message: string, lines?: number){
  if (lines === undefined)
    lines = 5;
  for (let i = 0; i < lines || 1; i++){
    print(message);
  }
}

printLines('Hello World');
printLines('Hello World', 4);
// printLines('hello World', '4'); // => Error

function printLinesDefault(message: string, lines = 5){
  for (let i = 0; i < lines || 1; i++){
    print(message);
  }
}

let printFunction: (message: string) => void;
printFunction = console.log;
// printFunction = Math.sqrt; // => Error: Type '(x: number) => number' is not assignable to type '(message: string) => void'.
printFunction = printLines; // Works because you can call it with just a string, and it returns void
printFunction = prompt; // Works because you can call it with just a string, 
                        // and you don't care about the return value, as you can't use a return value of void

async function printToServer(message: string){
  const res = await fetch('eternagame.org/web/');
  return res.status;
}