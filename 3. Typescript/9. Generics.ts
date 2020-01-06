function choose(a: number, b: number){
  return Math.random() > 0.5 ? a : b;
}

console.log(choose(0, 1));

function chooseString(a: string, b: string){
  return Math.random() > 0.5 ? a : b;
}

console.log(chooseString('a','b'));

function chooseAny(a: any, b: any){
  return Math.random() > 0.5 ? a : b;
}

console.log(chooseString('a','b').replace('a', 'c'));
console.log(chooseAny('a','b').replace('a', 'c'));
console.log(chooseAny(1,2).replace('a', 'c')); // BAD

function chooseGeneric<T>(a: T, b: T){
  return Math.random() > 0.5 ? a : b;
}


console.log(chooseGeneric<string>('a','b').replace('a', 'c'));
// console.log(chooseGeneric<number>(1,2).replace('a', 'c'));
console.log(chooseGeneric('a','b').replace('a', 'c'));

class Chooser<T> {
  a: T;
  b: T;

  constructor(a: T, b: T){
    this.a = a;
    this.b = b;
  }

  choose(){
    return Math.random() > 0.5 ? this.a : this.b;
  }
}

const choosers: Chooser<string>[] = [];


function choose2<T1, T2>(a: T1, b: T2){
  return Math.random() > 0.5 ? a : b;
}

console.log(choose2('a','b').replace('a', 'c'));
// console.log(choose2('a',2).replace('a', 'c'));
