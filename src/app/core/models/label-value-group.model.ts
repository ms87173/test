export default class LabelValueGroupModel {
    containerClass: string;
    labelContainerClass: string;
    iconClass: string;
    badgeClass: string;
    badgeTitle: string;
    label: string;
    value: any;
    labelClass: string;
    valueClass: string;
    constructor(data) {
        this.containerClass = data.containerClass;
        this.labelContainerClass = data.labelContainerClass;
        this.iconClass = data.iconClass;
        this.badgeClass = data.badgeClass;
        this.badgeTitle = data.badgeTitle;
        this.label = data.label;
        this.value = data.value;
        this.labelClass = data.labelClass;
        this.valueClass = data.valueClass;
    }
}
