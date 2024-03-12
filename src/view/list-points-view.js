import {createElement} from '../render.js';
import {createListPointsTemplate} from '../template/list-points-template.js';

export default class ListPointsView {
  getTemplate() {
    return createListPointsTemplate();
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
