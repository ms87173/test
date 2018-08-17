import { ROLE } from '../constants/applications.constants';

export class ContactDetailsModel {
    iconClass: string;
    role: string;
    emailAddress: string;
    phoneNumber: string;
    name: string;
    constructor(data) {
        if (!data) {
            return null;
        } else {
            const contactPersonsRole = new Map(Object.entries(ROLE));
            this.role = `Contact your ${contactPersonsRole.get(data.role)}`;
            this.name = `${data.firstName} ${data.middleName} ${data.lastName}`;
            this.emailAddress = data.emailAddress;
            this.phoneNumber = this.formatPhoneNumber(data.phoneNumber);
        }
    }
    formatPhoneNumber(number) {
        const formatedNumber = number.replace(/[^\d]+/g, '')
            .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2)$3-$4');
        return formatedNumber;
    }
}
