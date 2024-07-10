/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getViewer = /* GraphQL */ `query GetViewer($id: ID!) {
  getViewer(id: $id) {
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
` as GeneratedQuery<APITypes.GetViewerQueryVariables, APITypes.GetViewerQuery>;
export const listViewers = /* GraphQL */ `query ListViewers(
  $filter: ModelViewerFilterInput
  $limit: Int
  $nextToken: String
) {
  listViewers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViewersQueryVariables,
  APITypes.ListViewersQuery
>;
export const getBrand = /* GraphQL */ `query GetBrand($id: ID!) {
  getBrand(id: $id) {
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
` as GeneratedQuery<APITypes.GetBrandQueryVariables, APITypes.GetBrandQuery>;
export const listBrands = /* GraphQL */ `query ListBrands(
  $filter: ModelBrandFilterInput
  $limit: Int
  $nextToken: String
) {
  listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBrandsQueryVariables,
  APITypes.ListBrandsQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getService = /* GraphQL */ `query GetService($id: ID!) {
  getService(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServiceQueryVariables,
  APITypes.GetServiceQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const getBrandAdmins = /* GraphQL */ `query GetBrandAdmins($id: ID!) {
  getBrandAdmins(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBrandAdminsQueryVariables,
  APITypes.GetBrandAdminsQuery
>;
export const listBrandAdmins = /* GraphQL */ `query ListBrandAdmins(
  $filter: ModelBrandAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBrandAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBrandAdminsQueryVariables,
  APITypes.ListBrandAdminsQuery
>;
export const getViewerAdmins = /* GraphQL */ `query GetViewerAdmins($id: ID!) {
  getViewerAdmins(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetViewerAdminsQueryVariables,
  APITypes.GetViewerAdminsQuery
>;
export const listViewerAdmins = /* GraphQL */ `query ListViewerAdmins(
  $filter: ModelViewerAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  listViewerAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViewerAdminsQueryVariables,
  APITypes.ListViewerAdminsQuery
>;
export const usersByViewerId = /* GraphQL */ `query UsersByViewerId(
  $viewerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByViewerId(
    viewerId: $viewerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByViewerIdQueryVariables,
  APITypes.UsersByViewerIdQuery
>;
export const viewersByOwnerId = /* GraphQL */ `query ViewersByOwnerId(
  $ownerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViewerFilterInput
  $limit: Int
  $nextToken: String
) {
  viewersByOwnerId(
    ownerId: $ownerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewersByOwnerIdQueryVariables,
  APITypes.ViewersByOwnerIdQuery
>;
export const brandsByOwnerId = /* GraphQL */ `query BrandsByOwnerId(
  $ownerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBrandFilterInput
  $limit: Int
  $nextToken: String
) {
  brandsByOwnerId(
    ownerId: $ownerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BrandsByOwnerIdQueryVariables,
  APITypes.BrandsByOwnerIdQuery
>;
export const postsByAuthorId = /* GraphQL */ `query PostsByAuthorId(
  $authorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByAuthorId(
    authorId: $authorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByAuthorIdQueryVariables,
  APITypes.PostsByAuthorIdQuery
>;
export const postsByBrandID = /* GraphQL */ `query PostsByBrandID(
  $brandID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBrandID(
    brandID: $brandID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBrandIDQueryVariables,
  APITypes.PostsByBrandIDQuery
>;
export const postsByViewerID = /* GraphQL */ `query PostsByViewerID(
  $viewerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByViewerID(
    viewerID: $viewerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByViewerIDQueryVariables,
  APITypes.PostsByViewerIDQuery
>;
export const servicesByAuthorId = /* GraphQL */ `query ServicesByAuthorId(
  $authorId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByAuthorId(
    authorId: $authorId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServicesByAuthorIdQueryVariables,
  APITypes.ServicesByAuthorIdQuery
>;
export const servicesByViewerID = /* GraphQL */ `query ServicesByViewerID(
  $viewerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByViewerID(
    viewerID: $viewerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServicesByViewerIDQueryVariables,
  APITypes.ServicesByViewerIDQuery
>;
export const brandAdminsByUserId = /* GraphQL */ `query BrandAdminsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBrandAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  brandAdminsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BrandAdminsByUserIdQueryVariables,
  APITypes.BrandAdminsByUserIdQuery
>;
export const brandAdminsByBrandId = /* GraphQL */ `query BrandAdminsByBrandId(
  $brandId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBrandAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  brandAdminsByBrandId(
    brandId: $brandId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      brand {
        id
        name
        logo
        description
        ownerId
        admins {
          nextToken
          __typename
        }
        posts {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BrandAdminsByBrandIdQueryVariables,
  APITypes.BrandAdminsByBrandIdQuery
>;
export const viewerAdminsByUserId = /* GraphQL */ `query ViewerAdminsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViewerAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  viewerAdminsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewerAdminsByUserIdQueryVariables,
  APITypes.ViewerAdminsByUserIdQuery
>;
export const viewerAdminsByViewerId = /* GraphQL */ `query ViewerAdminsByViewerId(
  $viewerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelViewerAdminsFilterInput
  $limit: Int
  $nextToken: String
) {
  viewerAdminsByViewerId(
    viewerId: $viewerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewerAdminsByViewerIdQueryVariables,
  APITypes.ViewerAdminsByViewerIdQuery
>;
