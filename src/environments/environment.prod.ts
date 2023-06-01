export const environment = {
  production: true,
  api: {
    appApi: 'https://app-api.amplicare.com',
    ecareApi: 'https://clinical-doc-api.amplicare.com',
  },
  cognito: {
    authorizePath: 'authorize',
    clientId: '7qknksk1p5de8ep2l9kctscn42',
    loginPath: 'login',
    logoutPath: 'logout',
    responseType: 'code',
    redirectUri: 'https://app.amplicare.com/awsauth',
    scope: 'profile+openid+email+aws.cognito.signin.user.admin',
    url: 'https://fdsapps.auth.us-east-1.amazoncognito.com',
  },
  deployUrl: 'clinicaldocumentation',
  enableAnalytics: true,
  segmentConfig: {
    apiKey: 'ziQccqHcxxgcM9ZtepGax2JYG3rVtb6h',
    debug: false,
    loadOnInitialization: true,
  },
  engageMedsyncUrl: 'https://engage.fdsrx.com',
};
