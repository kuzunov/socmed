import * as React from 'react';
import Post from '../Post/Post';
import { FeedContext } from '../../App';
import { useState,useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../Queries'; 
import { response } from 'express';

// export interface IFeedProps {
//     posts: IPost[]
// }
// interface IPost {
//     body: string,
//     authorName: string,
// }
export default function Feed() {
    const { data, loading, error } = useQuery(GET_POSTS);
    const {posts, setPosts} = useContext(FeedContext);

    return (
      <div className="feed">
        {  
        loading?( <>Loading...</> ) :
        error? (<>Error! ${error.message}</>) :

        (<>{
          data.smschema_posts.map((post)=> {
            console.log(post);
            return <Post {...post}/>
          })
        }</>)
        }

        {/* posts.map((post)=> {
           return <Post {...post}/>
        })} */}
      </div>
      
      );
}
