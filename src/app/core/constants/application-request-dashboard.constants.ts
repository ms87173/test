export const GROUP_TYPE_ICON_CLASS = {
  PRODUCT_INFO: 'fa-sliders',
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
    lineCssClass: 'solid-black-line',
    descriptionCssClass: 'step-description--active'
  },
  COMPLETED: {
    disabled: false,
    statusIconClass: 'fa-check',
    stepCssClass: '',
    lineCssClass: 'solid-black-line',
    descriptionCssClass: 'step-description--active'
  },
  ON_HOLD: {
    disabled: false,
    statusIconClass: '',
    stepCssClass: '',
    lineCssClass: 'solid-grey-line',
    descriptionCssClass: 'step-description--active'
  },
  DISABLED: {
    disabled: true,
    statusIconClass: '',
    stepCssClass: 'step-circle--forbidden',
    lineCssClass: 'dashed-grey-line',
    descriptionCssClass: 'step-description--forbidden'
  }
};
