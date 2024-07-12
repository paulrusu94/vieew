import { defineAuth } from '@aws-amplify/backend';
import { customMessage } from './custom-message/resource'

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  name: "vieewauthservice",
  loginWith: {
    email: true
  },
  accountRecovery: 'EMAIL_ONLY',
  triggers: {
    customMessage: customMessage
  }
});
