import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(data: any, orderBy: any): any {
    return _.orderBy(data, [orderBy]);
  }
}
