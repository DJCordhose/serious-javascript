// You can have typed classes as well

interface EatThisConfig {
    singleLine?: boolean;
}

class Eater {
//    private name: string;
//    constructor(name: string) {
//        this.name = name;
//    };
    constructor(private name: string) {
    }
    eatThis(conf: EatThisConfig) {
        console.log(this.name);
        if (conf.singleLine) {
            console.log('----');
        }
    }
}

var eater = new Eater('Olli');

eater.eatThis({
    singleLine: true
});

eater.eatThis({
    singleLine: 10
});
