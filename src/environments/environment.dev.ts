export const environment = {
  production: false,
  apiBaseUrl: 'http://mktdevvm773134.nam.nsroot.net:9090/api/ddo/',
  apiUrls: {
    fetchContactPerson: 'application/contact',
    fetchAllApplications: 'request/all',
    fetchApplication: 'request/details',
    fetchWorkflowsAndTasks: 'request/workflowsAndTasks',
    fetchTaskQuestionnaire: 'questionnaire/taskQuestions',
    fetchTaskQuestionnaireDelts: 'questionnaire/tasks/question',
    saveTaskQuestionnaire: 'questionnaire/saveTaskQuestions',
    discardQuestionsChanges : 'questionnaire/discardQuestionsChanges',
    fetchDynamicOptions: 'questionnaire/dynamicLookup/',
    fetchReviewInformationTask: 'questionnaire/reviewTask',
    cancelApplicationRequest: '<cancel-url-is-missing>'
  }
};
