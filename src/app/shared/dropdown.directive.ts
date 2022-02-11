import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
/*export class DropdownDirective {

    @HostBinding('class.open')  isOpen = false;

    @HostListener('click') toggleOpen (){
        this.isOpen = !this.isOpen;
    }
    // constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // }
    //
    // @HostListener('click') mouseclick(eventData: Event) {
    //     if(!this.isOpen){
    //         this.renderer.addClass(this.elRef.nativeElement, 'open');
    //         this.isOpen = true;
    //     } else {
    //         this.renderer.removeClass(this.elRef.nativeElement, 'open');
    //         this.isOpen = false;
    //     }
    // }

}*/

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}