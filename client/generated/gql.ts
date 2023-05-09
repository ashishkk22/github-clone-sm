/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetUserDetail {\n  viewer {\n    id\n    name\n    bio\n    login\n    email\n    bio\n    avatarUrl\n    company\n    twitterUsername\n    createdAt\n    isFollowingViewer\n    viewerIsFollowing\n    isViewer\n    location\n    url\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    repositories(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery GetUsername {\n  viewer {\n    id\n    login\n  }\n}\n\nquery GetUserDetailByUserId($name: String!) {\n  user(login: $name) {\n    avatarUrl\n    name\n    login\n    location\n    email\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery getRepos($name: String!, $first: Int, $after: String, $before: String) {\n  user(login: $name) {\n    id\n    login\n    repositories(\n      after: $after\n      first: $first\n      before: $before\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          pushedAt\n          diskUsage\n          url\n          visibility\n          forkCount\n          pushedAt\n          stargazers(first: $first) {\n            totalCount\n          }\n          refs(\n            refPrefix: \"refs/heads/\"\n            orderBy: {direction: DESC, field: TAG_COMMIT_DATE}\n            first: 2\n          ) {\n            edges {\n              node {\n                name\n                id\n                target {\n                  ... on Commit {\n                    history(first: 1) {\n                      edges {\n                        node {\n                          committedDate\n                          author {\n                            name\n                          }\n                          message\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          languages(first: $first) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n        }\n        cursor\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n}\n\nquery getFollower($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    followers(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}\n\nquery getFollowing($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    following(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}": types.GetUserDetailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserDetail {\n  viewer {\n    id\n    name\n    bio\n    login\n    email\n    bio\n    avatarUrl\n    company\n    twitterUsername\n    createdAt\n    isFollowingViewer\n    viewerIsFollowing\n    isViewer\n    location\n    url\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    repositories(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery GetUsername {\n  viewer {\n    id\n    login\n  }\n}\n\nquery GetUserDetailByUserId($name: String!) {\n  user(login: $name) {\n    avatarUrl\n    name\n    login\n    location\n    email\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery getRepos($name: String!, $first: Int, $after: String, $before: String) {\n  user(login: $name) {\n    id\n    login\n    repositories(\n      after: $after\n      first: $first\n      before: $before\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          pushedAt\n          diskUsage\n          url\n          visibility\n          forkCount\n          pushedAt\n          stargazers(first: $first) {\n            totalCount\n          }\n          refs(\n            refPrefix: \"refs/heads/\"\n            orderBy: {direction: DESC, field: TAG_COMMIT_DATE}\n            first: 2\n          ) {\n            edges {\n              node {\n                name\n                id\n                target {\n                  ... on Commit {\n                    history(first: 1) {\n                      edges {\n                        node {\n                          committedDate\n                          author {\n                            name\n                          }\n                          message\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          languages(first: $first) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n        }\n        cursor\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n}\n\nquery getFollower($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    followers(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}\n\nquery getFollowing($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    following(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}"): (typeof documents)["query GetUserDetail {\n  viewer {\n    id\n    name\n    bio\n    login\n    email\n    bio\n    avatarUrl\n    company\n    twitterUsername\n    createdAt\n    isFollowingViewer\n    viewerIsFollowing\n    isViewer\n    location\n    url\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    repositories(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery GetUsername {\n  viewer {\n    id\n    login\n  }\n}\n\nquery GetUserDetailByUserId($name: String!) {\n  user(login: $name) {\n    avatarUrl\n    name\n    login\n    location\n    email\n    followers(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n    following(first: 1) {\n      totalCount\n      nodes {\n        id\n      }\n    }\n  }\n}\n\nquery getRepos($name: String!, $first: Int, $after: String, $before: String) {\n  user(login: $name) {\n    id\n    login\n    repositories(\n      after: $after\n      first: $first\n      before: $before\n      orderBy: {field: PUSHED_AT, direction: DESC}\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          pushedAt\n          diskUsage\n          url\n          visibility\n          forkCount\n          pushedAt\n          stargazers(first: $first) {\n            totalCount\n          }\n          refs(\n            refPrefix: \"refs/heads/\"\n            orderBy: {direction: DESC, field: TAG_COMMIT_DATE}\n            first: 2\n          ) {\n            edges {\n              node {\n                name\n                id\n                target {\n                  ... on Commit {\n                    history(first: 1) {\n                      edges {\n                        node {\n                          committedDate\n                          author {\n                            name\n                          }\n                          message\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          languages(first: $first) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n        }\n        cursor\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n}\n\nquery getFollower($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    followers(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}\n\nquery getFollowing($name: String!, $first: Int, $after: String) {\n  user(login: $name) {\n    id\n    following(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          avatarUrl\n          login\n        }\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;