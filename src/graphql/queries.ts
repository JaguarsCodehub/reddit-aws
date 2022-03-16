/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      contents
      image
      votes {
        items {
          vote
          id
          createdAt
          updatedAt
          postVotesId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        contents
        image
        votes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        contents
        image
        votes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          contents
          image
          createdAt
          updatedAt
          owner
        }
        content
        createdAt
        updatedAt
        postCommentsId
        owner
      }
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      vote
      id
      post {
        id
        title
        contents
        image
        votes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      postVotesId
      owner
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        vote
        id
        post {
          id
          title
          contents
          image
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        postVotesId
        owner
      }
      nextToken
    }
  }
`;
