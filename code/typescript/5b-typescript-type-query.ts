// Type queries

interface EatThisConfig {
    name: string;
    singleLine?: boolean;
}

function eatThis(conf: EatThisConfig) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }

}

var a = eatThis({
    name: 'Olli',
    singleLine: true
});

// whatever is the type of a, is now also the type of b
var b: typeof a;

// no way, number does not match void
b = 10;