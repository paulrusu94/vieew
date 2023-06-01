export const environment = {
  production: true,
  api: {
    appApi: 'https://staging-app-api.amplicare.com',
    ecareApi: 'https://staging-clinical-doc-api.amplicare.com',
  },
  cognito: {
    authorizePath: 'authorize',
    clientId: '6dbg145uu3g53i3scge8e95aig',
    loginPath: 'login',
    logoutPath: 'logout',
    responseType: 'code',
    redirectUri: 'https://staging-clinical-doc.amplicare.com/awsauth',
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
