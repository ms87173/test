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
        const applicationType = new Map(Object.entries(APPLICATION_TYPE));
        this.id = data.id;
        const lastModifiedBy = {
            label: moment(data.lastUpdate).format('DD MMM YYYY'),
            value: `By ${data.lastUpdatedBy}`,
            labelClass: 'grid-label',
            valueClass: 'grid-value'
        };
        const viewData = {
            description: new LabelValueGroupModel({ label: data.title }),
            ownerShip: new LabelValueGroupModel({ label: applicationType.get(data.type) }),
            lastUpdate: new LabelValueGroupModel(lastModifiedBy),
            status: new LabelValueGroupModel({
                label: data.status.description
                // ...statusMapping[`${data.status.code}`],
                // value: data.status.reason
            })
        };
        this.columns = Object.entries(viewData).map((e) => {
            const obj = {};
            obj[`${e[0]}`] = e[1];
            return obj;
        });
    }
}
