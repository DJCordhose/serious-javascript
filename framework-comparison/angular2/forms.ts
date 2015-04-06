import {Component, Template} from 'annotations';
import {bootstrap} from 'angular2/angular2';
import {forms} from 'angular2/forms';


@Component({
  selector: 'form-example',
  componentServices: []
})
@Template({
  // we are binding the input element to the control object
  // defined in the component's class
  inline: `<input [control]="username">Hello {{username.value}}!`,
  directives: [forms]
})
class FormExample {
  constructor() {
    this.username = new Control('World');
  }
}
export function main() {
  bootstrap(FormExample);
}
