/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String) {
    onCreateVote(owner: $owner) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($owner: String) {
    onUpdateVote(owner: $owner) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($owner: String) {
    onDeleteVote(owner: $owner) {
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
