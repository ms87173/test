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
  let filteredData = [];
  // TODO: NEED TO REFACTOR THIS. WILL DO THIS IS A WHILE ONCE FUNCTIONALITY IS VERIFIED
  if (params.statusFilter.value === 'all' && params.modifiedFilter.value === 'all') {
    filteredData = data;
  } else if (params.modifiedFilter.value === 'all' && params.statusFilter.value != 'all') {
    filteredData = _.filter(data, (e) => e.status.code.toLowerCase() === params.statusFilter.value);
  } else if (params.modifiedFilter.value != 'all' && params.statusFilter.value != 'all') {
    if (params.modifiedFilter.value === 'lastWeek') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'week').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY'))
        && e.status.code.toLowerCase() === params.statusFilter.value);
    } else if (params.modifiedFilter.value === 'lastMonth') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'month').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY'))
        && e.status.code.toLowerCase() === params.statusFilter.value);
    } else if (params.modifiedFilter.value === 'lastQuarter') {
      filteredData = _.filter(data, (e) => moment().add(-3, 'month').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY'))
        && e.status.code.toLowerCase() === params.statusFilter.value);
    } else if (params.modifiedFilter.value === 'customDate') {
      filteredData = _.filter(data, (e) => moment(params.modifiedFilter.filterDate).isSame(moment(e.lastUpdate).format('MM DD YYYY'))
        && e.status.code.toLowerCase() === params.statusFilter.value);
    }
  } else if (params.modifiedFilter.value != 'all' && params.statusFilter.value === 'all') {
    if (params.modifiedFilter.value === 'lastWeek') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'week').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY')));
    } else if (params.modifiedFilter.value === 'lastMonth') {
      filteredData = _.filter(data, (e) => moment().add(-1, 'month').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY')));
    } else if (params.modifiedFilter.value === 'lastQuarter') {
      filteredData = _.filter(data, (e) => moment().add(-3, 'month').isSameOrBefore(moment(e.lastUpdate).format('MM DD YYYY')));
    } else if (params.modifiedFilter.value === 'customDate') {
      filteredData = _.filter(data, (e) => moment(params.modifiedFilter.filterDate).isSame(moment(e.lastUpdate).format('MM DD YYYY')));
    }
  }
  return sortApplications(filteredData, { key: 'lastUpdate', sortOrder: 'desc' });
}
