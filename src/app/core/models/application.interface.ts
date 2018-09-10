import { UserInfoInterface, UserInfoModel } from './user-info.interface';
import * as moment from 'moment';

export interface ApplicationInterface {
    id: any;
    heading: string;
    status: {
        code: string,
        description: string
    };
    title: string;
    accountHolders: Array<UserInfoInterface>;
    active: boolean;
    contactPerson: UserInfoInterface;
    ownership: string;
    state: Array<any>;
    lastUpdatedBy: string;
    lastUpdate: any;
    accountTypes: any;
}

export class ApplicationModel implements ApplicationInterface {
    id;
    heading;
    status;
    title;
    accountHolders;
    active;
    contactPerson;
    ownership;
    state;
    lastUpdatedBy;
    lastUpdate;
    accountTypes;
    constructor(data) {
        if (!data) {
            return null;
        }
        this.id = data.id;
        this.heading = data.heading;
        this.status = data.status;
        this.title = data.title;
        this.active = false;
        this.accountTypes = data.products;
        this.contactPerson = new UserInfoModel(data.contactPerson);
        this.ownership = data.accountType;
        this.state = data.state;
        this.lastUpdatedBy = data.lastUpdatedBy;
        this.lastUpdate = moment(data.lastUpdateDate).format('MM-DD-YYYY');
    }
}
