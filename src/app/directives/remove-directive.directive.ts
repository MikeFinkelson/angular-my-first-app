import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appRemoveDirective]",
  host: {
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()"
  }
})
export class RemoveDirectiveDirective {
  private el: HTMLElement;

  @Input("hover-color") hoverColor: string = "gray";
  @Input("leave-color") leaveColor: string = "red";

  constructor(element: ElementRef) {
    this.el = element.nativeElement;
    this.highLight(this.leaveColor);
  }

  onMouseEnter() {
    this.highLight(this.hoverColor);
  }

  onMouseLeave() {
    this.highLight(this.leaveColor);
  }

  private highLight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
