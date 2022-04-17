import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query GetFeedPosts {
    smschema_posts {
      authorId
      body
      heading
    }
  }
`

export const CREATE_POST = gql `
query CreatePost($authorId: String!, $body, $heading) {
  smschema_posts {
    authorId
    body
    heading
  }
}`