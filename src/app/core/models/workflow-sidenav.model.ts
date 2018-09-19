
export default class WorkFlowsSideNavModel {
    label: any;
    subHeading: any;
    id: any;
    description: any;
    status: any;
    children: any;
    type: any;
    singleTaskPresent: boolean;
    singleTask: any;
    constructor(data) {
        if (!data) {
            return null;
        }
        this.label = data.label;
        this.subHeading = data.subHeading;
        this.status = data.status;
        this.id = data.id;
        this.type = data.tasks && data.tasks.length === 1 ? data.tasks[0].type : 'null';
        this.description = data.description;
        this.singleTaskPresent = data.tasks && (data.tasks.length === 1);
        this.children = data.tasks;
        if (this.singleTaskPresent) {
            this.singleTask = data.tasks[0];
            this.label = this.singleTask.label;
            this.subHeading = this.singleTask.subHeading;
        }
    }
}
