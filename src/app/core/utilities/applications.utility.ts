import * as _ from 'lodash';
import * as moment from 'moment';
import { of } from 'rxjs';

export function sortApplications(data, params) {
  let formatedData;
  let { key } = params;
  if (params.key === 'status') {
    key = 'status.description';
  }
  formatedData = _.orderBy(data, [key], [params.sortOrder]);
  params.sortOrder = params.sortOrder === 'asc' ? 'desc' : 'asc';
  //TODO refactor this completely via actions or this container being store.
  return of(formatedData);
}

export function filterApplications(data, params) {
  let filteredData;
  if (params.key === 'status') {
    filteredData = _.filter(data, (e) => e.status.code.toLowerCase() === params.value);
  }
  if (params.key === 'modified') {
    if (params.value === 'lastWeek') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'week').isSameOrBefore(moment(e.lastUpdate)));
    } else if (params.value === 'lastMonth') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'month').isSameOrBefore(moment(e.lastUpdate)));
    } else if (params.value === 'lastQuarter') {
      filteredData = _.filter(data, (e) => moment().add(-3 , 'month').isSameOrBefore(moment(e.lastUpdate)));
    } else if (params.value === 'customDate') {
      filteredData = _.filter(data, (e) => moment(params.filterDate).isSame(moment(e.lastUpdate)));
    }
  }
  return of(filteredData);
}