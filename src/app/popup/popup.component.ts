import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "my-popup",
  template: `
    <span class="a_span">{{ message }}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
  animations: [
    trigger("state", [
      state("opened", style({ transform: "translateY(0%)" })),
      state(
        "void, closed",
        style({ transform: "translateY(100%)", opacity: 0 })
      ),
      transition("* => *", animate("100ms ease-in"))
    ])
  ],
  styles: [
    `
      :host {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #d5f4e6;
        height: 48px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid black;
      }
      :host span {
        font-size: 15px;
        color: black;
      }

      button {
        border-radius: 50%;
      }
    `
  ]
})
export class PopupComponent {
  @HostBinding("@state")
  state: "opened" | "closed" = "closed";

  @Input()
  get message(): string {
    return this._message;
  }
  set message(message: string) {
    this._message = message;
    this.state = "opened";
  }
  private _message: string = "";

  @Output()
  closed = new EventEmitter();
}
