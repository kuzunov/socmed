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