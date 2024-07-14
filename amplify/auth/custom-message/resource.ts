import { defineFunction } from '@aws-amplify/backend';

export const customMessage = defineFunction({
  name: "custom-message",
  environment: {
    REDIRECTURL: 'http://localhost:4200/confirmation'
  }
});