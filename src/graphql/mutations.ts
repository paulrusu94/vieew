/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createViewer = /* GraphQL */ `mutation CreateViewer(
  $input: CreateViewerInput!
  $condition: ModelViewerConditionInput
) {
  createViewer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViewerMutationVariables,
  APITypes.CreateViewerMutation
>;
export const updateViewer = /* GraphQL */ `mutation UpdateViewer(
  $input: UpdateViewerInput!
  $condition: ModelViewerConditionInput
) {
  updateViewer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViewerMutationVariables,
  APITypes.UpdateViewerMutation
>;
export const deleteViewer = /* GraphQL */ `mutation DeleteViewer(
  $input: DeleteViewerInput!
  $condition: ModelViewerConditionInput
) {
  deleteViewer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViewerMutationVariables,
  APITypes.DeleteViewerMutation
>;
export const createBrand = /* GraphQL */ `mutation CreateBrand(
  $input: CreateBrandInput!
  $condition: ModelBrandConditionInput
) {
  createBrand(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBrandMutationVariables,
  APITypes.CreateBrandMutation
>;
export const updateBrand = /* GraphQL */ `mutation UpdateBrand(
  $input: UpdateBrandInput!
  $condition: ModelBrandConditionInput
) {
  updateBrand(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBrandMutationVariables,
  APITypes.UpdateBrandMutation
>;
export const deleteBrand = /* GraphQL */ `mutation DeleteBrand(
  $input: DeleteBrandInput!
  $condition: ModelBrandConditionInput
) {
  deleteBrand(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBrandMutationVariables,
  APITypes.DeleteBrandMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createService = /* GraphQL */ `mutation CreateService(
  $input: CreateServiceInput!
  $condition: ModelServiceConditionInput
) {
  createService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceMutationVariables,
  APITypes.CreateServiceMutation
>;
export const updateService = /* GraphQL */ `mutation UpdateService(
  $input: UpdateServiceInput!
  $condition: ModelServiceConditionInput
) {
  updateService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceMutationVariables,
  APITypes.UpdateServiceMutation
>;
export const deleteService = /* GraphQL */ `mutation DeleteService(
  $input: DeleteServiceInput!
  $condition: ModelServiceConditionInput
) {
  deleteService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceMutationVariables,
  APITypes.DeleteServiceMutation
>;
export const createBrandAdmins = /* GraphQL */ `mutation CreateBrandAdmins(
  $input: CreateBrandAdminsInput!
  $condition: ModelBrandAdminsConditionInput
) {
  createBrandAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBrandAdminsMutationVariables,
  APITypes.CreateBrandAdminsMutation
>;
export const updateBrandAdmins = /* GraphQL */ `mutation UpdateBrandAdmins(
  $input: UpdateBrandAdminsInput!
  $condition: ModelBrandAdminsConditionInput
) {
  updateBrandAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBrandAdminsMutationVariables,
  APITypes.UpdateBrandAdminsMutation
>;
export const deleteBrandAdmins = /* GraphQL */ `mutation DeleteBrandAdmins(
  $input: DeleteBrandAdminsInput!
  $condition: ModelBrandAdminsConditionInput
) {
  deleteBrandAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBrandAdminsMutationVariables,
  APITypes.DeleteBrandAdminsMutation
>;
export const createViewerAdmins = /* GraphQL */ `mutation CreateViewerAdmins(
  $input: CreateViewerAdminsInput!
  $condition: ModelViewerAdminsConditionInput
) {
  createViewerAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViewerAdminsMutationVariables,
  APITypes.CreateViewerAdminsMutation
>;
export const updateViewerAdmins = /* GraphQL */ `mutation UpdateViewerAdmins(
  $input: UpdateViewerAdminsInput!
  $condition: ModelViewerAdminsConditionInput
) {
  updateViewerAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViewerAdminsMutationVariables,
  APITypes.UpdateViewerAdminsMutation
>;
export const deleteViewerAdmins = /* GraphQL */ `mutation DeleteViewerAdmins(
  $input: DeleteViewerAdminsInput!
  $condition: ModelViewerAdminsConditionInput
) {
  deleteViewerAdmins(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViewerAdminsMutationVariables,
  APITypes.DeleteViewerAdminsMutation
>;
