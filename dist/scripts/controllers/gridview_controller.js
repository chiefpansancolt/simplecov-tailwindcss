import {Controller} from 'stimulus';

export default class extends Controller {
    static targets = ['stack', 'grid', 'list', 'container'];
    static classes = ['hide', 'buttonActive', 'buttonInactive'];

    toggle() {
        if (this.listTarget.classList.contains(this.hideClass)) {
            this.listTarget.classList.remove(this.hideClass);
            this.containerTarget.classList.add(this.hideClass);
            this.buttonInactiveClass.split(' ').forEach((klass) => {
                this.stackTarget.classList.remove(klass);
                this.gridTarget.classList.add(klass);
            });
            this.buttonActiveClass.split(' ').forEach((klass) => {
                this.stackTarget.classList.add(klass);
                this.gridTarget.classList.remove(klass);
            });
        } else {
            this.listTarget.classList.add(this.hideClass);
            this.containerTarget.classList.remove(this.hideClass);
            this.buttonInactiveClass.split(' ').forEach((klass) => {
                this.gridTarget.classList.remove(klass);
                this.stackTarget.classList.add(klass);
            });
            this.buttonActiveClass.split(' ').forEach((klass) => {
                this.gridTarget.classList.add(klass);
                this.stackTarget.classList.remove(klass);
            });
        }
    }
}