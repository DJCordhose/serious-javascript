// Interfaces in TypeScript can contain fields and methods - structural compatibility

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

eatThis({
    name: 'Olli',
    singleLine: true
});

eatThis({
    name: 'Olli',
    singleLine: false
});
