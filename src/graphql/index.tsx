import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Launch = {
  __typename?: 'Launch';
  flightNumber: Scalars['Int'];
  id: Scalars['ID'];
  isBooked: Scalars['Boolean'];
  mission: Mission;
  rocket: Rocket;
  site: Scalars['String'];
};

export type Launches = {
  __typename?: 'Launches';
  cursor: Scalars['Int'];
  hasMore: Scalars['Boolean'];
  list: Array<Launch>;
};

export type Mission = {
  __typename?: 'Mission';
  missionPatch: Scalars['String'];
  name: Scalars['String'];
};


export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
  login: UserProfile;
};


export type MutationBookTripsArgs = {
  launchIds: Array<Maybe<Scalars['ID']>>;
};


export type MutationCancelTripArgs = {
  launchId: Scalars['ID'];
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
};

export enum PatchSize {
  Large = 'LARGE',
  Small = 'SMALL'
}

export type Query = {
  __typename?: 'Query';
  cartItems: Array<Scalars['ID']>;
  isLoggedIn: Scalars['Boolean'];
  launch: Launch;
  launches: Launches;
  userProfile?: Maybe<UserProfile>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchesArgs = {
  after?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type TripUpdateResponse = {
  __typename?: 'TripUpdateResponse';
  launches: Array<Launch>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  email: Scalars['String'];
  id: Scalars['ID'];
  token?: Maybe<Scalars['String']>;
  trips: Array<Launch>;
};

export type LaunchesQueryVariables = Exact<{
  after?: Maybe<Scalars['Int']>;
}>;


export type LaunchesQuery = { __typename?: 'Query', launches: { __typename?: 'Launches', cursor: number, hasMore: boolean, list: Array<{ __typename?: 'Launch', id: string, isBooked: boolean, flightNumber: number, site: string, rocket: { __typename?: 'Rocket', id: string, name: string, type: string }, mission: { __typename?: 'Mission', name: string, missionPatch: string } }> } };

export type LaunchQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LaunchQuery = { __typename?: 'Query', launch: { __typename?: 'Launch', id: string, isBooked: boolean, flightNumber: number, site: string, rocket: { __typename?: 'Rocket', id: string, name: string, type: string }, mission: { __typename?: 'Mission', name: string, missionPatch: string } } };

export type LaunchFragment = { __typename?: 'Launch', id: string, isBooked: boolean, flightNumber: number, site: string, rocket: { __typename?: 'Rocket', id: string, name: string, type: string }, mission: { __typename?: 'Mission', name: string, missionPatch: string } };

export type BookTripsMutationVariables = Exact<{
  launchIds: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
}>;


export type BookTripsMutation = { __typename?: 'Mutation', bookTrips: { __typename?: 'TripUpdateResponse', success: boolean, message: string, launches: Array<{ __typename?: 'Launch', id: string, isBooked: boolean }> } };

export type CancelTripMutationVariables = Exact<{
  launchId: Scalars['ID'];
}>;


export type CancelTripMutation = { __typename?: 'Mutation', cancelTrip: { __typename?: 'TripUpdateResponse', success: boolean, message: string, launches: Array<{ __typename?: 'Launch', id: string, isBooked: boolean }> } };

export type IsUserLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type IsUserLoggedInQuery = { __typename?: 'Query', isLoggedIn: boolean };

export type GetCartItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartItemsQuery = { __typename?: 'Query', cartItems: Array<string> };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', userProfile?: Maybe<{ __typename?: 'UserProfile', id: string, email: string, token?: Maybe<string>, trips: Array<{ __typename?: 'Launch', id: string, isBooked: boolean, flightNumber: number, site: string, rocket: { __typename?: 'Rocket', id: string, name: string, type: string }, mission: { __typename?: 'Mission', name: string, missionPatch: string } }> }> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserProfile', id: string, token?: Maybe<string> } };

export const LaunchFragmentDoc = gql`
    fragment LaunchFragment on Launch {
  id
  isBooked
  flightNumber
  site
  rocket {
    id
    name
    type
  }
  mission {
    name
    missionPatch
  }
}
    `;
