import { useQuery, gql } from "@apollo/client";

export const GET_POSTS = gql`
    query getFeedPosts{
        smschema_posts {
            body
            heading
            user {
             username
            }
        }
}
`