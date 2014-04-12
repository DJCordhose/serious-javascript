// Even if not declared the TypeScript compiler can infer types
// call grunt and see generated declarations in dist/out.d.ts - they contain all inferred types

interface EatThisConfig {
    singleLine?: boolean;
}

class Eater {
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
// gives compile error, as compiler knows there is no such method
//eater.noWay();
