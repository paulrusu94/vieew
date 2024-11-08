import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  EntityTypes: a
    .enum([
      "SERVICES", 
      "ADS", 
      "AGENCY"
    ]),
    PostTypes: a
    .enum([
      "TEXT", 
      "MEDIA_PHOTO", 
      "MEDIA",
    ]),
    PostStatus: a
    .enum([
      "IN_DRAFT", 
      "IN_REVIEW", 
      "IN_ARCHIVE",
      "IN_FEED"
    ]),
    MediaContentTypes: a
    .enum([
      "image_png", 
      "image_jpg", 
      "video_mp4"
    ]),
  User: a
    .model({
      userId: a.id().required(),
      sub: a.string().required(),
      email: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      entities: a.hasMany("Entity", "ownerId"),
      posts: a.hasMany("Post", "authorId"),
      medias: a.hasMany("Media", "ownerId")
    })
    .identifier(["userId"])
    .secondaryIndexes(index => [
      index("email"),
      index("sub").queryField("getUserBySub"),
    ])
    .authorization((allow) => [allow.guest(), allow.authenticated()]),
  Post: a
    .model({
      type: a.string().default("Post"),
      status: a.ref("PostStatus").required(),
      postType: a.ref("PostTypes").required(),
      postId: a.id().required(),
      content: a.string(),
      title: a.string(),
      authorId: a.id().required(),
      author: a.belongsTo("User", "authorId"),
      ownerEntityId: a.id().required(),
      ownerEntity: a.belongsTo("Entity", "ownerEntityId"),
      createdAt: a.datetime(),
      medias: a.hasMany("Media", "postId")
    })
    .identifier(["postId"])
    .secondaryIndexes(index => [
      index("ownerEntityId"),
      index("authorId"),
      index("type").sortKeys(["createdAt"]).queryField("postsByDate"),
    ])
    .authorization((allow) =>[allow.guest()]),
  Entity: a
    .model({
      entityId: a.id().required(),
      type: a.ref("EntityTypes").required(),
      name: a.string().required(),
      posts: a.hasMany("Post", "ownerEntityId"), // user id/sub that created the post
      ownerId: a.id().required(),
      owner: a.belongsTo("User", "ownerId")
    })
    .identifier(["entityId"])
    .secondaryIndexes(index => [
      index("ownerId")
    ])
    .authorization((allow) =>[allow.guest()]),
  Media: a.model({
      type: a.string().default("Media"),
      mediaId: a.id().required(),
      fileName: a.string().required(),
      contentType: a.ref("MediaContentTypes"),
      path: a.string(),
      createdAt: a.datetime(),
      ownerId: a.id().required(),
      owner: a.belongsTo("User", "ownerId"),
      postId: a.id(),
      post: a.belongsTo("Post", "postId")

    })
    .identifier(["mediaId"])
    .secondaryIndexes(index => [
      index("type").sortKeys(["createdAt"]).queryField("listMediaByDate"),
      index("ownerId").sortKeys(["createdAt"]).queryField("listMediaByOwner"),
      index("postId").sortKeys(["createdAt"]).queryField("listMediaByPost")
    ])
    .authorization((allow) =>[allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool"
  },
});
