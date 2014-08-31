var obj = {
    field: 10,
    log: function() {
        console.log(this.field);
    }
};

obj.log();