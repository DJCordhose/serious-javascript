// Two Interfaces with the same name will merge into one

interface EatThisConfig {
    singleLine?: boolean;
}
interface EatThisConfig {
    name: string;
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

