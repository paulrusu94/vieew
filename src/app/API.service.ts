/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateViewer: OnCreateViewerSubscription;
  onUpdateViewer: OnUpdateViewerSubscription;
  onDeleteViewer: OnDeleteViewerSubscription;
  onCreateBrand: OnCreateBrandSubscription;
  onUpdateBrand: OnUpdateBrandSubscription;
  onDeleteBrand: OnDeleteBrandSubscription;
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateService: OnCreateServiceSubscription;
  onUpdateService: OnUpdateServiceSubscription;
  onDeleteService: OnDeleteServiceSubscription;
  onCreateBrandAdmins: OnCreateBrandAdminsSubscription;
  onUpdateBrandAdmins: OnUpdateBrandAdminsSubscription;
  onDeleteBrandAdmins: OnDeleteBrandAdminsSubscription;
  onCreateViewerAdmins: OnCreateViewerAdminsSubscription;
  onUpdateViewerAdmins: OnUpdateViewerAdminsSubscription;
  onDeleteViewerAdmins: OnDeleteViewerAdminsSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePhoto?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  viewerId?: ModelIDInput | null;
  updatedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: ModelBrandAdminsConnection | null;
  viewers?: ModelViewerAdminsConnection | null;
  viewer?: Viewer | null;
  posts?: ModelPostConnection | null;
  services?: ModelServiceConnection | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type ModelBrandAdminsConnection = {
  __typename: "ModelBrandAdminsConnection";
  items: Array<BrandAdmins | null>;
  nextToken?: string | null;
};

export type BrandAdmins = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: User;
  brand: Brand;
  createdAt: string;
  updatedAt: string;
};

export type Brand = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: ModelBrandAdminsConnection | null;
  posts?: ModelPostConnection | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User | null;
  brand?: Brand | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: Viewer | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type Viewer = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: User | null;
  admins?: ModelViewerAdminsConnection | null;
  posts?: ModelPostConnection | null;
  services?: ModelServiceConnection | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelViewerAdminsConnection = {
  __typename: "ModelViewerAdminsConnection";
  items: Array<ViewerAdmins | null>;
  nextToken?: string | null;
};

export type ViewerAdmins = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: User;
  viewer: Viewer;
  createdAt: string;
  updatedAt: string;
};

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection";
  items: Array<Service | null>;
  nextToken?: string | null;
};

export type Service = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User | null;
  viewerID?: string | null;
  viewer?: Viewer | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateViewerInput = {
  id?: string | null;
  name: string;
  description: string;
  ownerId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelViewerConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelViewerConditionInput | null> | null;
  or?: Array<ModelViewerConditionInput | null> | null;
  not?: ModelViewerConditionInput | null;
};

export type UpdateViewerInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  ownerId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteViewerInput = {
  id: string;
};

