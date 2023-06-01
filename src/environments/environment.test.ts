export const environment = {
  production: true,
  api: {
    appApi: 'https://app-api.test.amplicare.com',
    ecareApi: 'https://clinical-doc-api.test.amplicare.com',
  },
  cognito: {
    authorizePath: 'authorize',
    clientId: '6dbg145uu3g53i3scge8e95aig',
    loginPath: 'login',
    logoutPath: 'logout',
    responseType: 'code',
    redirectUri: 'https://clinical-doc.test.amplicare.com/awsauth',
    scope: 'profile+openid+email+aws.cognito.signin.user.admin',
    url: 'https://amplicare.auth.us-east-1.amazoncognito.com',
  },
  deployUrl: 'clinicaldocumentation',
  enableAnalytics: false,
  segmentConfig: {
    loadOnInitialization: false,
  },
  engageMedsyncUrl: 'https://devengage.fdsrx.com',
};
