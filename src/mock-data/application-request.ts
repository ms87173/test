export const APPLICATIONREQUEST = {
    'application' : {
        'id': '12345',
        'title': 'Application for 2 Joint accounts',
        'accountHolders': [
            {
                'firstName' : 'John',
                'lastName' : 'Robbins',
                'middleName' : '',
                'email' : 'johnrobbins@gmail.com',
                'role': ['primary']
            },
            {
                'firstName' : 'Jane',
                'lastName' : 'Robbins',
                'middleName' : '',
                'email' : 'janerobbins@gmail.com',
                'role' : ['co-applicant']
            },
            {
                'firstName' : 'Susan',
                'lastName' : 'Sandron',
                'middleName' : '',
                'email' : 'susansandron@gmail.com',
                'role' : ['co-applicant']
            }
        ],
        'type' : 'joint',
        'status' : {
            'code' : 'submitted',
            'description' : 'Waiting for John Robbins'
        },
        'lastUpdatedBy' : '',
        'lastUpdate' : '',
        'products': [
            {
                'id' : 'interestCheckingAccount',
                'label' : 'Interest Checking Account'
            },
            {
                'id' : 'savingsAccount',
                'label' : 'Savings Account'
            }

        ],
        'workFlowStatus': [
           {
            'status' : 'completed',
            'label' : 'John Robbins',
            'type' : 'applicant'
           },
            {
                'status' : 'pending',
                'label' : 'Jane Robbins',
                'type' : 'applicant'
            },
            {
                'status' : 'not started',
                'label' : 'Susan Sandron',
                'type' : 'applicant'
            },
            {
                'status' : 'completed',
                'label' : 'Banker',
                'type' : 'banker'
            }
        ]
    },
    };
