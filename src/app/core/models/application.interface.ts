import { UserInfoInterface, UserInfoModel } from "./user-info.interface";

export interface ApplicationInterface {
    id: any;
    heading: string;
    status: {
        code: string,
        description: string
    },
    title: string,
    accountHolders: Array<UserInfoInterface>,
    active: boolean;
    contactPerson: UserInfoInterface,
    type: string;
    state: Array<any>;
    lastUpdatedBy: string;
    lastUpdate: any;
}

export class ApplicationModel implements ApplicationInterface {
    id;
    heading;
    status;
    title;
    accountHolders;
    active;
    contactPerson;
    type;
    state;
    lastUpdatedBy;
    lastUpdate;
    constructor(data) {
        if (!data) {
            return null;
        }
        this.id = data.id;
        this.heading = data.heading;
        this.status = data.status;
        this.title = data.title;
        this.active = false;
        this.accountHolders = data.accountHolders.map(e => {
            new UserInfoModel(e)
        })
        this.contactPerson = new UserInfoModel(data.contactPerson);
        this.type = data.type;
        this.state = data.state;
        this.lastUpdatedBy = data.lastUpdatedBy;
        this.lastUpdate = data.lastUpdateDate;
    }
}
