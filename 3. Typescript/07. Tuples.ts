export {}

function getPoint() {
  return [4, 6];
}

const p = getPoint(); // type: number[]

function getPoint2() : [number, number] {
  return [5, 7];
}

const p2 = getPoint2(); // type: [number, number]

function getEntries(): [string, number] {
  return ['abc', 0];
}

const entry = getEntries();
entry[0].split('');
// entry[1].split(''); // => Error: Property 'split' does not exist on type 'number'.
entry[1] += 5;