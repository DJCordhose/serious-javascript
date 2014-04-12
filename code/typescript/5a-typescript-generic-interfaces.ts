// Generics in its least complicated form

interface Pair<T1, T2> {
    name: T1;
    singleLine?: T2;
}

function eatThis(conf:Pair<string, boolean>) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }
}

eatThis({
    name: 'Olli',
    singleLine: true
});
