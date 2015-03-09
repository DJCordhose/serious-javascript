import {bootstrap, Component, Template} from 'angular2/angular2';

@Component({
  selector: 'hello-app'
})
@Template({
  inline: `<input [value]="greeting">
  <p>{{greeting}}, World</p>
  <button (click)="clear()">Clear</button>`
})
class HelloCmp {
  greeting: string;
  constructor() {
    this.greeting = 'Hello';
  }
  clear() {
    this.greeting = '';
  }
}

export function main() {
  bootstrap(HelloCmp);
}
