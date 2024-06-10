function createFilterItems(filters, currentFilterType) {
  return filters.map(({ type, isDisabled }) => (`<div class="trip-filters__filter">
  <input id="filter-${type}" class="trip-filters__filter-input visually-hidden" ${isDisabled ? 'disabled' : ''} type="radio" name="trip-filter" value="${type}" ${type === currentFilterType ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
</div>`)).join('');
}

function createFilterTemplate(filters, currentFilterType){
  return `<div class="trip-main__trip-controls  trip-controls">
            <div class="trip-controls__filters">
              <h2 class="visually-hidden">Filter events</h2>
              <form class="trip-filters" action="#" method="get">
                ${createFilterItems(filters, currentFilterType)}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>
            </div>
          </div>`;
}

export {createFilterTemplate, createFilterItems};
