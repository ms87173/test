import WorkFlowsSideNavModel from './workflow-sidenav.model';

export default class WorkflowGroupsModel {
    workflowGroupName: any;
    workflowGroupType: any;
    workflowGroupOrder: any;
    workflows: WorkFlowsSideNavModel;
    constructor(data) {
        if (!data) {
            return null;
        }
        this.workflowGroupName = data.name;
        this.workflowGroupType = data.type;
        this.workflowGroupOrder = data.order;
        this.workflows = data.workflows.map((workflow) => new WorkFlowsSideNavModel(workflow));
    }
}
