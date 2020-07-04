import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueIcon]'
})
export class BlueIconDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#0606b6"
  }

}
