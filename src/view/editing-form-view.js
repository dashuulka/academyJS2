import { createElement } from '../render.js';
import { createEditPointTemplate } from '../template/editing-form-template.js';

export default class EditPointView {
  constructor({point}) {
    this.point = point;
  }

  getTemplate() {
    return createEditPointTemplate(this.point);
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
