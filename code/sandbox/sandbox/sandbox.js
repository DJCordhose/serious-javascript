'use strict';

function MyType() {
    this.a = 10;
    Object.seal(this);
}
MyType.prototype.log = function() {
    console.log(this.a);
};
Object.freeze(MyType.prototype);

var obj = new MyType();
obj.log();

obj.a = 20;

//MyType.prototype.log2 = function() {
//    console.log(this.a);
//};
// => TypeError: Can't add property log2, object is not extensible
//obj.log2();
