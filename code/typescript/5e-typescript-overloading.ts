// Overloading is purely compile time, runtime is up to you

class Overload {
    attr(name:string):string;

    attr(name:boolean):boolean;

    // required
    attr(name:any):any {
        return "true";
    }

}

var o = new Overload();

// cool
o.attr('string');
o.attr(true);

// not cool
o.attr(10);
