"use strict";

function successCallback(e) {
    console.log("Success");
    console.log(arguments);
}

function selectSuccessCallback(tx, rs) {
    console.log("Success");
    console.log(arguments);
    for (var i = 0; i < rs.rows.length; i++) {
        console.log("Name: " + rs.rows.item(i).name);
        console.log("Age: " + rs.rows.item(i).age);
    }
}

function errorCallback(e) {
    console.log("Error");
    console.log(arguments);
}

var db = window.openDatabase("Demo", "1.0", "Demo Database", 5 * 1024 * 1024);
db.transaction(function (tx) {
    console.log(tx);
    tx.executeSql("CREATE TABLE test(name varchar(10), age number)", [], successCallback, errorCallback);
    tx.executeSql("INSERT INTO test VALUES('Olli', 10)", [], successCallback, errorCallback);
    tx.executeSql("SELECT * FROM test", [], selectSuccessCallback, errorCallback);
});
