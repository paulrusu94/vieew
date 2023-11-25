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
  onCreateService: OnCreateServiceSubscription;
  onUpdateService: OnUpdateServiceSubscription;
  onDeleteService: OnDeleteServiceSubscription;
};

export type CreateServiceInput = {
  id?: string | null;
  name: string;
  description: string;
  price: number;
};

export type ModelServiceConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelIntInput | null;
  and?: Array<ModelServiceConditionInput | null> | null;
  or?: Array<ModelServiceConditionInput | null> | null;
  not?: ModelServiceConditionInput | null;
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

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Service = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
};

export type DeleteServiceInput = {
  id: string;
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelIntInput | null;
  and?: Array<ModelServiceFilterInput | null> | null;
  or?: Array<ModelServiceFilterInput | null> | null;
  not?: ModelServiceFilterInput | null;
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

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection";
  items: Array<Service | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionServiceFilterInput | null> | null;
  or?: Array<ModelSubscriptionServiceFilterInput | null> | null;
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

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateServiceMutation = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceMutation = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteServiceMutation = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type GetServiceQuery = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type ListServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateServiceSubscription = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateServiceSubscription = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteServiceSubscription = {
  __typename: "Service";
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateService(
    input: CreateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<CreateServiceMutation> {
    const statement = `mutation CreateService($input: CreateServiceInput!, $condition: ModelServiceConditionInput) {
        createService(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
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
          name
          description
          price
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
          name
          description
          price
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
  async GetService(id: string): Promise<GetServiceQuery> {
    const statement = `query GetService($id: ID!) {
        getService(id: $id) {
          __typename
          id
          name
          description
          price
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
            name
            description
            price
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
  OnCreateServiceListener(
    filter?: ModelSubscriptionServiceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateService">>
  > {
    const statement = `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
        onCreateService(filter: $filter) {
          __typename
          id
          name
          description
          price
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
          name
          description
          price
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
          name
          description
          price
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
}
