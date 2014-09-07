'use strict';

var personmodule = {};
(function () {
    "use strict";
    function _extends(_sub, _super) {
        _sub.prototype = Object.create(_super.prototype);
        _sub.prototype.constructor = _sub;
    }

    function Person(name, alter, geschlecht) {
        this.name = name;
        this.alter = alter;
        this.geschlecht = geschlecht;
        this.watchers = [];
    }

    Person.prototype.getName = function () {
        this._notify();
        return this.name;
    };

    Person.prototype._notify = function () {
        this.watchers.forEach(function(watcherWithScope) {
            watcherWithScope.watcher.call(watcherWithScope.scope);
        });
    };

    Person.prototype.registerWatcher = function(watcher, scope) {
        this.watchers.push({
            watcher: watcher,
            scope: scope || null
        });
    };

    Person.prototype.log = function () {
        var info = "Alter von " + this.name + ": " + this.alter;
        console.log(info);
    };

    function Customer(name, alter, geschlecht) {
        Person.apply(this, arguments);
        this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
    }
    _extends(Customer, Person);

    Customer.prototype.shop = function() {
        console.log("Shopping: " + this.preferredArticle);
    };

    Customer.prototype.getName = function() {
        // super call
        return "Dear " + Person.prototype.getName.call(this);
    };

    personmodule.Customer = Customer;
})();


var olli = new personmodule.Customer('Olli', 42, "M");

//simple
olli.registerWatcher(function () {
    console.log("Called #1");
});
olli.registerWatcher(function () {
    console.log("Called #2");
});

var obj = {
    name: 'Olli',
    log: function() {
        console.log(this.name);
    }
};

olli.registerWatcher(obj.log);

// wenn das aufgerufen wird, werden auch alle callbacks aufgerufen
olli.getName();

















// bind
//olli.registerWatcher(console.log.bind(console, "Called / bind"));
//olli.getName();

//new object, passing this
//var obj = {
//    message: 'Called object',
//    log: function() {
//        console.log(this.message);
//    }
//};

//olli.registerWatcher(obj.log.bind(obj));
//olli.registerWatcher(obj.log, obj);
//olli.getName();

// manchmal sieht man hier auch self oder _this
//var that = this;
//
//registerListener(function (result) {
//    that.result = result;
//});