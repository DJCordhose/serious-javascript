var obj = {
    field: 10,
    log: function() {
        console.log(this.field);
    }
};

obj.log(); // => 10
delete obj.field;
obj.log(); // undefined
obj.field = 10;
obj.log(); // => 10
