import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = ['menu'];
  static classes = ['hide', 'visible', 'invisible', 'entering', 'leaving'];
  static values = {enterTimeout: Number, leaveTimeout: Number};

  toggle() {
    if (this.hidden) {
      this._show();
    } else {
      this._hide();
    }
  }

  _show() {
    this.menuTarget.classList.remove(this.hideClass);
    this.enteringClass.split(' ').forEach(
      ((klass) => {
        this.menuTarget.classList.add(klass);
      }),
    );

    requestAnimationFrame(
      (() => {
        this.visibleClass.split(' ').forEach((klass) => {
          this.menuTarget.classList.add(klass);
        });
        this.invisibleClass.split(' ').forEach((klass) => this.menuTarget.classList.remove(klass));
        setTimeout(
          (() => {
            this.enteringClass.split(' ').forEach((klass) => this.menuTarget.classList.remove(klass));
          }),
          this.enterTimeoutValue,
        );
      }),
    );
  }

  _hide() {
    this.invisibleClass.split(' ').forEach((klass) => this.menuTarget.classList.add(klass));
    this.visibleClass.split(' ').forEach((klass) => this.menuTarget.classList.remove(klass));
    this.leavingClass.split(' ').forEach((klass) => this.menuTarget.classList.add(klass));
    setTimeout(
      (() => {
        this.menuTarget.classList.add(this.hideClass);
        this.leavingClass.split(' ').forEach((klass) => this.menuTarget.classList.remove(klass));
      }),
      this.leaveTimeoutValue,
    );
  }

  hide(event) {
    if (this.element.contains(event.target) === false && !this.hidden) {
      this._hide();
    }
  }

  get hidden() {
    return this.menuTarget.classList.contains(this.hideClass);
  }
}