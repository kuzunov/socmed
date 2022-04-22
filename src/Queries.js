import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query GetFeedPosts {
    smschema_posts {
      authorId
      body
      heading
      id
    }
  }
`

export const CREATE_POST = gql `
mutation CreatePost($post: smschema_posts_insert_input!) {
  insert_smschema_posts_one(object: $post) {
    authorId
    body
    heading
  }
}
`

export const DELETE_POST = gql `
mutation DeletePost($idToDel: bigint!) {
  delete_smschema_posts_by_pk(id: $idToDel) {
    authorId
    body
    heading
    id
  }
}
`