// Modules the way node wants them

export interface EatThisConfig {
    singleLine?: boolean;
}

export class Eater {
    constructor(private name: string) {
    }
    eatThis(conf: EatThisConfig) {
        console.log(this.name);
        if (conf.singleLine) {
            console.log('----');
        }
    }
}
