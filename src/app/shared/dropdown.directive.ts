import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdowDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOptions() {
        this.isOpen = !this.isOpen;
    }
}