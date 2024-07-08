/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    firstName
    lastName
    email
    profilePhoto
    bio
    viewerId
    brands {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewers {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    firstName
    lastName
    email
    profilePhoto
    bio
    viewerId
    brands {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewers {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    firstName
    lastName
    email
    profilePhoto
    bio
    viewerId
    brands {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewers {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateViewer = /* GraphQL */ `subscription OnCreateViewer($filter: ModelSubscriptionViewerFilterInput) {
  onCreateViewer(filter: $filter) {
    id
    name
    description
    ownerId
    owner {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    admins {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateViewerSubscriptionVariables,
  APITypes.OnCreateViewerSubscription
>;
export const onUpdateViewer = /* GraphQL */ `subscription OnUpdateViewer($filter: ModelSubscriptionViewerFilterInput) {
  onUpdateViewer(filter: $filter) {
    id
    name
    description
    ownerId
    owner {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    admins {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateViewerSubscriptionVariables,
  APITypes.OnUpdateViewerSubscription
>;
export const onDeleteViewer = /* GraphQL */ `subscription OnDeleteViewer($filter: ModelSubscriptionViewerFilterInput) {
  onDeleteViewer(filter: $filter) {
    id
    name
    description
    ownerId
    owner {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    admins {
      items {
        id
        userId
        viewerId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteViewerSubscriptionVariables,
  APITypes.OnDeleteViewerSubscription
>;
export const onCreateBrand = /* GraphQL */ `subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
  onCreateBrand(filter: $filter) {
    id
    name
    logo
    description
    ownerId
    admins {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBrandSubscriptionVariables,
  APITypes.OnCreateBrandSubscription
>;
export const onUpdateBrand = /* GraphQL */ `subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
  onUpdateBrand(filter: $filter) {
    id
    name
    logo
    description
    ownerId
    admins {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBrandSubscriptionVariables,
  APITypes.OnUpdateBrandSubscription
>;
export const onDeleteBrand = /* GraphQL */ `subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
  onDeleteBrand(filter: $filter) {
    id
    name
    logo
    description
    ownerId
    admins {
      items {
        id
        userId
        brandId
        user {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    posts {
      items {
        id
        title
        content
        authorId
        author {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        brand {
          id
          name
          logo
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        brandID
        viewerID
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBrandSubscriptionVariables,
  APITypes.OnDeleteBrandSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brandID
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brandID
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brandID
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateService = /* GraphQL */ `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
  onCreateService(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceSubscriptionVariables,
  APITypes.OnCreateServiceSubscription
>;
export const onUpdateService = /* GraphQL */ `subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
  onUpdateService(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceSubscriptionVariables,
  APITypes.OnUpdateServiceSubscription
>;
export const onDeleteService = /* GraphQL */ `subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
  onDeleteService(filter: $filter) {
    id
    title
    content
    authorId
    author {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewerID
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceSubscriptionVariables,
  APITypes.OnDeleteServiceSubscription
>;
export const onCreateBrandAdmins = /* GraphQL */ `subscription OnCreateBrandAdmins(
  $filter: ModelSubscriptionBrandAdminsFilterInput
) {
  onCreateBrandAdmins(filter: $filter) {
    id
    userId
    brandId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBrandAdminsSubscriptionVariables,
  APITypes.OnCreateBrandAdminsSubscription
>;
export const onUpdateBrandAdmins = /* GraphQL */ `subscription OnUpdateBrandAdmins(
  $filter: ModelSubscriptionBrandAdminsFilterInput
) {
  onUpdateBrandAdmins(filter: $filter) {
    id
    userId
    brandId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBrandAdminsSubscriptionVariables,
  APITypes.OnUpdateBrandAdminsSubscription
>;
export const onDeleteBrandAdmins = /* GraphQL */ `subscription OnDeleteBrandAdmins(
  $filter: ModelSubscriptionBrandAdminsFilterInput
) {
  onDeleteBrandAdmins(filter: $filter) {
    id
    userId
    brandId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    brand {
      id
      name
      logo
      description
      ownerId
      admins {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBrandAdminsSubscriptionVariables,
  APITypes.OnDeleteBrandAdminsSubscription
>;
export const onCreateViewerAdmins = /* GraphQL */ `subscription OnCreateViewerAdmins(
  $filter: ModelSubscriptionViewerAdminsFilterInput
) {
  onCreateViewerAdmins(filter: $filter) {
    id
    userId
    viewerId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateViewerAdminsSubscriptionVariables,
  APITypes.OnCreateViewerAdminsSubscription
>;
export const onUpdateViewerAdmins = /* GraphQL */ `subscription OnUpdateViewerAdmins(
  $filter: ModelSubscriptionViewerAdminsFilterInput
) {
  onUpdateViewerAdmins(filter: $filter) {
    id
    userId
    viewerId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateViewerAdminsSubscriptionVariables,
  APITypes.OnUpdateViewerAdminsSubscription
>;
export const onDeleteViewerAdmins = /* GraphQL */ `subscription OnDeleteViewerAdmins(
  $filter: ModelSubscriptionViewerAdminsFilterInput
) {
  onDeleteViewerAdmins(filter: $filter) {
    id
    userId
    viewerId
    user {
      id
      firstName
      lastName
      email
      profilePhoto
      bio
      viewerId
      brands {
        items {
          id
          userId
          brandId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewers {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      viewer {
        id
        name
        description
        ownerId
        owner {
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          createdAt
          updatedAt
          __typename
        }
        admins {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    viewer {
      id
      name
      description
      ownerId
      owner {
        id
        firstName
        lastName
        email
        profilePhoto
        bio
        viewerId
        brands {
          nextToken
          __typename
        }
        viewers {
          nextToken
          __typename
        }
        viewer {
          id
          name
          description
          ownerId
          createdAt
          updatedAt
          __typename
        }
        posts {
          nextToken
          __typename
        }
        services {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      admins {
        items {
          id
          userId
          viewerId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          title
          content
          authorId
          brandID
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      services {
        items {
          id
          title
          content
          authorId
          viewerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteViewerAdminsSubscriptionVariables,
  APITypes.OnDeleteViewerAdminsSubscription
>;
