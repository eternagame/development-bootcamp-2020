const obj1 = {
  a: 3,
  b: {
    c: 5
  }
}

let obj2: {
  a: number;
  // The way to type objects is very similar to how they are written in JS
  b: {
    c: number;
  }
}

obj2 = obj1;

// obj2 = { a: 5 }; Property 'b' is missing ...

let obj3: {
  a: number;
  // The way to type objects is very similar to how they are written in JS
  b?: {
    c: number;
  }
}

obj3 = obj1;
obj3 = { a: 5 };
// obj3.b.c; => Object is possibly 'undefined'