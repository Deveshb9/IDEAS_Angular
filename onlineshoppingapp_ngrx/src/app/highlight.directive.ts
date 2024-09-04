import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @Input('color') color: string = 'green';
  constructor(private el: ElementRef) {
    console.log(this.color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
