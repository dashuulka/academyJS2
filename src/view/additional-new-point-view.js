import {createElement} from '../render.js';
import {createNewPointTemplate} from '../template/additional-new-point-template.js';

export default class NewPointView {
  getTemplate() {
    return createNewPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
