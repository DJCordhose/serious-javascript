function MyType() {
    this.item1 = 'key1';
    this.item2 = 'key2';
}
MyType.prototype.method1 = function () {
}

var map = new MyType();

// Durch alle Feld-Namen iterieren
// Geht für Map / Object
for (var key in map) {
    if (map.hasOwnProperty(key)) {
        console.log("Own property: " + key + ": " + map[key]);
    } else {
        console.log("Inherited property: " + key + ": " + map[key]);
    }
}
