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
};

export const APPLICATIONS_STATUS = {
    cancelled: 'CANCELED',
    onHold: 'ON_HOLD',
    inProgress: 'IN_PROGRESS'
};

export const APPLICATION_GRID_HEADING = [
    {
        key: 'title',
        value: 'DESCRIPTION',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'ownership',
        value: 'OWNERSHIP',
        showSortOption: false
    },
    {
        key: 'accountType',
        value: 'ACCOUNT TYPE',
        showSortOption: false
    },
    {
        key: 'lastUpdate',
        value: 'MODIFIED',
        showSortOption: true,
        sortOrder: 'asc'
    },
    {
        key: 'status',
        value: 'STATUS',
        showSortOption: true,
        sortOrder: 'desc'
    },
    {
        key: 'actions',
        value: 'ACTIONS',
        showSortOption: false
    },
];

export const ACTION_TYPES = {
    rowClicked: 'rowClicked',
    sort: 'sort',
    continueNow: 'continueNow',
    filter: 'filter'
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

export const FILTER_CRITERIA = {
    modified: [
        {
            label: 'All',
            value: 'all'
        },
        {
            label: 'Last Week',
            value: 'lastWeek'
        },
        {
            label: 'Last Month',
            value: 'lastMonth'
        },
        {
            label: 'Last Quarter',
            value: 'lastQuarter'
        },
        {
            label: 'Custom Date',
            value: 'customDate'
        }
    ],
    status: [
        {
            label: 'All',
            value: 'all'
        },
        {
            label: 'Action Required',
            value: 'actionRequired'
        },
        {
            label: 'Waiting For Others',
            value: 'waiting'
        },
        {
            label: 'Submitted To Banker',
            value: 'submitted'
        },
        {
            label: 'Completed',
            value: 'completed'
        },
        {
            label: 'Cancelled',
            value: 'canceled'
        }
    ]
};
