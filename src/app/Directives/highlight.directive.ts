import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  constructor(private e1: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.highlightColor);
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }
  
  private highlight(color:string){
    this.e1.nativeElement.style.backgroundColor = color;
  }
}
