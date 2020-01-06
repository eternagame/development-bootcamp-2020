export {}

let status: 'Okay' | 'Failed';

// status = 'Okay' // => This will give status a type of "Okay", which will cause issues in the switch
status = (Math.random() > 0.5) ? 'Failed' : 'Okay';

switch(status){
  case "Failed":
    console.log('F');
    break;
  case "Okay":
    console.log('S');
    break;
}

type Status = 'Okay' | 'Failed'; // Allows us to reuse this type

let status2: Status;

status2 = 'Failed';

enum StatusEnum { OK, Failed } //These are nubmers - better for memory and reusability of error codes

const status3 = StatusEnum.Failed;

console.log(status3);

function multiply(x: number | number[]){
  if (typeof x === 'number'){ // The typeof result is also a union type of strings, meaning we have autocomplete
    return x * 2;
  }
  else { // x isn't a number, so typescript knows that it's an array!
    return x.map(num => num * 2);
  }
}