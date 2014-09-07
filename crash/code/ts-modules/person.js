var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person(name, alter, geschlecht) {
        if (typeof geschlecht === "undefined") { geschlecht = "F"; }
        this.name = name;
        this.alter = alter;
        this.geschlecht = geschlecht;
        this.watchers = [];
    }
    Person.prototype.getName = function () {
        this.notify();
        return this.name;
    };

    Person.prototype.notify = function () {
        this.watchers.forEach(function (watcherWithScope) {
            watcherWithScope.watcher.call(watcherWithScope.scope);
        });
    };

    Person.prototype.registerWatcher = function (watcher, scope) {
        this.watchers.push({
            watcher: watcher,
            scope: scope || null
        });
    };
    return Person;
})();
exports.Person = Person;

var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(name, alter, geschlecht) {
        _super.call(this, name, alter, geschlecht);
        this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
    }
    Customer.prototype.shop = function () {
        return "Shopping: " + this.preferredArticle;
    };

    Customer.prototype.getName = function () {
        return "Dear " + _super.prototype.getName.call(this);
    };
    return Customer;
})(Person);
exports.Customer = Customer;
//# sourceMappingURL=person.js.map
