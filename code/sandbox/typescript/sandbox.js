"use strict";
var db = window.openDatabase("DBName", "1.0", "description", 5 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql("SELECT * FROM test", [], successCallback, errorCallback);
});
//# sourceMappingURL=sandbox.js.map
