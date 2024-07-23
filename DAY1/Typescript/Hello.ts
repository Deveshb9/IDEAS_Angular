var s = "hell0"; //type inferencing
console.log(s);

var a: string = "apple"; //type annotation

console.log(a);

//function
function Add(x: number, y: number): number {
    return x + y;
}

//destructuring
let cars = ["BMW", "AUDI"];

let [firstc, secondc] = cars;

console.log(firstc, secondc);

