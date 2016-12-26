import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEventHandler]'
})
export class EventHandlerDirectiveDirective {

  private textColor:string = "red";

  @HostListener('click',['$event']) checkboxChecked(evt) {
    console.log("i got checked",evt.srcElement.getAttribute('data-filter-type'));
  }

  // @HostBinding('style.color') get setColor() {
  //   return this.textColor;
  // };

  // @HostListener('keyup',['$event']) gotKeyUp(evt) {
  //   this.textColor = evt.srcElement.value.length % 2 == 0 ? '#147CE0' : 'yellow';
  // }

  // @HostListener('focus',['$event']) gotfocus(evt) {
  //   console.log("i got focus",evt);
  // }

  // @HostListener('blur') gotblur() {
  //   console.log("i got blur");
  // }

  // @HostListener('mouseenter') mouseover() {
  //   console.log("in");
  // }

  // @HostListener('mouseleave') mouseoff() {
  //   console.log("out!");
  // }

  constructor() { }

}
