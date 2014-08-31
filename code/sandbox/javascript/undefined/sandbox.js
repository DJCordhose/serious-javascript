var obj = {
    a: null,
    b: undefined,
    d: "d",
    e: "e"
};

typeof obj.a; // => "object"

typeof obj.b; // => "undefined"

typeof obj.c; // => "undefined"

obj.d = null;
typeof obj.d; // => "object"

obj.e = undefined;
typeof obj.e; // => "undefined"