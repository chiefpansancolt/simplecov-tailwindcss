import {Controller} from 'stimulus';

export default class extends Controller {
  toggle(event) {
    const TARGETS = event.currentTarget.dataset.toggleTarget.split(',');
    const HIDDEN_CLASS = this.element.dataset.hiddenClass || 'hidden';

    TARGETS.forEach((target) =>
      document
        .querySelectorAll(`[data-toggle-name="${target}"]`)
        .forEach((target) => target.classList.toggle(HIDDEN_CLASS)),
    );
  }
}
