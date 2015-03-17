import {Component, Template} from 'annotations';
import {bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-app',
  componentServices: []
})
@Template({
  url: '/hello.html',
  directives: []
})
class HelloCmp {
  greeting: string;
  constructor() {
    this.greeting = 'Hello';
  }
  reset(input) {
    this.greeting = '';
    input.focus();
  }
  updateModel(value) {
    this.greeting = value;
  }
}

export function main() {
  bootstrap(HelloCmp);
}
