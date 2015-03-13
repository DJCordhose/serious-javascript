/* @flow */

function foo(x) {
    return x * 10;
}

//foo("Hello, world!");

function length(x) {
    return x.length;
}

//var total = length("Hello") + length(null);

function total(numbers: Array<number>) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

//total([1, 2, 3, "Hello"]);

function foo(x) {
    if (typeof(x) === 'string') {
        return x.length;
    } else {
        return x;
    }
}

var res = foo("Hello") + foo(42)// + foo(true);

var tup: [string, number, boolean, string] = ["1", 1, true, "positive"];
var b = tup[0] + tup[1].toFixed();
