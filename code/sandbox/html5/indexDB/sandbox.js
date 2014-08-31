"use strict";

// https://developer.mozilla.org/en-US/docs/IndexedDB/Using_IndexedDB

var customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];
var dbName = "the_name";

var request = window.indexedDB.open(dbName, 1);

request.onerror = function(event) {
    console.log("Error");
    console.log(arguments);
};
request.onsuccess = function(event) {
    console.log("Success");
    console.log(arguments);
    var db = event.srcElement.result;
    var transaction = db.transaction(['customers'], "readwrite");
    var objectStore = transaction.objectStore('customers');
    for (var i in customerData) {
        var request = objectStore.add(customerData[i]);
        request.onsuccess = function(event) {
            console.log("Success");
            console.log(arguments);
        };
    }
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Create an objectStore to hold information about our customers. We're
    // going to use "ssn" as our key path because it's guaranteed to be
    // unique.
    var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

    // Create an index to search customers by name. We may have duplicates
    // so we can't use a unique index.
    objectStore.createIndex("name", "name", { unique: false });

    // Create an index to search customers by email. We want to ensure that
    // no two customers have the same email, so use a unique index.
    objectStore.createIndex("email", "email", { unique: true });

    // Store values in the newly created objectStore.
    for (var i in customerData) {
        objectStore.add(customerData[i]);
    }
};