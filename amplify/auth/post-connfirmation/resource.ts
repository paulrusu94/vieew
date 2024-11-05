import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  environment: {
    USER_TABLE: process.env.USER_TABLE! || "User-z7uwsrl7tbcybo5qfzqtpeivhq-NONE"
  }
});