import NewPointView from './view/additional-new-point-view.js';
import EditPointView  from './view/editing-form-view.js';
import ListPointsView from './view/list-points-view.js';
import ListView from '../view/list-view.js';
import {render} from '../render.js';

export default class TripPresenter {
  listComponent = new ListView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.listComponent,this.listContainer);
    render(new EditPointView(), this.listComponent.getElement());
    render(new NewPointView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new ListPointsView(), this.listComponent.getElement());
    }
  }
}
