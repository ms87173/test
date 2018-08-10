import { PersonalInfoInterface, PersonalInfoModel } from "./personal-info.interface";

export interface UserInfoInterface {
    personalInfo: PersonalInfoInterface;
    role: string;
    entitlements: Array<any>
}

export class UserInfoModel implements UserInfoInterface {
    role;
    personalInfo;
    entitlements;
    constructor(data) {
        if(!data) {
            return null;
        }
            this.role = data.role;
            this.personalInfo = new PersonalInfoModel(data.personalInfo);
            this.entitlements = data.entitlements;
    }
}