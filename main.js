function log(msg) {
    console.log(msg);
}
var message = "Hi";
log(message);
function doSomeVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // scope in the entire function using var
    console.log(i, "Final");
}
doSomeVar();
function doSomeLet() {
    // scope in the for loop using let
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //   console.log(i, "Final");
}
doSomeLet();
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, "a", false];
a = 1;
// a = "fd";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let backgroundColor = Color.Blue;
console.log("backgroundColor", backgroundColor);
let firstName;
firstName = "bharath";
let endsWithH = firstName.endsWith("h");
console.log(endsWithH);
// let alternativeWay = (firstName as string).endsWith("h");
let doLog = function (msg) {
    console.log(msg);
};
// arrow functions
let doLog1 = (msg) => console.log(msg);
let drawPoint = (point) => {
    //
    console.log(point.x);
    console.log(point.y);
};
drawPoint({
    x: 1,
    y: 2,
});
