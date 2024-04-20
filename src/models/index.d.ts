import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly photo?: string | null;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminServicesId?: string | null;
  readonly influencerServicesId?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly photo?: string | null;
  readonly price: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminServicesId?: string | null;
  readonly influencerServicesId?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerBaseUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseUser, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly brandFollowersId?: string | null;
  readonly influencerFollowersId?: string | null;
  readonly influencerFollowingId?: string | null;
}

type LazyBaseUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseUser, 'id'>;
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly brandFollowersId?: string | null;
  readonly influencerFollowersId?: string | null;
  readonly influencerFollowingId?: string | null;
}

export declare type BaseUser = LazyLoading extends LazyLoadingDisabled ? EagerBaseUser : LazyBaseUser

export declare const BaseUser: (new (init: ModelInit<BaseUser>) => BaseUser) & {
  copyOf(source: BaseUser, mutator: (draft: MutableModel<BaseUser>) => MutableModel<BaseUser> | void): BaseUser;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
  };
  readonly id: string;
  readonly user?: BaseUser | null;
  readonly brands?: (Brand | null)[] | null;
  readonly influencers?: (Influencer | null)[] | null;
  readonly services?: (Service | null)[] | null;
  readonly posts?: (Post | null)[] | null;
  readonly adCampaigns?: (AdCampaign | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminUserId?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
  };
  readonly id: string;
  readonly user: AsyncItem<BaseUser | undefined>;
  readonly brands: AsyncCollection<Brand>;
  readonly influencers: AsyncCollection<Influencer>;
  readonly services: AsyncCollection<Service>;
  readonly posts: AsyncCollection<Post>;
  readonly adCampaigns: AsyncCollection<AdCampaign>;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminUserId?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: BaseUser | null;
  readonly adCampaign?: (AdCampaign | null)[] | null;
  readonly posts?: (Post | null)[] | null;
  readonly followers?: (BaseUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminBrandsId?: string | null;
  readonly brandUserId?: string | null;
}

type LazyBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<BaseUser | undefined>;
  readonly adCampaign: AsyncCollection<AdCampaign>;
  readonly posts: AsyncCollection<Post>;
  readonly followers: AsyncCollection<BaseUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminBrandsId?: string | null;
  readonly brandUserId?: string | null;
}

export declare type Brand = LazyLoading extends LazyLoadingDisabled ? EagerBrand : LazyBrand

export declare const Brand: (new (init: ModelInit<Brand>) => Brand) & {
  copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}

type EagerInfluencer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Influencer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: BaseUser | null;
  readonly services?: (Service | null)[] | null;
  readonly posts?: (Post | null)[] | null;
  readonly followers?: (BaseUser | null)[] | null;
  readonly following?: (BaseUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminInfluencersId?: string | null;
  readonly influencerUserId?: string | null;
}

type LazyInfluencer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Influencer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<BaseUser | undefined>;
  readonly services: AsyncCollection<Service>;
  readonly posts: AsyncCollection<Post>;
  readonly followers: AsyncCollection<BaseUser>;
  readonly following: AsyncCollection<BaseUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminInfluencersId?: string | null;
  readonly influencerUserId?: string | null;
}

export declare type Influencer = LazyLoading extends LazyLoadingDisabled ? EagerInfluencer : LazyInfluencer

export declare const Influencer: (new (init: ModelInit<Influencer>) => Influencer) & {
  copyOf(source: Influencer, mutator: (draft: MutableModel<Influencer>) => MutableModel<Influencer> | void): Influencer;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly brand?: Brand | null;
  readonly influencer?: Influencer | null;
  readonly author?: Admin | null;
  readonly photo?: string | null;
  readonly description: string;
  readonly likes: number;
  readonly comments: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminPostsId?: string | null;
  readonly brandPostsId?: string | null;
  readonly influencerPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly brand: AsyncItem<Brand | undefined>;
  readonly influencer: AsyncItem<Influencer | undefined>;
  readonly author: AsyncItem<Admin | undefined>;
  readonly photo?: string | null;
  readonly description: string;
  readonly likes: number;
  readonly comments: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminPostsId?: string | null;
  readonly brandPostsId?: string | null;
  readonly influencerPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerAdCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdCampaign, 'id'>;
  };
  readonly id: string;
  readonly author?: Admin | null;
  readonly brand?: Brand | null;
  readonly media?: Media | null;
  readonly description: string;
  readonly likes: number;
  readonly comments: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminAdCampaignsId?: string | null;
  readonly brandAdCampaignId?: string | null;
  readonly adCampaignMediaId?: string | null;
}

type LazyAdCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdCampaign, 'id'>;
  };
  readonly id: string;
  readonly author: AsyncItem<Admin | undefined>;
  readonly brand: AsyncItem<Brand | undefined>;
  readonly media: AsyncItem<Media | undefined>;
  readonly description: string;
  readonly likes: number;
  readonly comments: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly adminAdCampaignsId?: string | null;
  readonly brandAdCampaignId?: string | null;
  readonly adCampaignMediaId?: string | null;
}

export declare type AdCampaign = LazyLoading extends LazyLoadingDisabled ? EagerAdCampaign : LazyAdCampaign

export declare const AdCampaign: (new (init: ModelInit<AdCampaign>) => AdCampaign) & {
  copyOf(source: AdCampaign, mutator: (draft: MutableModel<AdCampaign>) => MutableModel<AdCampaign> | void): AdCampaign;
}

type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly file: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly file: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}