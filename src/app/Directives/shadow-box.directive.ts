import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ShadowBox]'
})
export class ShadowBoxDirective implements OnChanges {

   // dom =>
  // document.getElement
  // ElementRef
  @Input() ShadowSize:number = 5;
  @Input('ShadowBox') BGColor:string='green';   // recieves parameter from the component that uses the directive like : ShadowBox="green"

  constructor(private element:ElementRef) { }

  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor=`${this.BGColor}`;
  }

// onmouseover=func1()
// method decoractor
  @HostListener('mouseover') mouseOverFunc(){
    // this.elem.nativeElement.style.border="3px dashed blue";
    // this.element.nativeElement.style.border=`3px dashed ${this.HoverColor}`;
    this.element.nativeElement.style.borderRadius = `20px`
    this.element.nativeElement.style.boxShadow=`${this.ShadowSize}px ${this.ShadowSize}px lightgray`; 
  }

  @HostListener('mouseout') mouseOutFunc(){
    // this.element.nativeElement.style.border=`3px solid ${this.borderColor}`;
    this.element.nativeElement.style.borderRadius = `0px`
    this.element.nativeElement.style.boxShadow=`none`;  
  }
}
