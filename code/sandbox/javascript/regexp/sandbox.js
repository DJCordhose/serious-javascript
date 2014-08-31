// returns matched string, matched index, string to be matched
console.log(/ab+c/.exec('abc'));
// => [ 'abc', index: 0, input: 'abc' ]

// no match
console.log(/ab+c/.exec('ac'));
// => null
