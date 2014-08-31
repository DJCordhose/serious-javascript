// http://www.html5rocks.com/en/tutorials/speed/v8/
// run using node --harmony --use-strict --trace-deopt --trace-opt

function MyClass(x, y) {
    this.x = x;
    this.y = y;
}

MyClass.prototype.dump = function () {
    return {
        x: this.x,
        y: this.y,
        z: this.z
    }
};

// let optimising compiler kick in
var index = 1000;
while (index-- > 0) {
    var a = new MyClass(1, 2);
    a.dump();
}
var b = new MyClass(1, 2);
b.dump();

// outsch #1 => [removing optimized code for: MyClass.dump]
//b.x = true;
//b.dump();

// outsch #2 => [removing optimized code for: MyClass.dump]
//b.z = 100;
//b.dump();

// outsch #3 => [removing optimized code for: MyClass]
var c = new MyClass("a", "b");