export const LaunchesDocument = gql`
    query Launches($after: Int) {
  launches(after: $after) {
    cursor
    hasMore
    list {
      ...LaunchFragment
    }
  }
}
    ${LaunchFragmentDoc}`;

/**
 * __useLaunchesQuery__
 *
 * To run a query within a React component, call `useLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchesQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useLaunchesQuery(baseOptions?: Apollo.QueryHookOptions<LaunchesQuery, LaunchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaunchesQuery, LaunchesQueryVariables>(LaunchesDocument, options);
      }
export function useLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaunchesQuery, LaunchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaunchesQuery, LaunchesQueryVariables>(LaunchesDocument, options);
        }
export type LaunchesQueryHookResult = ReturnType<typeof useLaunchesQuery>;
export type LaunchesLazyQueryHookResult = ReturnType<typeof useLaunchesLazyQuery>;
export type LaunchesQueryResult = Apollo.QueryResult<LaunchesQuery, LaunchesQueryVariables>;
export const LaunchDocument = gql`
    query Launch($id: ID!) {
  launch(id: $id) {
    ...LaunchFragment
  }
}
    ${LaunchFragmentDoc}`;

/**
 * __useLaunchQuery__
 *
 * To run a query within a React component, call `useLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLaunchQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLaunchQuery(baseOptions: Apollo.QueryHookOptions<LaunchQuery, LaunchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LaunchQuery, LaunchQueryVariables>(LaunchDocument, options);
      }
export function useLaunchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LaunchQuery, LaunchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LaunchQuery, LaunchQueryVariables>(LaunchDocument, options);
        }
export type LaunchQueryHookResult = ReturnType<typeof useLaunchQuery>;
export type LaunchLazyQueryHookResult = ReturnType<typeof useLaunchLazyQuery>;
export type LaunchQueryResult = Apollo.QueryResult<LaunchQuery, LaunchQueryVariables>;
export const BookTripsDocument = gql`
    mutation BookTrips($launchIds: [ID]!) {
  bookTrips(launchIds: $launchIds) {
    success
    message
    launches {
      id
      isBooked
    }
  }
}
    `;
export type BookTripsMutationFn = Apollo.MutationFunction<BookTripsMutation, BookTripsMutationVariables>;

/**
 * __useBookTripsMutation__
 *
 * To run a mutation, you first call `useBookTripsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBookTripsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bookTripsMutation, { data, loading, error }] = useBookTripsMutation({
 *   variables: {
 *      launchIds: // value for 'launchIds'
 *   },
 * });
 */
export function useBookTripsMutation(baseOptions?: Apollo.MutationHookOptions<BookTripsMutation, BookTripsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BookTripsMutation, BookTripsMutationVariables>(BookTripsDocument, options);
      }
export type BookTripsMutationHookResult = ReturnType<typeof useBookTripsMutation>;
export type BookTripsMutationResult = Apollo.MutationResult<BookTripsMutation>;
export type BookTripsMutationOptions = Apollo.BaseMutationOptions<BookTripsMutation, BookTripsMutationVariables>;
export const CancelTripDocument = gql`
    mutation cancelTrip($launchId: ID!) {
  cancelTrip(launchId: $launchId) {
    success
    message
    launches {
      id
      isBooked
    }
  }
}
    `;
export type CancelTripMutationFn = Apollo.MutationFunction<CancelTripMutation, CancelTripMutationVariables>;

/**
 * __useCancelTripMutation__
 *
 * To run a mutation, you first call `useCancelTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelTripMutation, { data, loading, error }] = useCancelTripMutation({
 *   variables: {
 *      launchId: // value for 'launchId'
 *   },
 * });
 */
export function useCancelTripMutation(baseOptions?: Apollo.MutationHookOptions<CancelTripMutation, CancelTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelTripMutation, CancelTripMutationVariables>(CancelTripDocument, options);
      }
export type CancelTripMutationHookResult = ReturnType<typeof useCancelTripMutation>;
export type CancelTripMutationResult = Apollo.MutationResult<CancelTripMutation>;
export type CancelTripMutationOptions = Apollo.BaseMutationOptions<CancelTripMutation, CancelTripMutationVariables>;
export const IsUserLoggedInDocument = gql`
    query IsUserLoggedIn {
  isLoggedIn @client
}
    `;

