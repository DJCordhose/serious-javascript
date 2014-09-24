"use strict";

var db = window.openDatabase("DBName", "1.0", "description", 5*1024*1024); //5MB
db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM test", [], successCallback, errorCallback);
});

class Olli2 {
    
}