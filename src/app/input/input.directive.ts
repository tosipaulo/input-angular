import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(public el: ElementRef) {
    console.log(this.el)
   }

}
