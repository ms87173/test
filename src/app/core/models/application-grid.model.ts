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
        const statusMapping = STATUS_MAPPING;
        this.id = data.id;
        const descriptionData = {
            label: data.heading,
            value: data.title,
            badgeText: data.state && data.state[0],
            labelClass: 'grid-label',
            valueClass: 'grid-value',
            badgeClass: 'grid-badge'
        };
        const viewData = {
            description: new LabelValueGroupModel(descriptionData),
            ownerShip: new LabelValueGroupModel({ label: applicationType.get(data.type) }),
            lastUpdate: new LabelValueGroupModel({ label: moment(data.lastUpdate).format('DD MMM YYYY') }),
            lastUpdatedBy: new LabelValueGroupModel({ label: data.lastUpdatedBy }),
            status: new LabelValueGroupModel({ label: data.status.description
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
