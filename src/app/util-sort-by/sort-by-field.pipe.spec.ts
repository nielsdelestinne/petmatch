import {SortByFieldPipe} from './sort-by-field.pipe';
import {SortOrder} from "./sort-order.enum";

describe('SortByFieldPipe', () => {

  let pipe: SortByFieldPipe;

  beforeEach(() => {
    pipe = new SortByFieldPipe();
  })

  it('Field has value of type String, no sort order specified, sorts on provided field alphabetically ASC', () => {
    const arrayToSort = [{name: "ann"}, {name: "charles"}, {name: "bert"}];

    const sortedArray = pipe.transform(arrayToSort, 'name');

    expect(sortedArray).toEqual(
      [{name: "ann"}, {name: "bert"}, {name: "charles"}]
    );
  });

  it('Field has value of type String, DESC sort order specified, sorts on provided field alphabetically DESC', () => {
    const arrayToSort = [{name: "ann"}, {name: "charles"}, {name: "bert"}];

    const sortedArray = pipe.transform(arrayToSort, 'name', SortOrder.DESC);

    expect(sortedArray).toEqual(
      [{name: "charles"}, {name: "bert"}, {name: "ann"}]
    );
  });

  // Etc...

});
