// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol

var lang = { name: 'JavaScript', birthYear: 1995 };
var it = Iterator(lang);

var pair = it.next(); // Pair is ["name", "JavaScript"]
console.log(JSON.stringify(pair));
pair = it.next(); // Pair is ["birthYear", 1995]
console.log(JSON.stringify(pair));
pair = it.next(); // A StopIteration exception is thrown
console.log(JSON.stringify(pair));
