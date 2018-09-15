export const GROUP_TYPE_ICON_CLASS = {
  PRODUCTS_INFO: 'fa-sliders',
  APPLICANTS_INFO: 'fa-pencil',
  REVIEW_SUBMIT: 'fa-file-text-o',
  CLIENTS: 'fa-user',
  BANKER: 'fa-users'
};
export const STATUS_STEPPER_MAPPING = {
  IN_PROGRESS: {
    disabled: false,
    statusIconClass: '',
    stepCssClass: 'step-circle--active',
    lineCssClass: 'solid-black-line'
  },
  COMPLETED: {
    disabled: false,
    statusIconClass: 'fa-check',
    stepCssClass: 'step-circle--active',
    lineCssClass: 'solid-black-line'
  },
  ON_HOLD: {
    disabled: false,
    statusIconClass: '',
    stepCssClass: '',
    lineCssClass: 'solid-grey-line'
  },
  DISABLED: {
    disabled: true,
    statusIconClass: '',
    stepCssClass: '',
    lineCssClass: 'dashed-grey-line'
  }
};
