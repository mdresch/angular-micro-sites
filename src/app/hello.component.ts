import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>CBA Consult {{name}}!</h3>`,
  styles: [`h3 { font-family: Proxima Nova Thin:  }`]
})
export class HelloComponent  {
  @Input() name: string;
}
