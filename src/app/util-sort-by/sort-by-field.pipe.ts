import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder} from "./sort-order.enum";

@Pipe({
  name: 'sortByField'
})
export class SortByFieldPipe implements PipeTransform {

  transform(arrayToSort: any[], field: string, sortOrder = SortOrder.ASC): any[] {
    if (!Array.isArray(arrayToSort)) {
      return [];
    }

    arrayToSort.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

    return sortOrder === SortOrder.ASC ? arrayToSort : arrayToSort.reverse();
  }

}
