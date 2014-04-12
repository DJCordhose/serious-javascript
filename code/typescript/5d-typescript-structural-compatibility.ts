// Names do not matter, all that matters is structure

interface A {
    b: boolean;
}

interface B {
    b: number;
}

interface C {
    b: boolean;
}

var a: A;
var b: B;
var c: C;

//a = b; // nope
//b = a; // nope
a = c; // cool, same structure
c = a; // cool, same structure


interface ListA {
    add(a: A): void;
}

interface ListC {
    add(c: C): void;
}

interface ListB {
    add(b: B): void;
}

interface List<T> {
    add(t: T): void;
}

var listA: ListA;
var listB: ListB;
var listC: ListC;
var listTA: List<A>;
var listTB: List<B>;
var listTC: List<C>;

// nope, not structurally compatible
//listC = listB;
//listB = listC;
//listB = listA;
//listA = listB;
//listTA = listTB;
//listTC = listTB;

// sure, same structure
listA = listC;
listC = listA;
listTA = listTC;
listTC = listTA;
