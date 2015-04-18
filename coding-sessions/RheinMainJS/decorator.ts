/**
 * https://github.com/wycats/javascript-decorators
 * https://github.com/Microsoft/TypeScript/issues/2249
 */
'use strict';

let ClassDecorator = (num: number) => (target: typeof Person) => console.log('ClassDecorator', num, target)
let MethodDecorator = (target: typeof Person, name: string, decriptor: Object) => console.log('MethodDecorator', target, name, decriptor)
let FieldDecorator = (target: typeof Person, key: string) => console.log('FieldDecorator', target, key)

@ClassDecorator(10)
class Person {
    @FieldDecorator
    private name: string
    constructor(name) {
        this.name = name
    }
    @MethodDecorator
    protected getName() {
        return this.name
    }
}

new Person('Olli')
