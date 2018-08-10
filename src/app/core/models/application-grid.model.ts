import LabelValueGroupModel from './label-value-group.model';
export class ApplicationGridModel {
    columns: any;
    id: any;
    constructor(data) {
        if (!data) {
            return null;
        }
        const statusMapping = {
            inProgress: {
                label: 'Action Required',
                iconClass: 'fa-exclamation-circle warning status-icon',
                labelClass: 'status-label status-label-icon',
                valueClass: 'status-value status-value-icon'
            },
            cancelledByUser: {
                label: 'Cancelled',
                iconClass: 'fa-circle-o status-icon',
                labelClass: 'status-label status-label-icon',
                valueClass: 'status-value status-value-icon'
            },
            submitted: {
                label: 'Submitted',
                iconClass: 'fa-check success status-icon',
                labelClass: 'status-label status-label-icon',
                valueClass: 'status-value status-value-icon'
            },
            completed: {
                label: 'Done',
                iconClass: 'fa-circle-o status-icon',
                labelClass: 'status-label status-label-icon',
                valueClass: 'status-value status-value-icon'
            },
            cancelledByBanker: {
                label: 'Cancelled',
                iconClass: 'fa-circle-o status-icon',
                labelClass: 'status-label status-label-icon',
                valueClass: 'status-value status-value-icon'
            }
        }
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
            ownerShip: new LabelValueGroupModel({ label: data.type }),
            lastUpdate: new LabelValueGroupModel({ label: data.lastUpdate }),
            lastUpdatedBy: new LabelValueGroupModel({ label: data.lastUpdatedBy }),
            status: new LabelValueGroupModel({
                ...statusMapping[`${data.status.code}`],
                value: data.status.reason
            })
        };
        this.columns = Object.entries(viewData).map((e) => {
            const obj = {};
            obj[`${e[0]}`] = e[1];
            return obj;
        });
    }
}