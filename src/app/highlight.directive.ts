import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.fontSize') fontSize: string | undefined;

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.backgroundColor = 'yellow';
    this.fontSize = '2rem';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.backgroundColor = 'transparent';
    this.fontSize = '';
  }
}
