import LabelValueGroupModel from './label-value-group.model';
import { STATUS_MAPPING, APPLICATION_TYPE } from '../constants/applications.constants';
import * as moment from 'moment';
export class ApplicationGridModel {
    columns: any;
    id: any;
    constructor(data) {
        if (!data) {
            return null;
        }
        this.id = data.id;
        const lastModifiedBy = {
            label: moment(data.lastUpdate).format('DD MMM YYYY'),
            value: `By ${data.lastUpdatedBy}`,
            labelClass: 'grid-label',
            valueClass: 'grid-value'
        };
        const viewData = {
            description: new LabelValueGroupModel({ label: data.title }),
            ownership: new LabelValueGroupModel({ label: data.ownership }),
            accountTypes: data.accountTypes,
            lastUpdate: new LabelValueGroupModel(lastModifiedBy),
            status: new LabelValueGroupModel({
                label: data.status.description
            })
        };
        this.columns = Object.entries(viewData).map((e) => {
            const obj = {};
            obj[`${e[0]}`] = e[1];
            return obj;
        });
    }
}
