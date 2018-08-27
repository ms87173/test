export const APPLICATION_DROPDOWN_OPTIONS = [
    {
        key: 'completeNow',
        value: 'Complete Now'
    }
];

export const SORT_ORDER = {
    default: 'default',
    ascending: 'asc',
    descending: 'desc'
}

export const APPLICATION_GRID_HEADING = [
    {
        key: 'description',
        value: 'DESCRIPTION',
        showSortOption: false
    },
    {
        key: 'type',
        value: 'TYPE',
        showSortOption: false
    },
    {
        key: 'lastUpdate',
        value: 'LAST UPDATE',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'lastUpdatedBy',
        value: 'LAST UPDATED BY',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'status',
        value: 'STATUS',
        showSortOption: true,
        sortOrder: 'desc'
    }
];

export const ACTION_TYPES = {
    rowClicked: 'rowClicked',
    sort: 'sort',
    completeNow: 'completeNow'
};

export const STATUS_MAPPING = {
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
};

export const APPLICATION_TYPE = {
    joint: 'Joint',
    individual: 'Individual',
    custodial: 'Custodial',
    trust: 'Trust'
};

export const ROLE = {
    assistantBanker: 'Assistant Banker'
};