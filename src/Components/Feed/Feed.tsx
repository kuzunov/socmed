import * as React from 'react';
import Post from '../Post/Post';
import { FeedContext } from '../../App';
import { useState,useContext } from 'react';

export interface IFeedProps {
    posts: IPost[]
}
interface IPost {
    body: string,
    authorName: string,
}


export default function Feed() {
const {posts, setPosts} = useContext(FeedContext);
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
