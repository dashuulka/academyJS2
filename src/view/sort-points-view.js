import AbstractView from '../framework/view/abstract-view.js';
import { createSortTemplate } from '../template/sort-template.js';

export default class SortPointsView extends AbstractView {
  #currentSortType = null;
  #handleSortTypeChange = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL' || evt.target.outerText === 'EVENT' || evt.target.outerText === 'OFFERS') {
      return;
    }

    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
