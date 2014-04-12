// TypeScript supports declared types, allows for static analysis on types
// all type information will be gone at runtime, no runtime checking

function eatThis(conf: {name: string; singleLine?: boolean}) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }

}

eatThis({
    name: 'Olli',
    singleLine: true
});

eatThis({
   name: 'Olli',
    singleLine: 10
});