/**
 * __useIsUserLoggedInQuery__
 *
 * To run a query within a React component, call `useIsUserLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUserLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUserLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsUserLoggedInQuery(baseOptions?: Apollo.QueryHookOptions<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>(IsUserLoggedInDocument, options);
      }
export function useIsUserLoggedInLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>(IsUserLoggedInDocument, options);
        }
export type IsUserLoggedInQueryHookResult = ReturnType<typeof useIsUserLoggedInQuery>;
export type IsUserLoggedInLazyQueryHookResult = ReturnType<typeof useIsUserLoggedInLazyQuery>;
export type IsUserLoggedInQueryResult = Apollo.QueryResult<IsUserLoggedInQuery, IsUserLoggedInQueryVariables>;
export const GetCartItemsDocument = gql`
    query GetCartItems {
  cartItems @client
}
    `;

/**
 * __useGetCartItemsQuery__
 *
 * To run a query within a React component, call `useGetCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
      }
export function useGetCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
        }
export type GetCartItemsQueryHookResult = ReturnType<typeof useGetCartItemsQuery>;
export type GetCartItemsLazyQueryHookResult = ReturnType<typeof useGetCartItemsLazyQuery>;
export type GetCartItemsQueryResult = Apollo.QueryResult<GetCartItemsQuery, GetCartItemsQueryVariables>;
export const UserProfileDocument = gql`
    query UserProfile {
  userProfile {
    id
    email
    token
    trips {
      ...LaunchFragment
    }
  }
}
    ${LaunchFragmentDoc}`;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!) {
  login(email: $email) {
    id
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export type LaunchKeySpecifier = ('flightNumber' | 'id' | 'isBooked' | 'mission' | 'rocket' | 'site' | LaunchKeySpecifier)[];
export type LaunchFieldPolicy = {
	flightNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBooked?: FieldPolicy<any> | FieldReadFunction<any>,
	mission?: FieldPolicy<any> | FieldReadFunction<any>,
	rocket?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LaunchesKeySpecifier = ('cursor' | 'hasMore' | 'list' | LaunchesKeySpecifier)[];
export type LaunchesFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasMore?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MissionKeySpecifier = ('missionPatch' | 'name' | MissionKeySpecifier)[];
export type MissionFieldPolicy = {
	missionPatch?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('bookTrips' | 'cancelTrip' | 'login' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	bookTrips?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelTrip?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cartItems' | 'isLoggedIn' | 'launch' | 'launches' | 'userProfile' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	launch?: FieldPolicy<any> | FieldReadFunction<any>,
	launches?: FieldPolicy<any> | FieldReadFunction<any>,
	userProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RocketKeySpecifier = ('id' | 'name' | 'type' | RocketKeySpecifier)[];
export type RocketFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TripUpdateResponseKeySpecifier = ('launches' | 'message' | 'success' | TripUpdateResponseKeySpecifier)[];
export type TripUpdateResponseFieldPolicy = {
	launches?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserProfileKeySpecifier = ('email' | 'id' | 'token' | 'trips' | UserProfileKeySpecifier)[];
export type UserProfileFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	trips?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Launch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchKeySpecifier | (() => undefined | LaunchKeySpecifier),
		fields?: LaunchFieldPolicy,
	},
	Launches?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LaunchesKeySpecifier | (() => undefined | LaunchesKeySpecifier),
		fields?: LaunchesFieldPolicy,
	},
	Mission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MissionKeySpecifier | (() => undefined | MissionKeySpecifier),
		fields?: MissionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Rocket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RocketKeySpecifier | (() => undefined | RocketKeySpecifier),
		fields?: RocketFieldPolicy,
	},
	TripUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TripUpdateResponseKeySpecifier | (() => undefined | TripUpdateResponseKeySpecifier),
		fields?: TripUpdateResponseFieldPolicy,
	},
	UserProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserProfileKeySpecifier | (() => undefined | UserProfileKeySpecifier),
		fields?: UserProfileFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;