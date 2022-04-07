import * as React from 'react';
import Post from '../Post/Post';
import { FeedContext } from '../../App';
import { useState,useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../Queries'; 

export interface IFeedProps {
    posts: IPost[]
}
interface IPost {
    body: string,
    authorName: string,
}

export default function Feed() {
    const { data, loading, error } = useQuery(GET_POSTS);
    const {posts, setPosts} = useContext(FeedContext);
    if (loading) return <>'Loading...'</>;
    if (error) return <>`Error! ${error.message}`</>;
    console.log(data);
    return (
        <>
      <div className="feed">
        {
        posts.map((post)=> {
           return <Post {...post}/>
        })}
      </div>
      </>);
}
