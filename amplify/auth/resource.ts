import { defineAuth } from '@aws-amplify/backend';
import { customMessage } from './custom-message/resource'

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  name: "vieewauthservice",
  loginWith: {
    email: {
      verificationEmailStyle: 'LINK',
      verificationEmailSubject: "Welcome to vieeww!",
      verificationEmailBody: (createLink) => `Use this code to confirm your account: ${createLink()}`,
      userInvitation: {
        
      }
    },
    phone: true
  },
  accountRecovery: 'PHONE_AND_EMAIL',
  triggers: {
    customMessage: customMessage
  }
});
