// modules
// each file is a module.
// add export keyword to make it a module and use it in other file
export class Point {
    // constructor is a method which is called when we create an instance of a class i.e. object
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //   access modifiers (public, private & protected)
    // to control access to certain members of a class from the outside
    // method
    draw() {
        console.log("drawing a point....");
        console.log(`X: ${this._x}, Y: ${this._y}`);
    }
}
