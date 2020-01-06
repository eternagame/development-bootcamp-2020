interface Component {
  a: number;
}

interface Mixin1 {
  b: number;
}

interface Mixin2 {
  c: number;
}

let component0 : Component;
let component1 : Component & Mixin1;
let component2 : Component & Mixin2;
let component3 : Component & Mixin1 & Mixin2;

component0.a;

component1.a;
component1.b;

component2.a;
component2.c;

component3.a;
component3.b;
component3.c;