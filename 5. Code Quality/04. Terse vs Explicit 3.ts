let arr = [1, 2, 3, 4];

let greaterThan2 = [];
for (let x of arr) {
    if (x > 2) greaterThan2.push(x);
}

let orGreaterThan2 = arr.filter(x => x > 2);
