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

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];
a = 1;
// a = "fd";

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Blue;
console.log("backgroundColor", backgroundColor);

let firstName;
firstName = "bharath";
let endsWithH = (<string>firstName).endsWith("h");
console.log(endsWithH);
// let alternativeWay = (firstName as string).endsWith("h");

let doLog = function (msg) {
  console.log(msg);
};

// arrow functions
let doLog1 = (msg) => console.log(msg);

// custom fns

// inline annotation
// let drawPoint = (point: { x: number; y: number }) => {

// }

// cohesion
// Things that are related should be a part of one unit

// Class
// Groups variables(properties) & functions(methods) that are highly related

// interface (only for declarations, not for implementations)
// defines the shape of a point object

// interface Point {
//   x: number;
//   y: number;
//   draw: () => void;
// }

class Point {
  // constructor is a method which is called when we create an instance of a class i.e. object
  constructor(private _x?: number, private _y?: number) {}

  //   access modifiers (public, private & protected)
  // to control access to certain members of a class from the outside

  // method
  draw() {
    console.log("drawing a point....");
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }
  // getter
  get x() {
    return this._x;
  }

  // setter
  set x(value) {
    if (value < 0) {
      throw new Error("value should be greater than 0");
    } else {
      this._x = value;
    }
  }
}

// object is instance of class
let point = new Point(1, 2);

// setting X
point.x = 2;

// getting X
let x = point.x;
console.log(x);
point.draw();
