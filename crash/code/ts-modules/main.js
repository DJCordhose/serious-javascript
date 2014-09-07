var personmodule = require('./person');

var olli = new personmodule.Customer('Olli', 42, "M");

//new object, passing this
var obj = {
    message: 'Called object',
    log: function () {
        console.log(this.message);
    }
};
olli.registerWatcher(obj.log, obj);
console.log(olli.getName());
//# sourceMappingURL=main.js.map