export type CreateBrandInput = {
  id?: string | null;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelBrandConditionInput = {
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBrandConditionInput | null> | null;
  or?: Array<ModelBrandConditionInput | null> | null;
  not?: ModelBrandConditionInput | null;
};

export type UpdateBrandInput = {
  id: string;
  name?: string | null;
  logo?: string | null;
  description?: string | null;
  ownerId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteBrandInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  authorId: string;
  brandID?: string | null;
  viewerID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  authorId?: ModelIDInput | null;
  brandID?: ModelIDInput | null;
  viewerID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  authorId?: string | null;
  brandID?: string | null;
  viewerID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateServiceInput = {
  id?: string | null;
  title: string;
  content: string;
  authorId: string;
  viewerID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelServiceConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  authorId?: ModelIDInput | null;
  viewerID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelServiceConditionInput | null> | null;
  or?: Array<ModelServiceConditionInput | null> | null;
  not?: ModelServiceConditionInput | null;
};

export type UpdateServiceInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  authorId?: string | null;
  viewerID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteServiceInput = {
  id: string;
};

export type CreateBrandAdminsInput = {
  id?: string | null;
  userId: string;
  brandId: string;
};

export type ModelBrandAdminsConditionInput = {
  userId?: ModelIDInput | null;
  brandId?: ModelIDInput | null;
  and?: Array<ModelBrandAdminsConditionInput | null> | null;
  or?: Array<ModelBrandAdminsConditionInput | null> | null;
  not?: ModelBrandAdminsConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateBrandAdminsInput = {
  id: string;
  userId?: string | null;
  brandId?: string | null;
};

export type DeleteBrandAdminsInput = {
  id: string;
};

export type CreateViewerAdminsInput = {
  id?: string | null;
  userId: string;
  viewerId: string;
};

export type ModelViewerAdminsConditionInput = {
  userId?: ModelIDInput | null;
  viewerId?: ModelIDInput | null;
  and?: Array<ModelViewerAdminsConditionInput | null> | null;
  or?: Array<ModelViewerAdminsConditionInput | null> | null;
  not?: ModelViewerAdminsConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateViewerAdminsInput = {
  id: string;
  userId?: string | null;
  viewerId?: string | null;
};

export type DeleteViewerAdminsInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePhoto?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  viewerId?: ModelIDInput | null;
  updatedAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelViewerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelViewerFilterInput | null> | null;
  or?: Array<ModelViewerFilterInput | null> | null;
  not?: ModelViewerFilterInput | null;
};

export type ModelViewerConnection = {
  __typename: "ModelViewerConnection";
  items: Array<Viewer | null>;
  nextToken?: string | null;
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  description?: ModelStringInput | null;
  ownerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBrandFilterInput | null> | null;
  or?: Array<ModelBrandFilterInput | null> | null;
  not?: ModelBrandFilterInput | null;
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection";
  items: Array<Brand | null>;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  authorId?: ModelIDInput | null;
  brandID?: ModelIDInput | null;
  viewerID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  authorId?: ModelIDInput | null;
  viewerID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelServiceFilterInput | null> | null;
  or?: Array<ModelServiceFilterInput | null> | null;
  not?: ModelServiceFilterInput | null;
};

export type ModelBrandAdminsFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  brandId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBrandAdminsFilterInput | null> | null;
  or?: Array<ModelBrandAdminsFilterInput | null> | null;
  not?: ModelBrandAdminsFilterInput | null;
};

export type ModelViewerAdminsFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  viewerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelViewerAdminsFilterInput | null> | null;
  or?: Array<ModelViewerAdminsFilterInput | null> | null;
  not?: ModelViewerAdminsFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  profilePhoto?: ModelSubscriptionStringInput | null;
  bio?: ModelSubscriptionStringInput | null;
  viewerId?: ModelSubscriptionIDInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionViewerFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  ownerId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionViewerFilterInput | null> | null;
  or?: Array<ModelSubscriptionViewerFilterInput | null> | null;
};

export type ModelSubscriptionBrandFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  logo?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  ownerId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBrandFilterInput | null> | null;
  or?: Array<ModelSubscriptionBrandFilterInput | null> | null;
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  authorId?: ModelSubscriptionIDInput | null;
  brandID?: ModelSubscriptionIDInput | null;
  viewerID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPostFilterInput | null> | null;
  or?: Array<ModelSubscriptionPostFilterInput | null> | null;
};

export type ModelSubscriptionServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  authorId?: ModelSubscriptionIDInput | null;
  viewerID?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionServiceFilterInput | null> | null;
  or?: Array<ModelSubscriptionServiceFilterInput | null> | null;
};

export type ModelSubscriptionBrandAdminsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  brandId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBrandAdminsFilterInput | null> | null;
  or?: Array<ModelSubscriptionBrandAdminsFilterInput | null> | null;
};

export type ModelSubscriptionViewerAdminsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionIDInput | null;
  viewerId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionViewerAdminsFilterInput | null> | null;
  or?: Array<ModelSubscriptionViewerAdminsFilterInput | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type CreateViewerMutation = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateViewerMutation = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteViewerMutation = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateBrandMutation = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateBrandMutation = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteBrandMutation = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateBrandAdminsMutation = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateBrandAdminsMutation = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteBrandAdminsMutation = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateViewerAdminsMutation = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateViewerAdminsMutation = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteViewerAdminsMutation = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetViewerQuery = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListViewersQuery = {
  __typename: "ModelViewerConnection";
  items: Array<{
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetBrandQuery = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListBrandsQuery = {
  __typename: "ModelBrandConnection";
  items: Array<{
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    brand?: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    brandID?: string | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetServiceQuery = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetBrandAdminsQuery = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListBrandAdminsQuery = {
  __typename: "ModelBrandAdminsConnection";
  items: Array<{
    __typename: "BrandAdmins";
    id: string;
    userId: string;
    brandId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    brand: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetViewerAdminsQuery = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListViewerAdminsQuery = {
  __typename: "ModelViewerAdminsConnection";
  items: Array<{
    __typename: "ViewerAdmins";
    id: string;
    userId: string;
    viewerId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    viewer: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type UsersByViewerIdQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type ViewersByOwnerIdQuery = {
  __typename: "ModelViewerConnection";
  items: Array<{
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type BrandsByOwnerIdQuery = {
  __typename: "ModelBrandConnection";
  items: Array<{
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type PostsByAuthorIdQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    brand?: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    brandID?: string | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type PostsByBrandIDQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    brand?: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    brandID?: string | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type PostsByViewerIDQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    brand?: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    brandID?: string | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type ServicesByAuthorIdQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type ServicesByViewerIDQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    viewerID?: string | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type BrandAdminsByUserIdQuery = {
  __typename: "ModelBrandAdminsConnection";
  items: Array<{
    __typename: "BrandAdmins";
    id: string;
    userId: string;
    brandId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    brand: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type BrandAdminsByBrandIdQuery = {
  __typename: "ModelBrandAdminsConnection";
  items: Array<{
    __typename: "BrandAdmins";
    id: string;
    userId: string;
    brandId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    brand: {
      __typename: "Brand";
      id: string;
      name: string;
      logo?: string | null;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type ViewerAdminsByUserIdQuery = {
  __typename: "ModelViewerAdminsConnection";
  items: Array<{
    __typename: "ViewerAdmins";
    id: string;
    userId: string;
    viewerId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    viewer: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type ViewerAdminsByViewerIdQuery = {
  __typename: "ModelViewerAdminsConnection";
  items: Array<{
    __typename: "ViewerAdmins";
    id: string;
    userId: string;
    viewerId: string;
    user: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    };
    viewer: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  profilePhoto?: string | null;
  bio?: string | null;
  viewerId?: string | null;
  brands?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewers?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
};

export type OnCreateViewerSubscription = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateViewerSubscription = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteViewerSubscription = {
  __typename: "Viewer";
  id: string;
  name: string;
  description: string;
  ownerId: string;
  owner?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  admins?: {
    __typename: "ModelViewerAdminsConnection";
    items: Array<{
      __typename: "ViewerAdmins";
      id: string;
      userId: string;
      viewerId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  services?: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      content: string;
      authorId: string;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateBrandSubscription = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateBrandSubscription = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteBrandSubscription = {
  __typename: "Brand";
  id: string;
  name: string;
  logo?: string | null;
  description: string;
  ownerId: string;
  admins?: {
    __typename: "ModelBrandAdminsConnection";
    items: Array<{
      __typename: "BrandAdmins";
      id: string;
      userId: string;
      brandId: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      authorId: string;
      brandID?: string | null;
      viewerID?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  brand?: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  brandID?: string | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  } | null;
  viewerID?: string | null;
  viewer?: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateBrandAdminsSubscription = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBrandAdminsSubscription = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBrandAdminsSubscription = {
  __typename: "BrandAdmins";
  id: string;
  userId: string;
  brandId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  brand: {
    __typename: "Brand";
    id: string;
    name: string;
    logo?: string | null;
    description: string;
    ownerId: string;
    admins?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateViewerAdminsSubscription = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateViewerAdminsSubscription = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteViewerAdminsSubscription = {
  __typename: "ViewerAdmins";
  id: string;
  userId: string;
  viewerId: string;
  user: {
    __typename: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    profilePhoto?: string | null;
    bio?: string | null;
    viewerId?: string | null;
    brands?: {
      __typename: "ModelBrandAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewers?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    viewer?: {
      __typename: "Viewer";
      id: string;
      name: string;
      description: string;
      ownerId: string;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
  };
  viewer: {
    __typename: "Viewer";
    id: string;
    name: string;
    description: string;
    ownerId: string;
    owner?: {
      __typename: "User";
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      profilePhoto?: string | null;
      bio?: string | null;
      viewerId?: string | null;
      updatedAt?: string | null;
      createdAt?: string | null;
    } | null;
    admins?: {
      __typename: "ModelViewerAdminsConnection";
      nextToken?: string | null;
    } | null;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
    } | null;
    services?: {
      __typename: "ModelServiceConnection";
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateViewer(
    input: CreateViewerInput,
    condition?: ModelViewerConditionInput
  ): Promise<CreateViewerMutation> {
    const statement = `mutation CreateViewer($input: CreateViewerInput!, $condition: ModelViewerConditionInput) {
        createViewer(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViewerMutation>response.data.createViewer;
  }
  async UpdateViewer(
    input: UpdateViewerInput,
    condition?: ModelViewerConditionInput
  ): Promise<UpdateViewerMutation> {
    const statement = `mutation UpdateViewer($input: UpdateViewerInput!, $condition: ModelViewerConditionInput) {
        updateViewer(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViewerMutation>response.data.updateViewer;
  }
  async DeleteViewer(
    input: DeleteViewerInput,
    condition?: ModelViewerConditionInput
  ): Promise<DeleteViewerMutation> {
    const statement = `mutation DeleteViewer($input: DeleteViewerInput!, $condition: ModelViewerConditionInput) {
        deleteViewer(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViewerMutation>response.data.deleteViewer;
  }
  async CreateBrand(
    input: CreateBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<CreateBrandMutation> {
    const statement = `mutation CreateBrand($input: CreateBrandInput!, $condition: ModelBrandConditionInput) {
        createBrand(input: $input, condition: $condition) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBrandMutation>response.data.createBrand;
  }
  async UpdateBrand(
    input: UpdateBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<UpdateBrandMutation> {
    const statement = `mutation UpdateBrand($input: UpdateBrandInput!, $condition: ModelBrandConditionInput) {
        updateBrand(input: $input, condition: $condition) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBrandMutation>response.data.updateBrand;
  }
  async DeleteBrand(
    input: DeleteBrandInput,
    condition?: ModelBrandConditionInput
  ): Promise<DeleteBrandMutation> {
    const statement = `mutation DeleteBrand($input: DeleteBrandInput!, $condition: ModelBrandConditionInput) {
        deleteBrand(input: $input, condition: $condition) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBrandMutation>response.data.deleteBrand;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateService(
    input: CreateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<CreateServiceMutation> {
    const statement = `mutation CreateService($input: CreateServiceInput!, $condition: ModelServiceConditionInput) {
        createService(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateServiceMutation>response.data.createService;
  }
  async UpdateService(
    input: UpdateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<UpdateServiceMutation> {
    const statement = `mutation UpdateService($input: UpdateServiceInput!, $condition: ModelServiceConditionInput) {
        updateService(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateServiceMutation>response.data.updateService;
  }
  async DeleteService(
    input: DeleteServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<DeleteServiceMutation> {
    const statement = `mutation DeleteService($input: DeleteServiceInput!, $condition: ModelServiceConditionInput) {
        deleteService(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteServiceMutation>response.data.deleteService;
  }
  async CreateBrandAdmins(
    input: CreateBrandAdminsInput,
    condition?: ModelBrandAdminsConditionInput
  ): Promise<CreateBrandAdminsMutation> {
    const statement = `mutation CreateBrandAdmins($input: CreateBrandAdminsInput!, $condition: ModelBrandAdminsConditionInput) {
        createBrandAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBrandAdminsMutation>response.data.createBrandAdmins;
  }
  async UpdateBrandAdmins(
    input: UpdateBrandAdminsInput,
    condition?: ModelBrandAdminsConditionInput
  ): Promise<UpdateBrandAdminsMutation> {
    const statement = `mutation UpdateBrandAdmins($input: UpdateBrandAdminsInput!, $condition: ModelBrandAdminsConditionInput) {
        updateBrandAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBrandAdminsMutation>response.data.updateBrandAdmins;
  }
  async DeleteBrandAdmins(
    input: DeleteBrandAdminsInput,
    condition?: ModelBrandAdminsConditionInput
  ): Promise<DeleteBrandAdminsMutation> {
    const statement = `mutation DeleteBrandAdmins($input: DeleteBrandAdminsInput!, $condition: ModelBrandAdminsConditionInput) {
        deleteBrandAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBrandAdminsMutation>response.data.deleteBrandAdmins;
  }
  async CreateViewerAdmins(
    input: CreateViewerAdminsInput,
    condition?: ModelViewerAdminsConditionInput
  ): Promise<CreateViewerAdminsMutation> {
    const statement = `mutation CreateViewerAdmins($input: CreateViewerAdminsInput!, $condition: ModelViewerAdminsConditionInput) {
        createViewerAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViewerAdminsMutation>response.data.createViewerAdmins;
  }
  async UpdateViewerAdmins(
    input: UpdateViewerAdminsInput,
    condition?: ModelViewerAdminsConditionInput
  ): Promise<UpdateViewerAdminsMutation> {
    const statement = `mutation UpdateViewerAdmins($input: UpdateViewerAdminsInput!, $condition: ModelViewerAdminsConditionInput) {
        updateViewerAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViewerAdminsMutation>response.data.updateViewerAdmins;
  }
  async DeleteViewerAdmins(
    input: DeleteViewerAdminsInput,
    condition?: ModelViewerAdminsConditionInput
  ): Promise<DeleteViewerAdminsMutation> {
    const statement = `mutation DeleteViewerAdmins($input: DeleteViewerAdminsInput!, $condition: ModelViewerAdminsConditionInput) {
        deleteViewerAdmins(input: $input, condition: $condition) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViewerAdminsMutation>response.data.deleteViewerAdmins;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetViewer(id: string): Promise<GetViewerQuery> {
    const statement = `query GetViewer($id: ID!) {
        getViewer(id: $id) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViewerQuery>response.data.getViewer;
  }
  async ListViewers(
    filter?: ModelViewerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViewersQuery> {
    const statement = `query ListViewers($filter: ModelViewerFilterInput, $limit: Int, $nextToken: String) {
        listViewers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListViewersQuery>response.data.listViewers;
  }
  async GetBrand(id: string): Promise<GetBrandQuery> {
    const statement = `query GetBrand($id: ID!) {
        getBrand(id: $id) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBrandQuery>response.data.getBrand;
  }
  async ListBrands(
    filter?: ModelBrandFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBrandsQuery> {
    const statement = `query ListBrands($filter: ModelBrandFilterInput, $limit: Int, $nextToken: String) {
        listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBrandsQuery>response.data.listBrands;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            brandID
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetService(id: string): Promise<GetServiceQuery> {
    const statement = `query GetService($id: ID!) {
        getService(id: $id) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetServiceQuery>response.data.getService;
  }
  async ListServices(
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListServicesQuery> {
    const statement = `query ListServices($filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListServicesQuery>response.data.listServices;
  }
  async GetBrandAdmins(id: string): Promise<GetBrandAdminsQuery> {
    const statement = `query GetBrandAdmins($id: ID!) {
        getBrandAdmins(id: $id) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBrandAdminsQuery>response.data.getBrandAdmins;
  }
  async ListBrandAdmins(
    filter?: ModelBrandAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBrandAdminsQuery> {
    const statement = `query ListBrandAdmins($filter: ModelBrandAdminsFilterInput, $limit: Int, $nextToken: String) {
        listBrandAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            brandId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBrandAdminsQuery>response.data.listBrandAdmins;
  }
  async GetViewerAdmins(id: string): Promise<GetViewerAdminsQuery> {
    const statement = `query GetViewerAdmins($id: ID!) {
        getViewerAdmins(id: $id) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViewerAdminsQuery>response.data.getViewerAdmins;
  }
  async ListViewerAdmins(
    filter?: ModelViewerAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViewerAdminsQuery> {
    const statement = `query ListViewerAdmins($filter: ModelViewerAdminsFilterInput, $limit: Int, $nextToken: String) {
        listViewerAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            viewerId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListViewerAdminsQuery>response.data.listViewerAdmins;
  }
  async UsersByViewerId(
    viewerId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UsersByViewerIdQuery> {
    const statement = `query UsersByViewerId($viewerId: ID!, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        usersByViewerId(
          viewerId: $viewerId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      viewerId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UsersByViewerIdQuery>response.data.usersByViewerId;
  }
  async ViewersByOwnerId(
    ownerId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelViewerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ViewersByOwnerIdQuery> {
    const statement = `query ViewersByOwnerId($ownerId: ID!, $sortDirection: ModelSortDirection, $filter: ModelViewerFilterInput, $limit: Int, $nextToken: String) {
        viewersByOwnerId(
          ownerId: $ownerId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      ownerId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ViewersByOwnerIdQuery>response.data.viewersByOwnerId;
  }
  async BrandsByOwnerId(
    ownerId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBrandFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BrandsByOwnerIdQuery> {
    const statement = `query BrandsByOwnerId($ownerId: ID!, $sortDirection: ModelSortDirection, $filter: ModelBrandFilterInput, $limit: Int, $nextToken: String) {
        brandsByOwnerId(
          ownerId: $ownerId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      ownerId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BrandsByOwnerIdQuery>response.data.brandsByOwnerId;
  }
  async PostsByAuthorId(
    authorId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PostsByAuthorIdQuery> {
    const statement = `query PostsByAuthorId($authorId: ID!, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        postsByAuthorId(
          authorId: $authorId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            brandID
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      authorId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PostsByAuthorIdQuery>response.data.postsByAuthorId;
  }
  async PostsByBrandID(
    brandID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PostsByBrandIDQuery> {
    const statement = `query PostsByBrandID($brandID: ID!, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        postsByBrandID(
          brandID: $brandID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            brandID
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      brandID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PostsByBrandIDQuery>response.data.postsByBrandID;
  }
  async PostsByViewerID(
    viewerID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PostsByViewerIDQuery> {
    const statement = `query PostsByViewerID($viewerID: ID!, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        postsByViewerID(
          viewerID: $viewerID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            brandID
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      viewerID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PostsByViewerIDQuery>response.data.postsByViewerID;
  }
  async ServicesByAuthorId(
    authorId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ServicesByAuthorIdQuery> {
    const statement = `query ServicesByAuthorId($authorId: ID!, $sortDirection: ModelSortDirection, $filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        servicesByAuthorId(
          authorId: $authorId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      authorId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ServicesByAuthorIdQuery>response.data.servicesByAuthorId;
  }
  async ServicesByViewerID(
    viewerID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ServicesByViewerIDQuery> {
    const statement = `query ServicesByViewerID($viewerID: ID!, $sortDirection: ModelSortDirection, $filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        servicesByViewerID(
          viewerID: $viewerID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            title
            content
            authorId
            author {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewerID
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      viewerID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ServicesByViewerIDQuery>response.data.servicesByViewerID;
  }
  async BrandAdminsByUserId(
    userId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBrandAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BrandAdminsByUserIdQuery> {
    const statement = `query BrandAdminsByUserId($userId: ID!, $sortDirection: ModelSortDirection, $filter: ModelBrandAdminsFilterInput, $limit: Int, $nextToken: String) {
        brandAdminsByUserId(
          userId: $userId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            userId
            brandId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BrandAdminsByUserIdQuery>response.data.brandAdminsByUserId;
  }
  async BrandAdminsByBrandId(
    brandId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelBrandAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<BrandAdminsByBrandIdQuery> {
    const statement = `query BrandAdminsByBrandId($brandId: ID!, $sortDirection: ModelSortDirection, $filter: ModelBrandAdminsFilterInput, $limit: Int, $nextToken: String) {
        brandAdminsByBrandId(
          brandId: $brandId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            userId
            brandId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            brand {
              __typename
              id
              name
              logo
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      brandId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BrandAdminsByBrandIdQuery>response.data.brandAdminsByBrandId;
  }
  async ViewerAdminsByUserId(
    userId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelViewerAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ViewerAdminsByUserIdQuery> {
    const statement = `query ViewerAdminsByUserId($userId: ID!, $sortDirection: ModelSortDirection, $filter: ModelViewerAdminsFilterInput, $limit: Int, $nextToken: String) {
        viewerAdminsByUserId(
          userId: $userId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            userId
            viewerId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ViewerAdminsByUserIdQuery>response.data.viewerAdminsByUserId;
  }
  async ViewerAdminsByViewerId(
    viewerId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelViewerAdminsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ViewerAdminsByViewerIdQuery> {
    const statement = `query ViewerAdminsByViewerId($viewerId: ID!, $sortDirection: ModelSortDirection, $filter: ModelViewerAdminsFilterInput, $limit: Int, $nextToken: String) {
        viewerAdminsByViewerId(
          viewerId: $viewerId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            userId
            viewerId
            user {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      viewerId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ViewerAdminsByViewerIdQuery>response.data.viewerAdminsByViewerId;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          firstName
          lastName
          email
          profilePhoto
          bio
          viewerId
          brands {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewers {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateViewerListener(
    filter?: ModelSubscriptionViewerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateViewer">>
  > {
    const statement = `subscription OnCreateViewer($filter: ModelSubscriptionViewerFilterInput) {
        onCreateViewer(filter: $filter) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateViewer">>
    >;
  }

  OnUpdateViewerListener(
    filter?: ModelSubscriptionViewerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateViewer">>
  > {
    const statement = `subscription OnUpdateViewer($filter: ModelSubscriptionViewerFilterInput) {
        onUpdateViewer(filter: $filter) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateViewer">>
    >;
  }

  OnDeleteViewerListener(
    filter?: ModelSubscriptionViewerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteViewer">>
  > {
    const statement = `subscription OnDeleteViewer($filter: ModelSubscriptionViewerFilterInput) {
        onDeleteViewer(filter: $filter) {
          __typename
          id
          name
          description
          ownerId
          owner {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          admins {
            __typename
            items {
              __typename
              id
              userId
              viewerId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteViewer">>
    >;
  }

  OnCreateBrandListener(
    filter?: ModelSubscriptionBrandFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrand">>
  > {
    const statement = `subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
        onCreateBrand(filter: $filter) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrand">>
    >;
  }

  OnUpdateBrandListener(
    filter?: ModelSubscriptionBrandFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrand">>
  > {
    const statement = `subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
        onUpdateBrand(filter: $filter) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrand">>
    >;
  }

  OnDeleteBrandListener(
    filter?: ModelSubscriptionBrandFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrand">>
  > {
    const statement = `subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
        onDeleteBrand(filter: $filter) {
          __typename
          id
          name
          logo
          description
          ownerId
          admins {
            __typename
            items {
              __typename
              id
              userId
              brandId
              createdAt
              updatedAt
            }
            nextToken
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              authorId
              brandID
              viewerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrand">>
    >;
  }

  OnCreatePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > {
    const statement = `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
        onCreatePost(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
    >;
  }

  OnUpdatePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > {
    const statement = `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
        onUpdatePost(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
    >;
  }

  OnDeletePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > {
    const statement = `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
        onDeletePost(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandID
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
    >;
  }

  OnCreateServiceListener(
    filter?: ModelSubscriptionServiceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateService">>
  > {
    const statement = `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
        onCreateService(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateService">>
    >;
  }

  OnUpdateServiceListener(
    filter?: ModelSubscriptionServiceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateService">>
  > {
    const statement = `subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
        onUpdateService(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateService">>
    >;
  }

  OnDeleteServiceListener(
    filter?: ModelSubscriptionServiceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteService">>
  > {
    const statement = `subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
        onDeleteService(filter: $filter) {
          __typename
          id
          title
          content
          authorId
          author {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewerID
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteService">>
    >;
  }

  OnCreateBrandAdminsListener(
    filter?: ModelSubscriptionBrandAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrandAdmins">>
  > {
    const statement = `subscription OnCreateBrandAdmins($filter: ModelSubscriptionBrandAdminsFilterInput) {
        onCreateBrandAdmins(filter: $filter) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBrandAdmins">>
    >;
  }

  OnUpdateBrandAdminsListener(
    filter?: ModelSubscriptionBrandAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrandAdmins">>
  > {
    const statement = `subscription OnUpdateBrandAdmins($filter: ModelSubscriptionBrandAdminsFilterInput) {
        onUpdateBrandAdmins(filter: $filter) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBrandAdmins">>
    >;
  }

  OnDeleteBrandAdminsListener(
    filter?: ModelSubscriptionBrandAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrandAdmins">>
  > {
    const statement = `subscription OnDeleteBrandAdmins($filter: ModelSubscriptionBrandAdminsFilterInput) {
        onDeleteBrandAdmins(filter: $filter) {
          __typename
          id
          userId
          brandId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          brand {
            __typename
            id
            name
            logo
            description
            ownerId
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBrandAdmins">>
    >;
  }

  OnCreateViewerAdminsListener(
    filter?: ModelSubscriptionViewerAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateViewerAdmins">>
  > {
    const statement = `subscription OnCreateViewerAdmins($filter: ModelSubscriptionViewerAdminsFilterInput) {
        onCreateViewerAdmins(filter: $filter) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateViewerAdmins">
      >
    >;
  }

  OnUpdateViewerAdminsListener(
    filter?: ModelSubscriptionViewerAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateViewerAdmins">>
  > {
    const statement = `subscription OnUpdateViewerAdmins($filter: ModelSubscriptionViewerAdminsFilterInput) {
        onUpdateViewerAdmins(filter: $filter) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateViewerAdmins">
      >
    >;
  }

  OnDeleteViewerAdminsListener(
    filter?: ModelSubscriptionViewerAdminsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteViewerAdmins">>
  > {
    const statement = `subscription OnDeleteViewerAdmins($filter: ModelSubscriptionViewerAdminsFilterInput) {
        onDeleteViewerAdmins(filter: $filter) {
          __typename
          id
          userId
          viewerId
          user {
            __typename
            id
            firstName
            lastName
            email
            profilePhoto
            bio
            viewerId
            brands {
              __typename
              nextToken
            }
            viewers {
              __typename
              nextToken
            }
            viewer {
              __typename
              id
              name
              description
              ownerId
              createdAt
              updatedAt
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            updatedAt
            createdAt
          }
          viewer {
            __typename
            id
            name
            description
            ownerId
            owner {
              __typename
              id
              firstName
              lastName
              email
              profilePhoto
              bio
              viewerId
              updatedAt
              createdAt
            }
            admins {
              __typename
              nextToken
            }
            posts {
              __typename
              nextToken
            }
            services {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteViewerAdmins">
      >
    >;
  }
}
