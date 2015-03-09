// http://mongoosejs.com/docs/guide.html
// for auth
// http://emptymind.me/user-authentication-with-hapi-passport-and-mongoose/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Yay");
});

var kittySchema = mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};
var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({name: 'Silence'});
console.log(silence.name);

var fluffy = new Kitten({ name: 'Fluffy' });
fluffy.speak();

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log("Find all:", kittens)
})

Kitten.find({ name: /^Fluff/ }, function (err, kittens) {
    if (err) return console.error(err);
    console.log("Find Fluff:", kittens)
});