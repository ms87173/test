
export default class WorkFlowsSideNavModel {
    label: any;
    subHeading: any;
    id: any;
    description: any;
    status: any;
    children: any;
    type: any;
    constructor(data) {
        if (!data) {
            return null;
        } else {
            this.label = data.label;
            this.subHeading = data.subHeading;
            this.status = data.status;
            this.id = data.id;
            this.type = data.tasks && data.tasks.length === 1 ? data.tasks[0].type : 'null';
            this.description = data.description;
            this.children = data.tasks;
        }
    }
}
