export interface PersonalInfoInterface {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    contactNumber: string;
}

export class PersonalInfoModel implements PersonalInfoInterface {
    firstName;
    lastName;
    middleName;
    email;
    contactNumber;
    constructor(data) {
       if(!data) {
           return null;
       }
       this.firstName = data.firstName;
       this.lastName = data.lastName;
       this.middleName = data.middleName;
       this.email = data.email;
       this.contactNumber = data.contactNumber;
    }
}