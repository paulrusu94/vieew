// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
    redirectUri: 'http://localhost:4200/awsauth',
    scope: 'profile+openid+email+aws.cognito.signin.user.admin',
    url: 'https://amplicare.auth.us-east-1.amazoncognito.com',
  },
  deployUrl: 'http://localhost:4200',
  enableAnalytics: false,
  segmentConfig: {
    loadOnInitialization: false,
  },
  engageMedsyncUrl: 'https://devengage.fdsrx.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
