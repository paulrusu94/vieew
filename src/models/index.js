// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, BaseUser, Admin, Brand, Influencer, Post, AdCampaign, Media } = initSchema(schema);

export {
  Service,
  BaseUser,
  Admin,
  Brand,
  Influencer,
  Post,
  AdCampaign,
  Media
};